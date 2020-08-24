<template>
	<view>
		接口调用demo
		<uni-list>
			<uni-list-item 
				v-for="(item, index) in list" 
				:key="index" 
				:title="item.attrName" 
				:note="item.attrDesc"
			></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import { demoService } from '../../service/demo.service';
	export default {
		data() {
			return {
				list: []
			};
		},
		mounted() {
			demoService.viewList().then((res) => {
				this.list = res.data.attrs;
			});
		}
	}
</script>

<style lang="scss">

</style>
