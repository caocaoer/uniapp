import {
	config
} from '@/config';

class Util {
	message(msg) {
		uni.showModal({
			title: '提示',
			content: msg,
			showCancel: false
		});
	}

	toast(msg, icon = 'none') {
		uni.showToast({
			title: msg,
			icon
		});
	}
	
}

const util = new Util();

export {
	util
}
