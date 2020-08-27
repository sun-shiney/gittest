<template>
	<view class="content">
		<view class="topview">
			<view class="itemview">
				<view class="item-left">
					头像
				</view>
				<view class="item-right" @tap="xiugaiziliao">
					<view class="right-a">
						<image v-if="!iconImg" src="../../static/wei-women.png" mode=""></image>
						<image v-else :src="iconImg" mode=""></image>
					</view>
					<view class="right-b">
						<image src="../../static/Returnedyou.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="itemview">
				<view class="item-left">
					我的相册
				</view>
				<view class="item-right">
					<view class="right-b">
						<image src="../../static/Returnedyou.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="itemview">
				<view class="item-left">
					封面视频
				</view>
				<view class="item-right">
					<view class="right-b">
						<image src="../../static/Returnedyou.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="itemview">
				<view class="item-left">
					语音介绍
				</view>
				<view class="item-right">
					<view class="right-b">
						<image src="../../static/Returnedyou.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="itemview">
				<view class="item-left">
					我的动态
				</view>
				<view class="item-right">
					<view class="right-b">
						<image src="../../static/Returnedyou.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="itemview">
				<view class="item-left">
					我的爱好
				</view>
				<view class="item-right">
					<view class="right-b">
						<image src="../../static/Returnedyou.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="itemview">
				<view class="item-left">
					内心独白
				</view>
				<view class="item-right">
					<view class="right-b">
						<image src="../../static/Returnedyou.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="topview">
			<view class="xuanze">
				<view  :class="isjiben?'jiben1':'jiben2'" @tap="isjiben=true">
					<text>基本条件</text>
					
				</view>
				<view  :class="isjiben?'jiben2':'jiben1'" @tap="isjiben=false">
					<text>择偶条件</text>
				</view>
			</view>
			<view v-if="isjiben" class="">
				<view class="itemview">
					<view class="item-left">
						昵称
					</view>
					<view class="item-right">
						<view class="right-c">
							<input type="text" value="" v-model="username" placeholder="请输入昵称"/>
						</view>
						<view class="right-b">
							<image src="../../static/Returnedyou.png" mode=""></image>
						</view>
					</view>
				</view>
				<picker mode="selector" :range="sexList" @change="changeSex">
					<view class="itemview">
						<view class="item-left">
							性别
						</view>
						<view class="item-right">
							<view class="right-d">
								{{sex}}
							</view>
							<view class="right-b">
								<image src="../../static/Returnedyou.png" mode=""></image>
							</view>
						</view>
					</view>
				</picker>
				<picker mode="date"  @change="changeDate">
					<view class="itemview">
						<view class="item-left">
							生日
						</view>
						<view class="item-right">
							<view class="right-d">
								{{shengri}}
							</view>
							<view class="right-b">
								<image src="../../static/Returnedyou.png" mode=""></image>
							</view>
						</view>
					</view>
				</picker>
				<picker mode="selector" :range="shengaoList" @change="changeShenGao">
					<view class="itemview">
						<view class="item-left">
							身高
						</view>
						<view class="item-right">
							<view class="right-d">
								{{shengao}}
							</view>
							<view class="right-b">
								<image src="../../static/Returnedyou.png" mode=""></image>
							</view>
						</view>
					</view>
				</picker>
				<picker mode="selector" :range="shouruList" @change="changeShouru">
					<view class="itemview">
						<view class="item-left">
							月收入
						</view>
						<view class="item-right">
							<view class="right-d">
								{{shouru}}
							</view>
							<view class="right-b">
								<image src="../../static/Returnedyou.png" mode=""></image>
							</view>
						</view>
					</view>
				</picker>
				<!-- <view class="itemview">
					<view class="item-left">
						工作地区
					</view>
					<view class="item-right">
						<view class="right-c">
							<text>{{workAddress}}</text>
						</view>
						<view class="right-b">
							<image src="../../static/Returnedyou.png" mode=""></image>
						</view>
					</view>
				</view> -->
			</view>
			<view v-else class="">
				<picker mode="selector" :range="zoAgeList" @change="changeZOAge">
					<view class="itemview">
						<view class="item-left">
							年龄
						</view>
						<view class="item-right">
							<view class="right-d">
								{{zoAge}}
							</view>
							<view class="right-b">
								<image src="../../static/Returnedyou.png" mode=""></image>
							</view>
						</view>
					</view>
				</picker>
				<picker mode="selector" :range="zoShengaoList" @change="changeZOShengao">
					<view class="itemview">
						<view class="item-left">
							身高
						</view>
						<view class="item-right">
							<view class="right-d">
								{{zoShengao}}
							</view>
							<view class="right-b">
								<image src="../../static/Returnedyou.png" mode=""></image>
							</view>
						</view>
					</view>
				</picker>
				<picker mode="selector" :range="zoYueshouruList" @change="changeZOyueshouru">
					<view class="itemview">
						<view class="item-left">
							月收入
						</view>
						<view class="item-right">
							<view class="right-d">
								{{zoYueshouru}}
							</view>
							<view class="right-b">
								<image src="../../static/Returnedyou.png" mode=""></image>
							</view>
						</view>
					</view>
				</picker>
				<picker mode="selector" :range="zoXueliList" @change="changeZOxueli">
					<view class="itemview">
						<view class="item-left">
							学历
						</view>
						<view class="item-right">
							<view class="right-d">
								{{zoXueli}}
							</view>
							<view class="right-b">
								<image src="../../static/Returnedyou.png" mode=""></image>
							</view>
						</view>
					</view>
				</picker>
				<picker mode="selector" :range="zoHunYinList" @change="changeZOhunyin">
					<view class="itemview">
						<view class="item-left">
							婚姻状况
						</view>
						<view class="item-right">
							<view class="right-d">
								{{zoHunYinqk}}
							</view>
							<view class="right-b">
								<image src="../../static/Returnedyou.png" mode=""></image>
							</view>
						</view>
					</view>
				</picker>
				<picker mode="selector" :range="zoTixingList" @change="changeZOTixing">
					<view class="itemview">
						<view class="item-left">
							体型
						</view>
						<view class="item-right">
							<view class="right-d">
								{{zoTixing}}
							</view>
							<view class="right-b">
								<image src="../../static/Returnedyou.png" mode=""></image>
							</view>
						</view>
					</view>
				</picker>
				<picker mode="selector" :range="zoXiaoHaiList" @change="changeZOxiaohai">
					<view class="itemview">
						<view class="item-left">
							有没有小孩
						</view>
						<view class="item-right">
							<view class="right-d">
								{{zoXiaoHai}}
							</view>
							<view class="right-b">
								<image src="../../static/Returnedyou.png" mode=""></image>
							</view>
						</view>
					</view>
				</picker>
				<picker mode="selector" :range="zoXiangyaoList" @change="changeZOxiangyao">
					<view class="itemview">
						<view class="item-left">
							是否想要孩子
						</view>
						<view class="item-right">
							<view class="right-d">
								{{zoXiangyao}}
							</view>
							<view class="right-b">
								<image src="../../static/Returnedyou.png" mode=""></image>
							</view>
						</view>
					</view>
				</picker>
				<picker mode="selector" :range="zoChouyanList" @change="changeZOchouyan">
					<view class="itemview">
						<view class="item-left">
							是否抽烟
						</view>
						<view class="item-right">
							<view class="right-d">
								{{zoChouyan}}
							</view>
							<view class="right-b">
								<image src="../../static/Returnedyou.png" mode=""></image>
							</view>
						</view>
					</view>
				</picker>
				<picker mode="selector" :range="zoHejiuList" @change="changeZOhejiu">
					<view class="itemview">
						<view class="item-left">
							是否喝酒
						</view>
						<view class="item-right">
							<view class="right-d">
								{{zoHejiu}}
							</view>
							<view class="right-b">
								<image src="../../static/Returnedyou.png" mode=""></image>
							</view>
						</view>
					</view>
				</picker>
				<picker mode="selector" :range="zoZhaopianlist" @change="changeZOzhaopian">
					<view class="itemview">
						<view class="item-left">
							有无照片
						</view>
						<view class="item-right">
							<view class="right-d">
								{{zoZhaopian}}
							</view>
							<view class="right-b">
								<image src="../../static/Returnedyou.png" mode=""></image>
							</view>
						</view>
					</view>
				</picker>
			</view>
		</view>
	</view>
