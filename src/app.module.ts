import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers } from './entites/Customer.entity';
import { CustomerModule } from './components/customer/customer.module';
import { OrderItemsModule } from './components/order-items/order-items.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'sql_store',
      entities: [Customers],
      synchronize: false,
    }),
    CustomerModule,
    OrderItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
