const demo = {
	state: {
		hasLogin: true, // 记录用登录
		globalName: 'xxxxx',
		httpLoading: false
	},
	mutations: { // 全局方法
		UPDATE_LOADING: (state, name) => {
			state.httpLoading = name;
		}
	},
    actions: {
        UPDATE_LOADING: ({commit}, loading) => { 
			commit('UPDATE_LOADING', loading)
		}
    },
	getters: {
		httpLoading: state => state.httpLoading,
		globalName: state => state.globalName
	}
}

export default demo