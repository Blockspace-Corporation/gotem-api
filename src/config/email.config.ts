// src/config/email.config.ts
export default () => ({
    email: {
      service: process.env.EMAIL_SERVICE,
      port: parseInt(process.env.EMAIL_PORT, 10),
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  