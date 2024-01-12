module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('URL', 'http://localhost:1337'),
  // 'http://159.203.96.116/api'
  admin: {
    // 'http://159.203.96.116/dashboard'
    url: env('ADMIN_URL', 'http://localhost:1337/dashboard'),
    auth: {
      secret: env('JWT_SECRET', undefined)
    },
  },
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
