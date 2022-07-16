module.exports = ({ env }) => ({
  auth: {
    /*secret: env('ADMIN_JWT_SECRET'),*/
    secret: 'secret_token_xasdasd',
  },
  apiToken: {
    /*salt: env('API_TOKEN_SALT'),*/
    salt: 'salt_token_xasdasd'
  },
});
