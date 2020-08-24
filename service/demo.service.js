/*
 * demo的服务
 */
import BasicService from './BasicService';

class DemoService extends BasicService {
	
	constructor() {
		super();
	}

	// demo-api
	/**
	 * 法一
	 * @param {Object} params   
	 * {
			pageNum: 1,
			pageSize: 3 // ...params
		}
	 */
	async demo1Request(params) {
		const {
			data
		} = await this.post('/demo/list', params);
		return data;
	}
	
	/**
	 * 法二
	 * @param {Object} params
	 * {
			pageNum: 1,
			pageSize: 3 // ...params
		}
	 */
	demo2Request(params) {
		return this.post(`/demo/list`, params).then(res => {
			let data = null;
			if (res) {
				data = res.data;
			} else {
				message.error('获取数据失败，请重新登录');
				return;
			}
			return data;
		});
	}
	
	viewList() {
		return this.get(`/admin/meta/objects/m8_sys_application/view`).then(res => {
			let data = null;
			if (res) {
				data = res.data;
			} else {
				message.error('获取数据失败，请重新登录');
				return;
			}
			return data;
		});
	}
	
}

export const demoService = new DemoService();
