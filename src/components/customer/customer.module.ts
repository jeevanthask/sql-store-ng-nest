import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers } from 'src/entites/Customer.entity';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService],
  imports: [TypeOrmModule.forFeature([Customers])],
  exports: [TypeOrmModule],
})
export class CustomerModule {}
