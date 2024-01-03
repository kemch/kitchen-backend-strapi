module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('NGINX_URL', ''),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a0490badfcf6797a7217c5e7f4733148'),
    },
  },
});