import createLogger from 'vuex/dist/logger'
import createPersistedState from 'vuex-persistedstate'

const dev = [createLogger(), createPersistedState({
  key: 'shop',
  getState: function (key) {
    let data = JSON.parse(sessionStorage.getItem(key))
    return data
  }
})]

const pro = [createPersistedState({
  key: 'shop',
  getState: function (key) {
    let data = sessionStorage.getItem(key)
    return data
  }
})]

const plugins = process.env.NODE_ENV === 'production' ? pro : dev
export default plugins