</template>

<script>
	import LbPicker from '@/components/lb-picker'
	export default {
		data(){
			return{
				userid:null,
				// 全部数据
				allDataDic:{},
				// 头像
				iconImg:null,
				img:null,
				isjiben:true,
				username:null,
				sexList:['男士','女士'],
				sex:null,
				shengri:null,
				shengao:null,
				shengaoList:['130cm','131cm','132cm','133cm','134cm','135cm','136cm','137cm','138cm','139cm','140cm','141cm','142cm','143cm','144cm','145cm','146cm','147 cm','148cm','149cm','150cm','151cm','152cm','153cm','154cm','155cm','156cm','157cm','158cm','159cm','160cm','161cm','162cm','163cm','164cm','165cm','166cm','167cm','168cm','169cm','170cm','171cm','172cm','173cm',],
				shouru:null,
				shouruList:['3000元以下','3001-5000元','5001-8000元','8001-12000元','12001-20000元','20001-50000元','50000元以上'],
				// 以下是择偶选择
				zoAge:null,
				zoAgeList:[],
				zoShengao:null,
				zoShengaoList:[],
				zoYueshouru:null,
				zoYueshouruList:[],
				zoXueli:null,
				zoXueliList:[],
				zoHunYinqk:null,
				zoHunYinList:[],
				zoTixing:null,
				zoTixingList:[],
				zoXiaoHai:null,
				zoXiaoHaiList:[],
				zoXiangyao:null,
				zoXiangyaoList:[],
				zoChouyan:null,
				zoChouyanList:[],
				zoHejiu:null,
				zoHejiuList:[],
				zoZhaopian:null,
				zoZhaopianlist:[]
			}
		},
		onLoad(options) {
			this.userid = options.userid;
			this.getJibenData();
			this.getZeOuData();
			this.getMyInfomation();
		},
		onNavigationBarButtonTap : function (e) {
		    console.log(e);
		    // e的返回格式为json对象：{"text":"测试","index":0}
			var that=this;
			let url = '?controller=theapi&action=user_personal'
			let data = {}
			data['user_id'] = that.userid;
			data['true_name'] = that.username;
			data['sex'] = that.sex=='男'?1:2;
			data['sgao'] = that.shengao;
			data['monthly'] = that.shouru;
			data['birthday'] = that.shengri;
			data['monthly'] = that.shouru;
			data['m_age'] = that.zoAge;
			data['m_height'] = that.zoShengao;
			data['m_monthly'] = that.zoYueshouru;
			data['m_education'] = that.zoXueli;
			data['m_marital'] = that.zoHunYinqk;
			data['m_shape'] = that.zoTixing;
			data['m_ymychildren'] = that.zoXiaoHai;
			data['m_sfchildren'] = that.zoXiangyao;
			data['m_smoking'] = that.zoChouyan;
			data['m_dodrink'] = that.zoHejiu;
			data['m_ywimg'] = that.zoZhaopian;
			let method = 'GET'
			this.ajax(url,method,data,function(res){
				console.log(res);
				if(res.data.return_code== "success"){
					uni.showToast({
						icon:'none',
						title:'保存成功'
					})
					setTimeout(()=>{
						uni.navigateBack()
					}, 500)
				} else{
					uni.showToast({
						icon:'none',
						title:res.data.errMsg
					})
				}
			})
		},
		methods:{
			// 获取个人顶部资料
			getMyInfomation(){
				var that=this;
				let url = '?controller=theapi&action=user_infos'
				let data = {}
				data['siteid'] = that.siteId;	
				data['user_id'] = that.userid;
				console.log('2222222222' + JSON.stringify(data));
				let method = 'GET'
				this.ajax(url,method,data,function(res){
					console.log(res);
					if(res.data.return_code== "success"){
						that.allDataDic = res.data.data;
						that.iconImg = that.allDataDic.head_ico;
						that.username = that.allDataDic.true_name;
						that.sex = that.allDataDic.sex==1?'男':'女';
						that.shengri = that.allDataDic.birthday;
						that.shengao = that.allDataDic.sgao;
						that.shouru = that.allDataDic.monthly;
						
						// 择偶条件数据
						that.zoAge = that.allDataDic.m_age;
						that.zoShengao = that.allDataDic.m_height;
						that.zoYueshouru = that.allDataDic.m_monthly;
						that.zoXueli = that.allDataDic.m_education;
						that.zoHunYinqk = that.allDataDic.m_marital;
						that.zoTixing = that.allDataDic.m_shape;
						that.zoXiaoHai = that.allDataDic.m_ymychildren;
						that.zoXiangyao = that.allDataDic.m_sfchildren;
						that.zoChouyan = that.allDataDic.m_smoking;
						that.zoHejiu = that.allDataDic.m_dodrink;
						that.zoZhaopian = that.allDataDic.m_ywimg;
					} else{
						uni.showToast({
							icon:'none',
							title:res.data.errMsg
						})
					}
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
						this.iconImg = dic.data.img;
						this.postIcon(this.iconImg);
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
			// 获取基本条件选择
			getJibenData(){
				var that=this;
				let url = '?controller=ymapi&action=ymkz&id=2'
				let data = {}
				let method = 'GET'
				this.ajax(url,method,data,function(res){
					// console.log(res);
					if(res.data.return_code== "success"){
						
					} else{
						uni.showToast({
							icon:'none',
							title:res.data.errMsg
						})
					}
				})
			},
			// 获取择偶选择数据
			getZeOuData(){
				var that=this;
				let url = '?controller=ymapi&action=ymkz&id=1'
				let data = {}
				let method = 'GET'
				this.ajax(url,method,data,function(res){
					// console.log(res);
					if(res.data.return_code== "success"){
						var arr = res.data.data.model_attr;
						for (var i = 0; i < arr.length; i++) {
							let dic = arr[i];
							if(dic.name == '年龄'){
								let str = dic.value;
								that.zoAgeList = str.split(',')
							}
							if(dic.name == '身高'){
								let str = dic.value;
								that.zoShengaoList = str.split(',')
							}
							if(dic.name == '月收入'){
								let str = dic.value;
								that.zoYueshouruList = str.split(',')
							}
							if(dic.name == '学历'){
								let str = dic.value;
								that.zoXueliList = str.split(',')
							}
							if(dic.name == '婚姻状况'){
								let str = dic.value;
								that.zoHunYinList = str.split(',')
							}
							if(dic.name == '体型'){
								let str = dic.value;
								that.zoTixingList = str.split(',')
							}
							if(dic.name == '有没有小孩'){
								let str = dic.value;
								that.zoXiaoHaiList = str.split(',')
							}
							if(dic.name == '是否想要小孩'){
								let str = dic.value;
								that.zoXiangyaoList = str.split(',')
							}
							if(dic.name == '是否吸烟'){
								let str = dic.value;
								that.zoChouyanList = str.split(',')
							}
							if(dic.name == '是否喝酒'){
								let str = dic.value;
								that.zoHejiuList = str.split(',')
							}
							if(dic.name == '有无照片'){
								let str = dic.value;
								that.zoZhaopianlist = str.split(',')
							}
						}
					} else{
						uni.showToast({
							icon:'none',
							title:res.data.errMsg
						})
					}
				})
			},
			// 性别选择
			changeSex(e){
				console.log(e);
				this.sex = this.sexList[e.detail.value]
			},
			// 生日选择
			changeDate(e){
				this.shengri = e.detail.value
			},
			// 身高选择
			changeShenGao(e){
				this.shengao = this.shengaoList[e.detail.value]
			},
			// 收入选择
			changeShouru(e){
				this.shouru = this.shouruList[e.detail.value]
			},
			// 择偶年龄选择
			changeZOAge(e){
				this.zoAge = this.zoAgeList[e.detail.value]
			},
			// 择偶身高
			changeZOShengao(e){
				this.zoShengao = this.zoShengaoList[e.detail.value]
			},
			// 择偶月收入
			changeZOyueshouru(e){
				this.zoYueshouru = this.zoYueshouruList[e.detail.value]
			},
			// 择偶学历
			changeZOxueli(e){
				this.zoXueli = this.zoXueliList[e.detail.value]
			},
			// 择偶婚姻状况
			changeZOhunyin(e){
				this.zoHunYinqk = this.zoHunYinList[e.detail.value]
			},
			// 择偶体型
			changeZOTixing(e){
				this.zoTixing = this.zoTixingList[e.detail.value]
			},
			// 择偶有没有小孩
			changeZOxiaohai(e){
				this.zoXiaoHai = this.zoXiaoHaiList[e.detail.value]
			},
			// 择偶是否想要孩子
			changeZOxiangyao(e){
				this.zoXiangyao = this.zoXiangyaoList[e.detail.value]
			},
			// 择偶是否抽烟
			changeZOchouyan(e){
				this.zoChouyan = this.zoChouyanList[e.detail.value]
			},
			// 择偶是否喝酒
			changeZOhejiu(e){
				this.zoHejiu = this.zoHejiuList[e.detail.value]
			},
			// 择偶有无照片
			changeZOzhaopian(e){
				this.zoZhaopian = this.zoZhaopianlist[e.detail.value]
			}
		}
	}
</script>

<style>
	page{
		background-color: #F7F7F7;
		padding: 0 20rpx;
	}
	.content{
		
	}
	.topview{
		background-color: #FFFFFF;
		border-radius: 15rpx;
		padding: 0 20rpx;
		margin-bottom: 20rpx;
		margin-top: 10rpx;
	}
	.itemview{
		padding: 20rpx 0;
		display: flex;
		align-items: center;
		border-bottom: solid 1rpx #EAEAEA;
		justify-content: space-between;
	}
	.item-left{
		font-size: 30rpx;
		color: #333333;
	}
	.item-right{
		display: flex;
		align-items: center;
	}
	.right-a{
		width: 100rpx;
		height: 100rpx;
		border-radius: 5rpx;
	}
	.right-a image{
		width: 100rpx;
		height: 100rpx;
	}
	.right-b{
		width: 45rpx;
		height: 45rpx;
	}
	.right-b image{
		width: 45rpx;
		height: 45rpx;
	}
	.xuanze{
		padding: 20rpx 0;
		display: flex;
		align-items: center;
		border-bottom: solid 1rpx #EAEAEA;
	}
	.jiben1{
		width: 50%;
		font-size: 36rpx;
		color: #000000;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.jiben2{
		width: 50%;
		font-size: 36rpx;
		color: #333333;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.jiben1 text{
		border-bottom: solid 1rpx #BC78F3;
	}
	/* .jiben2 text{
		border-bottom: solid 1rpx #BC78F3;
	} */
	.heng{
		width: 100rpx;
		height: 2rpx;
		color: #BC78F3;
	}
	.right-c{
		margin-right: 5rpx;
	}
	.right-c input{
		text-align: right;
		line-height: 45rpx;
	}
	.right-d{
		font-size: 30rpx;
		color: #111111;
	}
</style>
