
const getters = {
  getusertoken:(state) =>{
  	return state.app.token
  },
  getLoading: state => state.app.loading,
  getUsername: (state) => {
  	return state.app.userInfo
  }
};

export default getters




