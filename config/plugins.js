module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "MACRides@strapi.io",
        defaultReplyTo: "MACRides@strapi.io",
      },
    },
  },
});
