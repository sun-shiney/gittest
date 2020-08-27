import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.goPage = function(url){
	if (uni.getStorageSync('token')) {
			if (url) {
				uni.navigateTo({
					url: url
				});
			}
			return false
	}
	uni.showModal({
		title: '未登录！',
		content: '您还未登录，是否前往登录？',
		success: res => {
			if (res.confirm) {
				uni.navigateTo({
					url: 'pages/index/logon'
				})
			} else {
				if (!url) {
					uni.showTabBar({
						url: 'pages/index/logon'
					})
				} 
			}
		}
	})
}
//Vue.prototype.webUrl = 'http://yipinxiu.zgqcq.top/api';
// Vue.prototype.webUrl = 'http://192.168.3.13:8085';
Vue.prototype.webUrl = 'http://ymzl.2828k.cn/index.php';
Vue.prototype.siteId = '1';

var setToken = () => {
	var ttoken = "";
	if (uni.getStorageSync('token')) {
		ttoken = "Bearer " + uni.getStorageSync('token');
	}
	// console.log("ttoken="+ttoken)
	Vue.prototype.token = ttoken;
	return ttoken
}
setToken()

Vue.prototype.ajax = function(url,method,data,callBack){
	uni.showLoading({
		title:'加载中',
		mask:true
	})
	uni.request({
		url: '/api' + url,
		method: method,
		data: data,
		header: { 
			'content-type': 'application/x-www-form-urlencoded',
			'content-type': 'application/json',
			// 'Authorization': setToken(),
			},
		success: res => {
			console.log(JSON.stringify(res))
			callBack(res)
			// if (res.data.return_code == "success") {
				
			// }
			// if(res.data.code == 404){
			// 	uni.showToast({
			// 		icon:'none',
			// 		title: res.data.msg
			// 	});
			// }
			// if(res.data.code == 500){
			// 	uni.showToast({
			// 		icon:'none',
			// 		title: res.data.msg
			// 	});
			// }
		},
		fail: () => {
			uni.showToast({
				icon: 'none',
				title: '网络异常,请稍后重试'
			});
		},
		complete: () => {
			uni.hideLoading()
		}
	});
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

