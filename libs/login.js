import store from "../store";
import Cache from '../utils/cache';
// #ifdef H5 || APP-PLUS
import {
	isWeixin
} from "../utils";
import auth from './wechat';
// #endif

import {
	LOGIN_STATUS,
	USER_INFO,
	EXPIRES_TIME,
	STATE_R_KEY
} from './../config/cache';

import {
	loginVisitorse
} from '@/api/user.js';

function prePage() {
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 1];
	return prePage.route;
}

export function toLogin(push, pathLogin) {

	return false;
	store.commit("LOGOUT");
	let path = prePage();
	// #ifdef H5
	path = location.href;
	// #endif
	if (!pathLogin)
		pathLogin = '/page/users/login/index'
	Cache.set('login_back_url', path);
	// #ifdef H5 || APP-PLUS
	if (isWeixin()) {
		auth.oAuth();
	} else {
		if (path !== pathLogin) {
			push ? uni.navigateTo({
				url: '/pages/users/user_sgin/index'
			}) : uni.reLaunch({
				url: '/pages/users/user_sgin/index'
			});
		}
	}
	// #endif
}


export function checkLogin() {
	let token = Cache.get(LOGIN_STATUS);
	let expiresTime = Cache.get(EXPIRES_TIME);
	let newTime = Math.round(new Date() / 1000);
	if (expiresTime < newTime || !token) {
		Cache.clear(LOGIN_STATUS);
		Cache.clear(EXPIRES_TIME);
		Cache.clear(USER_INFO);
		Cache.clear(STATE_R_KEY);
		return false;
	} else {
		store.commit('UPDATE_LOGIN', token);
		let userInfo = Cache.get(USER_INFO, true);
		if (userInfo) {
			store.commit('UPDATE_USERINFO', userInfo);
		}
		return true;
	}

}


// 检测token过期401
export function checkTokenOverdue() {
	loginVisitorse().then(res => {
		console.log('token----------', res)
		if (res.code == 200) {
			uni.setStorageSync('Visitorse', res.data);
			try {
				this.$store.commit("LOGIN", {
					'token': res.data.token
				});
			} catch (e) {
				throw new TypeError('游客模式添加全局token错误')
			}
		}
	}).catch(err => console.log('++++++++++++++++++', err))
}
