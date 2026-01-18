import { Controller , Get} from '@nestjs/common';


@Controller('hello')
export class HelloController {

    @Get()
    // This maps to a GET request at /hello
  getHello(): string {
    return '<h1>this my controller<h1>';
  }
}
