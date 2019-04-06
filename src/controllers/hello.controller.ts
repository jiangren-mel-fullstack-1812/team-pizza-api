import { get } from '@loopback/rest';
export class HelloController {
  @get('/')
  hello(): string {
    return 'Hello world!';
  }
}
