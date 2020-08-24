<template>
	<view class="content" id="content">
		<!-- 顶部选项卡 -->
		<view class="tab-header">
			<view 
				class="tab-item" 
				v-for="(item, index) in tabContent" 
				:key="index" 
				:class="{ active: currentIndex == item.title }"
				v-on:click="tabChange(item.title)"
			>
				<text>{{item.name}}</text>
			</view>
		</view>
		<view class="swipers-box">
			<swiper class="swiper-box" :current-item-id="currentIndex" duration="300" @change="swiperChange">
				<swiper-item item-id="a">
					<scroll-view class="panel-scroll-box" :scroll-y="true" :scroll-x="false">
						<text>aa</text>
					</scroll-view>
				</swiper-item>
				<swiper-item item-id="b">
					<scroll-view class="panel-scroll-box" :scroll-y="true" :scroll-x="false">
						<text>bbb</text>
					</scroll-view>
				</swiper-item>
				<swiper-item item-id="c">
					<scroll-view class="panel-scroll-box" :scroll-y="true" :scroll-x="false">
						<text>cccc</text>
					</scroll-view>
				</swiper-item>
				<swiper-item item-id="d">
					<scroll-view class="panel-scroll-box" :scroll-y="true" :scroll-x="false">
						<text>dddd</text>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>

export default {
	components: {
	},
	data() {
		return {
			currentIndex: 'a', // 默认的tab
			tabContent: [
				{
					name: '1111',
					title: 'a'
				},
				{
					name: '2222',
					title: 'b'
				},
				{
					name: '3333',
					title: 'c'
				},
				{
					name: '4444',
					title: 'd'
				},
			]
		};
	},
	methods: {
		tabChange(title) {
			this.currentIndex = title;
		},
		swiperChange(e) {
			let { currentItemId } = e.target;
			this.currentIndex = currentItemId;
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: absolute;
	top: 0;
	left: 0;
}
page,
.content {
	background: #fff;
	height: 100%;
	font-size: 28rpx;
	.swipers-box {
		overflow: hidden;
		position: absolute;
		width: 100%;
		left: 0;
		top: 160rpx + 95rpx;
		bottom: 102.08rpx;
	}
	.swiper-box {
		height: 100%;
		overflow: hidden;
	}
	.panel-scroll-box {
		height: 100%;
	}
	.tab-header {
		flex-direction: row;
		display: flex;
		align-items: center;
		height: 95rpx;
		padding-bottom: 6rpx;
		background: #ffffff;
	}
	.tab-item {
		width: 25%;
		font-size: 28rpx;
		text-align: center;
		height: 100%;
		color: #999999;
		border-bottom: 6rpx solid #ffffff;
		padding: 0 10rpx;
		margin-left: 10rpx;
		margin-right: 10rpx;
		.text {
			padding: 30rpx 0rpx;
			display: block;
			font-size: 29.16rpx;
		}
		&.active {
			color: #007aff;
			border-bottom: 6rpx solid #007aff;
		}
	}
}
</style>
