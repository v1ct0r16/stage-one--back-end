// hello.service.ts
import { Injectable } from '@nestjs/common';
import { HelloDto } from 'src/dto/hello.dto';



@Injectable()
export class HelloService {
  constructor() {}

  postHello(helloDto: HelloDto): any {
    const clientIp = helloDto.ip || '127.0.0.1'; // Default to a dummy IP
    const temperature = helloDto.temperature || 11; // Default temperature
    const location = helloDto.location || 'New York'; // Default location

    return {
      client_ip: clientIp,
      location: location,
      greeting: `Hello!, the temperature is set to ${temperature} degrees Celcius in ${location}`,
    };
  }

  async getHello(helloDto): Promise<any> {
    const clientIp = helloDto.ip || '127.0.0.1'; // Default to a dummy IP

    // Use a placeholder or estimated temperature (avoid user input for temperature in GET requests)
    const temperature = 11; // Replace with logic for default/estimated temperature (optional)

    return {
      client_ip: clientIp,
      location: 'Unknown', // Omit location retrieval for privacy reasons
      greeting: `Hello!, the temperature is set to ${temperature} degrees Celcius in Unknown`,
    };
  }
}
