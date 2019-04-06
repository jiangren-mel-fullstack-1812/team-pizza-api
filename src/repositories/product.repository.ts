import {DefaultCrudRepository} from '@loopback/repository';
import {Product} from '../models';
import {MongoDSDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id
> {
  constructor(
    @inject('datasources.MongoDS') dataSource: MongoDSDataSource,
  ) {
    super(Product, dataSource);
  }
}
