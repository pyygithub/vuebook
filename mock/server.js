let http = require('http');
let fs = require('fs');
let url = require('url')

// 获取热门图书数据
function read(callback) {
  fs.readFile('./book.json','utf8',function(err, data) {
    if(err || data.length == 0) {
      callback([]);
    } else {
      callback(JSON.parse(data));
    }
  });
}

function write(data, callback) {
  fs.writeFile('./book.json', JSON.stringify(data), callback);
}

let pageSize = 5; // 每页显示5个

// 获取轮播图接口数据
let sliders = require('./sliders.js');


http.createServer((req, resp) => {
  // 解决Node跨域问题
  resp.setHeader('Access-Control-Allow-Origin', '*');
  resp.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  resp.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') return resp.end();

  let {pathname, query} = url.parse(req.url, true); // true 将query转换为对象
  // 轮播图
  if(pathname == '/sliders') {
    resp.setHeader('Content-type','application/json;charset=utf8')
    resp.end(JSON.stringify(sliders));
  }

  // 热门图书
  if(pathname == '/hot') {
    read(function(books){
      let hot = books.reverse().slice(0, 9);
      resp.setHeader('Content-type','application/json;charset=utf8')

      setTimeout(() => {
        resp.end(JSON.stringify(hot));
      }, 3000);
    })
    return;
  }

  if(pathname == '/page'){
    let offset = parseInt(query.offset) || 0;
    read(function(books){
        // 每次偏移量 在偏移的基础上增加五条
        let result = books.reverse().slice(offset, offset + pageSize);

        let hasMore = true; // 默认有更多
        // 总数据 <= offset + pageSize 没更多了
        if(books.length <= offset + pageSize) {
          hasMore = false;
        }
        resp.setHeader('Content-type','application/json;charset=utf8')
        setTimeout(() => {
                  resp.end(JSON.stringify({hasMore, books: result}));
        }, 2000)

    });
  }

  // 图书列表(CRUD)
  if(pathname == '/book') {

    let id = parseInt(query.id);  // 取得是string
    switch(req.method) {
      case 'GET':
        if(id) {  // 查一个
          read(function(books) {
            let book = books.find((item) => item.bookId === id) || {};
            resp.setHeader('Content-type','application/json;charset=utf8')
            resp.end(JSON.stringify(book));
          })
        }else{  // 获取所有图书
          read(function(books) {
            resp.setHeader('Content-type','application/json;charset=utf8')
            resp.end(JSON.stringify(books.reverse()));
          })
        }
        break;
      case 'POST':
        break;
      case 'PUT':

        break;
      case 'DELETE':
        read(function(books) {
          books = books.filter((item) => item.bookId !== id);
          write(books, function() {
            resp.setHeader('Content-type','application/json;charset=utf8')
            resp.end(JSON.stringify({}));
          });
        })
        break;
    }
    return;
  }


}).listen(3000);
