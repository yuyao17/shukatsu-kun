export const steps = (state) => {
    if (!('steps' in state.activeCompany)) {
      return
    }
    return state.activeCompany.steps
}

export const company_names_num = (state) => {
  return state.companies.length
}
