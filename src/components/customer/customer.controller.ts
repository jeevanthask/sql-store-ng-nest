import { Controller, Get, Param } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customers')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  getAllCustomers() {
    return this.customerService.fetchAllCustomers();
  }

  @Get(':customer_id')
  getOneCustomer(@Param('customer_id') customer_id: number) {
    return this.customerService.fetchOneCustomer(customer_id);
  }
}
