
/**
 * Use this template to create store modules, which will be automatically imported
 */
const initialState = () => ({
  // all your state variables here
  multilinedata: 'This is our multiline data...'
})

const state = {
  ...initialState()
}

const getters = {
  // all your getters here
  getMultiline( state ) {
    return state.multilinedata;
 }
}

const actions = {
  // all your actions here
  /**
     * Action to reset all the state variables to initial value
     */
  reset ({ commit }) {
    commit('RESET')
  },
  fetchVariable({ commit }) {
    return new Promise( (resolve, reject) => {
           // Make network request and fetch data
           // and commit the data
           commit('SET_VARIABLE', data); 
           resolve();
    })
  },//end fetchVariable
  getData({ commit }) {
      alert(
        "Get Data..."
      )
    return new Promise( (resolve, reject) => {
           // Make network request and fetch data
           // and commit the data
           commit('GET_DATA', data); 
           resolve();
    })
  }
}//end actions

const mutations = {
  // all your mutations here
  /**
     * takes the initial state and assigns it to the main state
     */
  RESET (state) {
    Object.keys(initialState()).forEach(key => {
      state[key] = initialState()[key]
    })
  },
  SET_VARIABLE (state, data) {
    data = 'Kismet'
    state.example = data;
    },
  GET_DATA (state, data) {
    data = 'Kismet'
    state.multilinedata = data;
    }
}//end mutations

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
