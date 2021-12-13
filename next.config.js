if (process.env.NODE_ENV === 'development') require('dotenv').config();

const USE_PRODUCTION_API = !!process.env.USE_PRODUCTION_API;
const API_URL = USE_PRODUCTION_API ? process.env.PRODUCTION_API : process.env.API_URL;

const webpack = require('webpack');

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    return config
  },
  publicRuntimeConfig: {
    API_URL: API_URL,
  }
};
