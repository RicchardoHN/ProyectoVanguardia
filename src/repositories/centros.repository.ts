import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Centros, CentrosRelations} from '../models';

export class CentrosRepository extends DefaultCrudRepository<
  Centros,
  typeof Centros.prototype.id,
  CentrosRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Centros, dataSource);
  }
}
