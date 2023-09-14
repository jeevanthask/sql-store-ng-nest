import { Controller, Get } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customers')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  getAllCustomers() {
    return this.customerService.fetchAllCustomers();
  }
}
