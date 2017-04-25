const savePlugin = store => { // called everytime theres an mutation
  store.subscribe((mutation, {companies}) => { // (mutation, state)
    window.localStorage.setItem("_companyList", JSON.stringify(companies))
  })
}

export default [savePlugin]
