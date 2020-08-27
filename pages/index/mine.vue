<template>
	<view class="">
		<uni-nav-bar right-text="编辑资料" title="我" @clickRight="bianjiziliao(userid)"></uni-nav-bar>
		<view class="topview">
			<view class="topview-left" @tap="xiugaiziliao()">
				<image :src="img" mode=""></image>
			</view>
			<view class="topview-right">
				<view class="right1">
				</view>
					{{infomationDic.name}}
				<view class="right2">
					{{infomationDic.erhang}}
				</view>
				<view class="right3">
					预览资料
				</view>
			</view>
		</view>
		<view class="xinxi">
			{{infomationDic.mate}}
		</view>
		<view class="picview">
			<view class="imageitem">
				<image src="../../static/logo.png" mode=""></image>
			</view>
		</view>
		<view class="threeview">
			<view class="threeitem" @tap="woderenzheng()">
				<image src="../../static/woderenzheng.png" mode=""></image>
				<text>我的认证</text>
			</view>
			<view class="threeitem">
				<image src="../../static/wodedongtai.png" mode=""></image>
				<text>我的动态</text>
			</view>
			<view class="threeitem">
				<image src="../../static/xinlingshijie.png" mode=""></image>
				<text>心灵世界</text>
			</view>
		</view>
		<view class="bomview">
			<!-- <view class="bomItem" @tap="denglumima(this.userid)">
				<view class="itemleft">
					<image src="../../static/sheikanguowo.png" mode=""></image>
					<text>设置登陆密码</text>
				</view>
				<view class="itemright">
					
					<image src="../../static/Returnedyou.png" mode=""></image>
				</view>
			</view> -->
			<view class="bomItem">
				<view class="itemleft">
					<image src="../../static/sheikanguowo.png" mode=""></image>
					<text>谁看过我</text>
				</view>
				<view class="itemright">
					<!-- <image class="hongdian" src="../../static/guanzhuwo.png" mode=""></image> -->
					<image src="../../static/Returnedyou.png" mode=""></image>
				</view>
			</view>
			<view class="bomItem">
				<view class="itemleft">
					<image src="../../static/zanguowo.png" mode=""></image>
					<text>赞过我</text>
				</view>
				<view class="itemright">
					<!-- <image class="hongdian" src="../../static/guanzhuwo.png" mode=""></image> -->
					<image src="../../static/Returnedyou.png" mode=""></image>
				</view>
			</view>
			<view class="bomItem">
				<view class="itemleft">
					<image src="../../static/pinglunwo.png" mode=""></image>
					<text>评论我</text>
				</view>
				<view class="itemright">
					<!-- <image class="hongdian" src="../../static/guanzhuwo.png" mode=""></image> -->
					<image src="../../static/Returnedyou.png" mode=""></image>
				</view>
			</view>
			<view class="bomItem">
				<view class="itemleft">
					<image src="../../static/shouhuwo.png" mode=""></image>
					<text>守护我</text>
				</view>
				<view class="itemright">
					<!-- <image class="hongdian" src="../../static/guanzhuwo.png" mode=""></image> -->
					<image src="../../static/Returnedyou.png" mode=""></image>
				</view>
			</view>
			<view class="bomItem">
				<view class="itemleft">
					<image src="../../static/shoudaoliwu.png" mode=""></image>
					<text>收到的礼物</text>
				</view>
				<view class="itemright">
					<!-- <image class="hongdian" src="../../static/guanzhuwo.png" mode=""></image> -->
					<image src="../../static/Returnedyou.png" mode=""></image>
				</view>
			</view>
			<view class="bomItem">
				<view class="itemleft">
					<image src="../../static/wodeqianbao.png" mode=""></image>
					<text>我的钱包</text>
				</view>
				<view class="itemright">
					<!-- <image class="hongdian" src="../../static/guanzhuwo.png" mode=""></image> -->
					<image src="../../static/Returnedyou.png" mode=""></image>
				</view>
			</view>
			<view class="bomItem">
				<view class="itemleft">
					<image src="../../static/zhenxinhuiiyuan.png" mode=""></image>
					<text>真心会员</text>
				</view>
				<view class="itemright">
					<!-- <image class="hongdian" src="../../static/guanzhuwo.png" mode=""></image> -->
					<image src="../../static/Returnedyou.png" mode=""></image>
				</view>
			</view>
			<view class="bomItem">
				<view class="itemleft">
					<image src="../../static/zhenxinhuiiyuan.png" mode=""></image>
					<text>会员中心</text>
				</view>
				<view class="itemright">
					<!-- <image class="hongdian" src="../../static/guanzhuwo.png" mode=""></image> -->
					<image src="../../static/Returnedyou.png" mode=""></image>
				</view>
			</view>
			<view class="bomItem">
				<view class="itemleft">
					<image src="../../static/xingjitequan.png" mode=""></image>
					<text>星级特权</text>
				</view>
				<view class="itemright">
					<!-- <image class="hongdian" src="../../static/guanzhuwo.png" mode=""></image> -->
					<image src="../../static/Returnedyou.png" mode=""></image>
				</view>
			</view>
			<view class="bomItem">
				<view class="itemleft">
					<image src="../../static/zhiyingmendian.png" mode=""></image>
					<text>直营门店</text>
				</view>
				<view class="itemright">
					<!-- <image class="hongdian" src="../../static/guanzhuwo.png" mode=""></image> -->
					<image src="../../static/Returnedyou.png" mode=""></image>
				</view>
			</view>
			<view class="bomItem">
				<view class="itemleft">
					<image src="../../static/ganqingzhuangtai.png" mode=""></image>
					<text>感情状态</text>
				</view>
				<view class="itemright">
					<!-- <image class="hongdian" src="../../static/guanzhuwo.png" mode=""></image> -->
					<image src="../../static/Returnedyou.png" mode=""></image>
				</view>
			</view>
			<view class="bomItem">
				<view class="itemleft">
					<image src="../../static/wangzheng.png" mode=""></image>
					<text>网证</text>
				</view>
				<view class="itemright">
					<!-- <image class="hongdian" src="../../static/guanzhuwo.png" mode=""></image> -->
					<image src="../../static/Returnedyou.png" mode=""></image>
				</view>
			</view>
			<view class="bomItem">
				<view class="itemleft">
					<image src="../../static/anquanzhongxin.png" mode=""></image>
					<text>安全中心</text>
				</view>
				<view class="itemright">
					<!-- <image class="hongdian" src="../../static/guanzhuwo.png" mode=""></image> -->
					<image src="../../static/Returnedyou.png" mode=""></image>
				</view>
			</view>
			<view class="bomItem" @tap="goset">
				<view class="itemleft">
					<image src="../../static/shezhi.png" mode=""></image>
					<text>设置</text>
				</view>
				<view class="itemright">
					<!-- <image class="hongdian" src="../../static/guanzhuwo.png" mode=""></image> -->
					<image src="../../static/Returnedyou.png" mode=""></image>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {uniNavBar},
		data(){
			return{
				userid:null,
				img:null,
				imgUrl:null,
				infomationDic:{}
			}
		},
		onLoad(options) {
			// uni.setStorageSync('userid', options.userid);
			// this.userid = options.userid;
			uni.setStorageSync('userid', '1');
			this.userid = '1';
		},
		onShow() {
			this.getMyInfomation();
		},
		methods:{
			// 设置登陆密码
			denglumima(userid){
				uni.navigateTo({  
					url:'bindPassword?userid=' + userid
				})
			},
			// 获取个人顶部资料
			getMyInfomation(){
				var that=this;
				let url = '?controller=theapi&action=user_info_wo'
				let data = {}
				data['siteid'] = that.siteId;	
				data['user_id'] = that.siteId;
				let method = 'GET'
				this.ajax(url,method,data,function(res){
					console.log(res);
					if(res.data.return_code== "success"){
						that.infomationDic = res.data.data;
						that.img = res.data.data.head_ico;
					} else{
						uni.showToast({
							icon:'none',
							title:res.data.errMsg
						})
					}
				})
			},
			// 编辑资料
			bianjiziliao(id){
				uni.navigateTo({
					url:'../mine/myInfomation?userid=' + id
				})
			},
			// 选择图片
			xiugaiziliao(){
				let that = this;
				uni.chooseImage({
				    count: 1, //默认9
				     //可以指定是原图还是压缩图，默认二者都有
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
						that.img = res.tempFilePaths[0];
						that.postImg(that.img);
						// that.postIcon(that.img);
				    }
				});
			},
			// 上传图片
			postImg(img){
				uni.uploadFile({
					url: this.webUrl + '?controller=theapi&action=user_ico_upload2', //仅为示例，非真实的接口地址
					filePath: img,
					userIcoFile: 'file',
					success: (uploadFileRes) => {
						console.log('1111' + uploadFileRes.data);
						let dic = JSON.parse(uploadFileRes.data)
						console.log(dic.data.img);
						// uni.showToast({
						// 	icon:'none',
						// 	title:'2222222'
						// })
						this.imgUrl = dic.data.img;
						this.postIcon(this.imgUrl);
					}
				});
			},
			// 用户头像上传
			postIcon(imgstr){
				var that=this;
				let url = '?controller=theapi&action=user_ico_upload'
				let data = {}
				data['user_id'] = that.userid;
				data['img'] = imgstr;	
				let method = 'GET'
				this.ajax(url,method,data,function(res){
					console.log(res);
					if(res.data.return_code== "success"){
						uni.showToast({
							icon:'none',
							title:'更换成功'
						})
					} else{
						uni.showToast({
							icon:'none',
							title:res.data.errMsg
						})
					}
				})
			},
			// 设置
			goset(){
				// uni.navigateTo({
				// 	url:'../mine/set'
				// })
				window.location.href="ymzl://goSet"
			},
			// 我的认证
			woderenzheng(){
				window.location.href="ymzl://mycertification"
			}
		}
	}
