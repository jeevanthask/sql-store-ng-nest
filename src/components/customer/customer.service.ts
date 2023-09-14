import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Customers } from 'src/entites/Customer.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customers)
    private customerRepository: Repository<Customers>,
  ) {}

  fetchAllCustomers(): Promise<Customers[]> {
    return this.customerRepository.find();
  }

  fetchOneCustomer(customer_id: number): Promise<Customers> {
    return this.customerRepository.findOneBy({ customer_id });
  }
}
