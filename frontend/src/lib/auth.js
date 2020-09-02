class Auth {

  static setToken(token) {
    localStorage.setItem('token', token)
  }

  static getToken() {
    localStorage.getItem('token')
  }

  static logout() {
    localStorage.removeItem('token')
  }
}

export default Auth