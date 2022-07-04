import { createStore } from 'vuex'
import user from './modules/user'
import getters from './getters'
import permission from './modules/Premission'
import tagsview from './modules/tagsview'
import app from './modules/app'

export default createStore({
  getters,
  modules: {
    user,
    permission,
    tagsview,
    app
  }
})
