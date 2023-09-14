import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  fetchAllCustomers() {
    return 'hi from customers in service';
  }
}
