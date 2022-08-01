module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4873c5a15ad6ef8eb526f1c08b09467d'),
  },
});
