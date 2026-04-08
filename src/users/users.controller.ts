import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  
  @Get()
  getUser() {
    return 'You made a GET request to get all users!';
  }

  @Post()
  createUser() {
    return 'A new user has been created';
  }
}
