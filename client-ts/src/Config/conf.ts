const isProd = !(!process.env.NODE_ENV || process.env.NODE_ENV === 'development')

const config = {
  isProd,
  apiPrefix: isProd ? 'https://s10x.coe.psu.ac.th' : 'http://localhost:1337',
}

export default config;