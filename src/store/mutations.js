import * as types from './mutation-types'
//是否展示详情
const mutations = {
  [types.ISSHOW](state, res) {
    state.isShowShop = res.status
    state.shopMsg = res.data
    state.showShop = res.data.length
  },

  [types.SHOWDETAIL](state, res) {
    state.shopMsg = res

  }
}

//


export default mutations
