// 注意:修改了host后,web-view页面要重新编译一下,不然host不一致会导致请求的token错误
const config = {
	version: 'v1.0.0',
	apiVersion: '',
	apiHost: 'http://gateway-admin.test.xyz', //  测试环境
}

export {
	config
};
