export const steps = (state) => {
    if (!('steps' in state.activeCompany)) {
      return
    }
    return state.activeCompany.steps
}

export const company_names_num = (state) => {
  return state.companies.length
}

export const active_comp = (state) => {
  return state.activeCompany
}

export const company_names = (state) => {
  return state.companies
}
