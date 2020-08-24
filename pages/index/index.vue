<template>
	<view class="container">
		<view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link>
		
		<view :style="{color}">constants demo</view>
		<view>{{name}}</view>
		
		<uni-list>
			<uni-list-item title="" note=""></uni-list-item>
			<uni-list-item title="" note=""></uni-list-item>
		</uni-list>
		<uni-calendar lunar=""></uni-calendar>
	</view>
</template>

<script>
	import { COLOR_TYPE, NAME_TYPE } from '../../constants/enum';
    import { mapGetters } from 'vuex';
	
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				color: COLOR_TYPE.blueColor,
				name: NAME_TYPE,
			}
		},
		computed: {
			...mapGetters(['globalName', 'httpLoading']),
		},
		mounted() {
			console.log('=======', this.globalName)
			this.$store.dispatch('UPDATE_LOADING', true)
			console.log('=======', this.httpLoading)
		},
		methods: {

		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
