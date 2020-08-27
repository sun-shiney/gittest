<template>
	<view class="">
		<view class="topview">
			五官清晰头像,更容易受到平台推荐
		</view>
		<view class="itemview">
			<view class="item">
				<image v-if="!img" src="../../static/wei-women.png" mode="" @tap="clickImg"></image>
				<image v-else :src="img" mode="" @tap="clickImg"></image>
			</view>
		</view>
		<view class="btn" @tap="nextBtn">
			注册
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				img:null,
				imgUrl:null
			}
		},
		methods:{
			nextBtn(){
				var that=this;
				if(!that.img){
					uni.showToast({
						icon:'none',
						title:'请上传头像'
					})
					return;
				}
				let url = '?controller=theapi&action=add_user'
				let data = {}
				data['sex'] = uni.getStorageSync('sex');	
				data['true_name'] = uni.getStorageSync('name');
				data['Invitation_code'] = uni.getStorageSync('invite');
				data['birthday'] = uni.getStorageSync('date');
				data['head_ico'] = that.imgUrl;
				data['mobile'] = uni.getStorageSync('phone');
				data['mobile_code'] = uni.getStorageSync('code');
				let method = 'GET'
				this.ajax(url,method,data,function(res){
					console.log(11213141414141414141414124124142);
					if(res.data.return_code== "success"){
						window.location.href="ymzl://loginsuccessid=" + res.data.data.id
					} else{
						uni.showToast({
							icon:'none',
							title:res.data.errMsg
						})
					}
				})
			},
			// 选择图片
			clickImg(){
				let that = this;
				uni.chooseImage({
				    count: 1, //默认9
				     //可以指定是原图还是压缩图，默认二者都有
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
						that.img = res.tempFilePaths[0];
						that.postImg(that.img);
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
					}
				});
			}
		}
	}
</script>

<style>
	.topview{
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
		color: #666666;
		margin-top: 130rpx;
		margin-bottom:80rpx;
	}
	.itemview{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.item{
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.item image{
		width: 240rpx;
		height: 240rpx;
		border-radius: 15rpx;
		margin-bottom: 15rpx;
	}
	.item text{
		font-size: 30rpx;
		color: #C0C0C0;
	}
	.btn{
		position: absolute;
		top: 700rpx;
		width: 590rpx;
		height: 100rpx;
		left: 80rpx;
		text-align: center;
		background-color: #DD524D;
		color: #FFFFFF;
		line-height: 100rpx;
		border-radius: 10rpx;
		font-size: 34rpx;
	}
</style>
