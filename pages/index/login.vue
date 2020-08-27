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
				注册/登录
			</view>
			</skeleton>
			<skeleton
			  :loading="loading"
			  :row="skeleton2.row"
			  :showAvatar="skeleton2.showAvatar"
			  :showTitle="skeleton2.showTitle"
			>
			<view class="sm">
				想脱单,上伊梦之恋!
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
				<input type="number" value="" v-model="phoneNum" placeholder="手机号"/>
				<text @tap="nextBtn">下一步</text>
			</view>
		</view>
		</skeleton>
		<skeleton
		  :loading="loading"
		  :row="skeleton2.row"
		  :showAvatar="skeleton2.showAvatar"
		  :showTitle="skeleton2.showTitle"
		>
		</skeleton>
		<skeleton
		  :loading="loading"
		  :row="skeleton2.row"
		  :showAvatar="skeleton2.showAvatar"
		  :showTitle="skeleton2.showTitle"
		>
		</skeleton>
		<skeleton
		  :loading="loading"
		  :row="skeleton2.row"
		  :showAvatar="skeleton2.showAvatar"
		  :showTitle="skeleton2.showTitle"
		>
		</skeleton>
		<skeleton
		  :loading="loading"
		  :row="skeleton2.row"
		  :showAvatar="skeleton2.showAvatar"
		  :showTitle="skeleton2.showTitle"
		>
		</skeleton>
		<skeleton
		  :loading="loading"
		  :row="skeleton2.row"
		  :showAvatar="skeleton2.showAvatar"
		  :showTitle="skeleton2.showTitle"
		>
		</skeleton>
		<skeleton
		  :loading="loading"
		  :avatarSize="skeleton1.avatarSize"
		  :row="skeleton1.row"
		  :showTitle="skeleton1.showTitle"
		>
		<view class="kuaisu">
			<view class="heng"></view>
			<view class="kuaisu-text">
				快速登录
			</view>
			<view class="heng"></view>
		</view>
		<view class="inputview">
			<view class="itemview">
				<view class="item">
					<image src="../../static/qq.png" mode=""></image>
					<text>QQ</text>
				</view>
				<view class="item">
					<image src="../../static/v.png" mode=""></image>
					<text>微信</text>
				</view>
				<view class="item">
					<image src="../../static/webo.png" mode=""></image>
					<text>微博</text>
				</view>
			</view>
		</view>
		<view class="bomview">
			<text>登陆即代表您同意伊梦之恋</text>
			<view class="bomviewBtn">
				用户协议
			</view>
			<text>和</text>
			<view class="bomviewBtn">
				隐私协议
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
				phoneNum:null,
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
                if(!that.phoneNum){
					uni.showToast({
						icon:'none',
						title:'请填写手机号'
					})
					return;
				}
				uni.setStorageSync('phone', that.phoneNum);
				let url = '?controller=theapi&action=is_login'
				let data = {}
				data['mobile'] = that.phoneNum;			
				let method = 'GET'
				this.ajax(url,method,data,function(res){
					console.log('11111' + JSON.stringify(res));
					if(res.data.data.is_sfzc == 1){
						uni.navigateTo({
							url:'password'
						})
					} else {
						that.getPhoneCode();
					}
				})
			},
			// 获取验证码
			getPhoneCode(){
				var that=this;
				uni.setStorageSync('phone', that.phoneNum);
				let url = '?controller=simple&action=_sendMobileCode'
				let data = {}
				data['mobile'] = that.phoneNum;			
				let method = 'GET'
				this.ajax(url,method,data,function(res){
					console.log(res);
					uni.navigateTo({
						url:'phoneCode'
					})
				})
				
			},
			fanhui(){
				console.log(11222);
				// href="http://www.google.com"
				window.location.href="ymzl://backtoandroid"
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
		margin-bottom: 30rpx;
	}
	.topview /deep/ .sm{
		font-size: 26rpx;
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
	/deep/ .threeview image{
		width: 30rpx;
		height: 30rpx;
		margin-right: 10rpx;
	}
	/deep/ .threeview input{
		font-size: 30rpx;
		color: #333333;
		width: 470rpx;
	}
	/deep/ .threeview text{
		font-size: 30rpx;
		color: #333333;
	}
	/deep/ .kuaisu{
		margin-top: 350rpx;
		display: flex;
		align-items: center;
        justify-content: center;
	}
	/deep/ .kuaisu-text{
		font-size: 26rpx;
		color: #999999;
		margin: 0 30rpx;
	}
	/deep/ .kuaisu .heng{
		width: 150rpx;
		height: 2rpx;
		background-color: #F6F6F6;
	}
	/deep/ .itemview{
		width: 100%;
		display: flex;
		align-items: center;
	}
	/deep/ .item{
		width: 33.3%;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	/deep/ .item image{
		width: 105rpx;
		height: 105rpx;
		margin-bottom: 15rpx;
	}
	/deep/ .item text{
		font-size: 24rpx;
		color: #999999;
	}
	/deep/ .bomview{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	/deep/ .bomview text{
		font-size: 30rpx;
		color: #999999;
	}
	/deep/ .bomviewBtn{
		text-decoration: underline;
		font-size: 34rpx;
		color: #999999;
		margin: 0 10rpx;
	}
</style>
