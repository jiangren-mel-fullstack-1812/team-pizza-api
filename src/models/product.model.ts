import {Entity, model, property} from '@loopback/repository';

@model()
export class Product extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'number',
  })
  price?: number;

  @property({
    type: 'string',
  })
  imgUrl?: string;


  constructor(data?: Partial<Product>) {
    super(data);
  }
}
