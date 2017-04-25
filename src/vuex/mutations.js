export const PUSH_NAME = (state, companyName) => {
  let newCompany = {
    name: companyName.name,
    text: "",
    favorite: false
  }
  state.companies.push(newCompany)
  state.activeCompany = newCompany
}

export const ACTIVE_COMPANY = (state, company) => {
  state.activeCompany = company
}

export const EDIT_TEXT = (state, text) => {
  state.activeCompany.text = text
}

export const TOGGLE_FAVORITE = (state) => {
  state.activeCompany.favorite = !state.activeCompany.favorite
}

export const ADD_STEP = (state, {stepName, date}) => {
  let newStep = {
    stepName,
    date
  }
  if(!('steps' in state.activeCompany)) {
    state.activeCompany.steps = []
  }
  state.activeCompany.steps.push(newStep)
}

// export const SAVE_COMPANIES = (state) => {
//   let companyList = JSON.stringify(state.companies)
//   localStorage.setItem("_companyList", companyList)
// }

// export const FETCH_COMPANIES = (state) => {
//   let companyList = localStorage.getItem("_companyList")
//   if (companyList) {
//     state.companies = JSON.parse(companyList)
//   }
// }
