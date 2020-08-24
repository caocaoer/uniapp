<template>
	<view class="main-layout"></view>
</template>

<script>
export default {
	name: 'MainLayout',
	props: ['className'],
	beforeMount() {
		const userInfo = uni.getStorageSync('userInfo');
		// const resources = uni.getStorageSync('resources');
		// 如果没有登录，直接跳转到登录界面
		if (!userInfo) {
			uni.redirectTo({
				url: '/pages/login/login'
			});
		}
	}
};
</script>

<style scoped>
.main-layout {
	display: none;
}
</style>
