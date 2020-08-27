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
				请输入登陆密码
			</view>
			</skeleton>
			<skeleton
			  :loading="loading"
			  :row="skeleton2.row"
			  :showAvatar="skeleton2.showAvatar"
			  :showTitle="skeleton2.showTitle"
			>
			<view class="sm">
				输入您的登陆密码
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
				<text @tap="nextBtn">登录</text>
			</view>
		</view>
		<view class="forget" @tap="yzmLogin">
			不知道密码？使用手机验证码登录
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
						title:'请填密码'
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
			// 获取验证码
			yzmLogin(){
				var that=this;
				let url = '?controller=simple&action=_sendMobileCode'
				let data = {}
				data['mobile'] = uni.getStorageSync('phone');			
				let method = 'GET'
				this.ajax(url,method,data,function(res){
					console.log(res);
					if(res.data.return_code== "success"){
						uni.navigateTo({
							url:'loginForCode'
						})
					} else{
						uni.showToast({
							icon:'none',
							title:res.data.data
						})
					}
				})
			}
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
		/* margin-bottom: 30rpx; */
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
	
	/deep/ .forget{
		text-align: center;
		font-size: 30rpx;
		color: #333333;
		text-decoration: underline;
	}
</style>
