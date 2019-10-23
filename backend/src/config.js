import dotenv from 'dotenv';
dotenv.config({ path: 'instance/.env' });


const env = process.env.NODE_ENV;

const dev = {
  app: {
    port: parseInt(process.env.DEV_APP_PORT) || 3000,
    dbURL: process.env.DEV_DATABASE_URL
  }
};

const test = {
  app: {
    port: parseInt(process.env.TEST_APP_PORT) || 3000,
    dbURL: process.env.TEST_DATABASE_URL
  }
};

const prod = {
  app: {
    port: parseInt(process.env.PROD_APP_PORT) || 3000,
    dbURL: process.env.PROD_DATABASE_URL
  }
};

const config = {
  dev,
  test,
  prod
};


export default config[env];
