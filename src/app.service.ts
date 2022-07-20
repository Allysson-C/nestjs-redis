import { Injectable } from '@nestjs/common';
import { RedisCacheService } from './redis-cache/redis-cache.service';

@Injectable()
export class AppService {
  constructor(private readonly redisCacheService: RedisCacheService) {}

  setHello() {
    return this.redisCacheService.set('test:redis', {
      message: 'Hello world!',
    });
  }

  getHello() {
    return this.redisCacheService.get('test:redis');
  }
}
