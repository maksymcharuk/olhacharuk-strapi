module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/passwords/verify', 
      handler: 'password.verify',
    },
  ]
}