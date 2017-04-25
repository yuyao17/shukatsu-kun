export const pushName = ({commit}, name) => {
  commit('PUSH_NAME', name)
}

export const activeCompany = ({commit}, company) => {
  commit('ACTIVE_COMPANY', company)
}

export const editNote = ({commit}, e) => {
  commit('EDIT_TEXT', e.target.value)
}

export const toggleFavorite = ({commit}) => {
  commit('TOGGLE_FAVORITE')
}

export const addStep = ({commit}, step) => {
  commit('ADD_STEP', step)
}
// export const saveCompanies = ({commit}) => {
//   commit('SAVE_COMPANIES')
// }

// export const fetchCompanies = ({commit}) => {
//   commit('FETCH_COMPANIES')
// }
