<template>
	<view class="">
		<view class="topview">
			<skeleton
			  :loading="loading"
			  :row="skeleton2.row"
			  :showAvatar="skeleton2.showAvatar"
			  :showTitle="skeleton2.showTitle"
			>
			<view class="zcdl">
				验证码登录
			</view>
			</skeleton>
			<skeleton
			  :loading="loading"
			  :row="skeleton2.row"
			  :showAvatar="skeleton2.showAvatar"
			  :showTitle="skeleton2.showTitle"
			>
			<view class="sm">
				验证码已发送至您的手机
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
				<input type="number" value="" v-model="code" placeholder="请输入验证码"/>
				<text @tap="nextBtn">登录</text>
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
			}
		},
		created() {
		  this.reloadData()
		},
		methods:{
			nextBtn(){
				var that=this;
				if(!that.code){
					uni.showToast({
						icon:'none',
						title:'请填验证码'
					})
					return;
				}
				var that=this;
				let url = '?controller=theapi&action=mobile_login'
				let data = {}
				data['mobile'] = uni.getStorageSync('phone');
			    data['mobile_code'] = that.code;
				let method = 'GET'
				this.ajax(url,method,data,function(res){
					console.log(res);
					if(res.data.return_code== "success"){
						console.log(res.data.data);
						window.location.href="ymzl://loginsuccessid=" + res.data.data.user_id
					} else{
						uni.showToast({
							icon:'none',
							title:res.data.data
						})
					}
				})
				
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
