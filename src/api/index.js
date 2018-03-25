/**
 * API接口
 */
import axios from 'axios';

// 默认请求路径
axios.defaults.baseURL = 'http://localhost:3000';

// 响应结果拦截器
axios.interceptors.response.use((res) => res.data);

/**
 * 获取轮播图，返回的是一个promise对象
 * @returns {AxiosPromise<any>}
 */
export const getSliders = () => {
  return axios.get('/sliders');
};

/**
 * 获取热门图书
 * @returns {AxiosPromise<any>}
 */
export const getHotBooks = () => {
  return axios.get('/hot');
};

export const getAll = () => {
  return axios.all([getSliders(), getHotBooks()]);
};

/**
 * 获取图书列表
 * @returns {AxiosPromise<any>}
 */
export const getBookList = () => {
  return axios.get('/book');
}

/**
 * 删除图书
 * @returns {AxiosPromise<any>}
 */
export const removeBook = (id) => {
  return axios.delete(`/book?id=${id}`);
}

/**
 * 获取某一本书
 * @returns {AxiosPromise<any>}
 */
export const findBookById = (id) => {
  return axios.get(`/book?id=${id}`);
}

/**
 * 修改
 * @param id
 * @param data
 * @returns {AxiosPromise<any>}
 */
export const updateBookById = (id, data) => {
  return axios.put(`/book?id=${id}`, data);
}

/**
 * 根据偏移量返回对应的数据  5 5--> 10
 * @param offset
 * @returns {AxiosPromise<any>}
 */
export const pagination = (offset) => {
  return axios.get(`/page?offset=${offset}`);
}
