<template>
	<view class="">
		<view class="tabbar" >
			<view class="statusBar">
				
			</view>
			<view class="barTitle">
		
				<image src="../../static/Returned.png" mode="" @tap="fanhui()"></image>
			</view>
		</view>
		<view class="topview">
			<skeleton
			  :loading="loading"
			  :row="skeleton2.row"
			  :showAvatar="skeleton2.showAvatar"
			  :showTitle="skeleton2.showTitle"
			>
			<view class="zcdl">
				设置登陆密码
			</view>
			</skeleton>
			<skeleton
			  :loading="loading"
			  :row="skeleton2.row"
			  :showAvatar="skeleton2.showAvatar"
			  :showTitle="skeleton2.showTitle"
			>
			<view class="sm">
				需要绑定登陆密码
			</view>
			</skeleton>
		</view>
		<skeleton
		  :loading="loading"
		  :row="skeleton2.row"
		  :showAvatar="skeleton2.showAvatar"
		  :showTitle="skeleton2.showTitle"
		>
		<view class="inputview">
			<view class="threeview">
				<image src="../../static/ph.png" mode=""></image>
				<input type="number" value="" v-model="code" placeholder="请输入密码"/>
				<text @tap="nextBtn">设置</text>
			</view>
		</view>
		</skeleton>
	</view>
</template>

<script>
	import Skeleton from '../../components/primewind-skeleton/components/skeleton/index.vue'
	export default{
		components: {
		  Skeleton,
		},
		data(){
			return{
				code:null,
				loading: true,
				skeleton1: {
				  row: 1,
				  showTitle: false,
				  showAvatar: false,
				},
				skeleton2: {
				  row: 1,
				  showAvatar: false,
				  showTitle: false,
				},
				userid:null
			}
		},
		created() {
		  this.reloadData()
		},
		onLoad(options) {
			this.userid = options.userid;
		},
		methods:{
			nextBtn(){
				var that=this;
				if(!that.code){
					uni.showToast({
						icon:'none',
						title:'请填密码'
					})
					return;
				}
				var that=this;
				let url = '?controller=theapi&action=user_pwd'
				let data = {}
				data['user_id'] = that.userid;
			    data['pwd'] = that.code;
				let method = 'GET'
				this.ajax(url,method,data,function(res){
					if(res.data.return_code== "success"){
						uni.showToast({
							icon:'none',
							title:'设置成功'
						})
						uni.navigateBack();
						// window.location.href="ymzl://backtoandroid"
					} else{
						uni.showToast({
							icon:'none',
							title:res.data.data
						})
					}
				})
			},
			fanhui(){
				console.log(11222);
				// href="http://www.google.com"
				// window.location.href="ymzl://backtoandroid"
				uni.navigateBack();
			},
			reloadData() {
			  this.loading = true
			  setTimeout(() => {
			    this.loading = false
			  }, 1000)
			},
		}
	}
</script>

<style>
	.statusBar{
		height: var(--status-bar-height);
		width: 100%;
	}
	.barTitle{
		width: 100%;
		height: 80rpx;
	}
	.barTitle image{
		margin-left: 25rpx;
		margin-top: 25rpx;
		width: 30rpx;
		height: 30rpx;
	}
	.topview{
		margin-top: 80rpx;
		padding-left: 70rpx;
	}
	/deep/ .zcdl{
		color: #333333;
		font-size: 44rpx;
		font-weight: bold;
		margin-bottom: 20rpx;
	}
	.topview /deep/ .sm{
		font-size: 28rpx;
		color: #999999;
	}
	/deep/ .inputview{
		padding: 70rpx;
		margin-bottom: 30rpx;
	}
	/deep/ .threeview{
		width: 100;
		border-bottom: solid 1rpx #C0C0C0;
		display: flex;
		padding: 20rpx 0;
		align-items: center;
	}
	.threeview image{
		width: 30rpx;
		height: 30rpx;
		margin-right: 10rpx;
	}
	.threeview input{
		font-size: 30rpx;
		color: #333333;
		width: 470rpx;
	}
	.threeview text{
		font-size: 30rpx;
		color: #333333;
	}
</style>
