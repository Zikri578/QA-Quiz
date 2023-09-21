const { defineConfig } = require("cypress");

module.exports = defineConfig({

  // ketetapan time out 4 detik
  defaultCommandTimeout: 4000,

  // halaman load 15 detik
  pageLoadTimeout: 15000,

  // ukuran lebar dan tinggi website
  viewportWidth: 900,
  viewportHeight: 700,

  // record video
  video: true,

  env: {
    login_url: '/login',
    register_url: '/register',
    register_url_parameter: '/registerresult/1',
    register_success: '/',
    login_success: '/',
  },

  e2e: {
    baseUrl: 'https://demowebshop.tricentis.com/',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
