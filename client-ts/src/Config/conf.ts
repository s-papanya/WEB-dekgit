const isProd = !(!process.env.NODE_ENV || process.env.NODE_ENV === 'development')

const config = {
  isProd,
  apiPrefix: process.env.REACT_APP_API_URL || 'http://localhost:1337',
}

export default config;
