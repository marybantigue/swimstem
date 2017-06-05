// import Vue from 'vue'

export default {
  CREATE_SETUP (state, payload) {
    state.setup[payload.setup.id] = payload.setup
  },
  LOAD_SETUP (state, payload) {
    state.setup = payload
  }
}
