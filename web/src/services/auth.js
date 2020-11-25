export const setUserToken = (token) => localStorage.setItem('alumconnectUserToken', token)
export const setAdminToken = (token) => localStorage.setItem('alumconnectAdminToken', token)

export const isUserLoggedIn = () => localStorage.getItem('alumconnectUserToken')
export const isAdminLoggedIn = () => localStorage.getItem('alumconnectAdminToken')

export const userLogout = callback => {
  localStorage.removeItem('alumconnectUserToken')
  window.location = '/login'
  callback()
}
export const adminLogout = callback => {
  localStorage.removeItem('alumconnectAdminToken')
  window.location = '/admin/login'
  callback()
}
