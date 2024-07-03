// hello.controller.ts
import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { HelloService } from './hello.service';
import { HelloDto } from 'src/dto/hello.dto';



@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Post('visitor')
  postHello(@Body() helloDto: HelloDto): any {
    return this.helloService.postHello(helloDto);
  }

    @Get('welcome')
  getHello(@Body()hellodto: HelloDto): any {
    return this.helloService.getHello(hellodto);
  }
}
