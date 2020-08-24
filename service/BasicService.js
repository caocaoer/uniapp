import {
	config
} from '../config';
import stores from '../store';

const globalOptions = {
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		ssoToken: '123456'
	}
};

export default class BasicService {
	constructor(baseURL = '') {
		this.baseURL = baseURL;
		// const token = uni.getStorageSync('oss_token');
		// if (token) {
		// 	this.setToken(token);
		// }
	}

	get(url, data, options) {
		return this._request('get', url, data, options);
	}

	post(url, data, options) {
		return this._request('post', url, data, options);
	}

	put(url, data, options) {
		return this._request('put', url, data, options);
	}

	delete(url, data, options) {
		return this._request('delete', url, data, options);
	}

	setToken(token) {
		globalOptions.headers['ssoToken'] = `${token}`;
		uni.setStorageSync('oss_token', token);
	}

	_getCurPage() {
		let pages = getCurrentPages();
		let curPage = pages[pages.length - 1];
		return curPage
	}

	_request(method, url, data, options = {}) {
		// login的时候会set token
		const token = uni.getStorageSync('oss_token');  // 暂定token的name
		if (token) {
			this.setToken(token);
		}
		const header = Object.assign({}, globalOptions.headers, options.headers);
		// console.log(`APPhost=${config.apiHost}`)
		// console.log(`APPtoken=${token}`)
		const self = this;
		return new Promise((resolve, reject) => {
			uni.request({
				withCredentials: true,
				method,
				url: config.apiHost + config.apiVersion + url, // url拼接
				data,
				header,
				success: function(res) {
					// TODO 待完善，验证是否登录，过期等
					if (res.data && res.data.statusCode === 4002) {
						// const has_login = uni.getStorageSync('has_login') || 'yes'; // 验证是否登录
						// if(has_login === 'no') {
						// 	reject(res.data);
						// 	return;
						// }
						// 登录过期了
						// uni.reLaunch({
						// 	url: '/pages/login/login'
						// });
						// uni.setStorageSync('has_login', 'no');
						reject(res.data);
						return;
					}
					resolve(res);
				},
				fail: function(err) {
					console.error('请求错误', err);
					// 在这里去处理,如果提示没有登录,跳转到登录页面
					reject(err);
				}
			});
		})
	}
}
