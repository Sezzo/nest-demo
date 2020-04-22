
export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT) ,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
    type: process.env.DATABASE_TYPE
  }
});

/*
type: 'mysql',
host: 'w017b332.kasserver.com',
port: 3306,
username: 'd0317f2b',
password: 'nesttest',
database: 'd0317f2b',
*/
