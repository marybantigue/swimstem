// import { guid } from '../../../utils'
import { saveSetup, fetchSetup } from '../api'

export const createSetup = ({ commit }, data) => {
  // let id = guid()
  // let brackets = data.brackets
  // brackets.forEach(function(bracket) {
  //   bracket.setupId = id
  // }, this)
  // TO-DO: save the brackets with bID
  // data.brackets = null
  // let setup = Object.assign({ id: id }, data)
  console.log(data)
  commit('CREATE_SETUP', {setup: data})
  saveSetup(data)
}

export const loadSetup = ({ state, commit }) => {
  // loads accounts only if they are not already loaded
  if (!state.setup || Object.keys(state.setup).length === 0) {
    return fetchSetup().then((res) => {
      commit('LOAD_SETUP', res)
    })
  }
}
