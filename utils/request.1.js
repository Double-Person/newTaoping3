import {
	HTTP_REQUEST_URL,
	HEADER,
	TOKENNAME,
	HEADERPARAMS
} from '@/config/app';
import {
	toLogin,
	checkLogin
} from '../libs/login';
import store from '../store';


/**
 * 发送请求
 */
function baseRequest(url, method, data, {
	noAuth = false,
	noVerify = false
}, params) {
	// console.log(url,method,data,noAuth,noVerify,3333333333)
	// return 
	let Url = HTTP_REQUEST_URL,header = HEADER
	if (params != undefined) {
		header = HEADERPARAMS;
	}
	if (!noAuth) {
		//登录过期自动登录
		if (!store.state.app.token && !checkLogin()) {
			toLogin();
			console.log('--------------')
			return Promise.reject({
				msg: '未登录'
			});
		}
	 }

	if (store.state.app.token) header[TOKENNAME] = store.state.app.token;
	console.log(store)
	
	// try{
	// 	let logonToken = uni.getStorageSync('logonToken');
	// 	console.log('====', logonToken)
	// 	if(logonToken) header['Authori-zation']= logonToken.trim();
	// }catch(e){
		
	// }

	return new Promise((reslove, reject) => {
		// console.log(Url + '/api/front/' + url,method,data,header)
		uni.request({
			url: Url + '/api/front/' + url,
			method: method || 'GET',
			header: header,
			data: data || {},
			success: (res) => {
				console.log('-----', res)
				if (noVerify)
					reslove(res.data, res);
				else if (res.data.code == 200)
					reslove(res.data, res);
				
				else if ([410000, 410001, 410002, 401].indexOf(res.data.code) !== -1) {
					toLogin();
					reject(res.data);
				} else
					reject(res.data.message || '系统错误');
			},
			fail: (msg) => {
				console.log(msg,11111)
				reject('请求失败');
			}
		})
	});
}

const request = {};

['options', 'get', 'post', 'put', 'head', 'delete', 'trace', 'connect'].forEach((method) => {
	request[method] = (api, data, opt, params) => baseRequest(api, method, data, opt || {}, params)
});



export default request;