</script>

<style>
	.tabtit{
		text-align: center;
	}
	.topview{
		padding: 0 30rpx;
		margin-top: 30rpx;
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;
	}
	.topview-left{
		width: 180rpx;
		height: 180rpx;
		margin-right: 20rpx;
	}
	.topview-left image{
		width: 180rpx;
		height: 180rpx;
		border-radius: 10rpx;
	}
	.topview-right{
		display: flex;
		flex-direction: column;
	}
	.right1{
		font-size: 36rpx;
		color: #42475B;
		font-weight: bold;
	}
	.right2{
		font-size: 26rpx;
		color: #424856;
		padding: 25rpx 0;
	}
	.right3{
		font-size: 30rpx;
		color: #bc78f3;
		text-decoration: underline;
	}
	
	.xinxi{
		font-size: 30rpx;
		color: #444756;
		padding: 0 30rpx;
		margin-bottom: 20rpx;
	}	
	
	.picview{
		padding: 0 30rpx;
		margin-bottom: 30rpx;
	}
	.imageitem{
		width: 118rpx;
		height: 118rpx;
	}
	.imageitem image{
		width: 110rpx;
		height: 110rpx;
	}
	.threeview{
		margin-bottom: 20rpx;
		padding: 0 30rpx;
		display: flex;
		align-items: center;
	}
	.threeitem{
		width: 33.3%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.threeitem image{
		width: 45rpx;
		height: 45rpx;
		margin: 15rpx;
	}
	.threeitem text{
		font-size: 32rpx;
		color: #42475b;
	}
	.bomview{
		padding: 0 30rpx;
		border-top: solid 1rpx #eaeaea;
	}
	.bomItem{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 40rpx 0;
		border-bottom: solid 1rpx #eaeaea;
	}
	.itemleft{
		display: flex;
		align-items: center;
	}
	.itemleft image{
		width: 45rpx;
		height: 45rpx;
		margin-right: 20rpx;
	}
	.itemleft text{
		font-size: 30rpx;
		color: #333333;
	}
	
	.itemright{
		display: flex;
		align-items: center;
	}
	.itemright image{
		width: 45rpx;
		height: 45rpx;
	}
	.hongdian{
		width: 0rpx;
		height: 0rpx;
	}
		
</style>
