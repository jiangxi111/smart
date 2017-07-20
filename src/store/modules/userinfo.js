const appCom = {
	state:{
	      Authorization: '',
		  userInfo: {
		    userName: ''
		  },
		  loading:false,
		  token:""
	},
    mutations:{
		SHOWLOADING:(state)=>{
			state.loading= true;
		},
		HIDELOADING:(state)=>{
			state.loading= false;
		},
	 	SETTOKEN:(state,type)=>{
	    	state.token= type;
		  },
		SETUSERNAME:(state,username)=>{
		     state.userInfo.userName=username
		  }

	},
	actions:{
		showLoading:({
			commit
		})=>{
			commit("SHOWLOADING")
		},
		hideLoading:({
			commit
		})=>{
			commit("HIDELOADING")
		},
		setToken:({commit,type})=>commit("SETTOKEN"),
		setusername:({
	        commit
	    },username)=>{
	        commit("SETUSERNAME",username)
	    }
	}
}

export default appCom;