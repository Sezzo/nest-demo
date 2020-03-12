import { createConnection } from 'typeorm';
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'w017b332.kasserver.com',
      port: 3306,
      username: 'd0317f2b',
      password: 'nesttest',
      database: 'd0317f2b',
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];