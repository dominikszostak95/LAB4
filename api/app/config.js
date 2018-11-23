const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'mongodb://dszostak95:test123@ds115131.mlab.com:15131/lab8',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
