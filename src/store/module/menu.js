const state = {
  menuItems: {}
}
const getters = {
  getMenuItems: state => state.menuItems
}
const mutations = {
  setMenuItems(state, payload) {
    state.menuItems = payload;
  },
  // 讲匹配到的对象在menuitem中删除
  removeMenuItems(state, data) {
    state
      .menuItems
      .forEach((item, index) => {
        if (item === data) {
          state
            .menuItems
            .splice(index, 1);
        }
      });
  },
  // 讲新添加的pizza push到menuItems中
  pushToMenuItems(state, data) {
    state
      .menuItems
      .push(data);
  }
}
const actions = {}

export default {
  state,
  getters,
  actions,
  mutations
}