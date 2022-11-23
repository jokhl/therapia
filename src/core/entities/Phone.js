import Model from 'objection'
import Patient from './Patient'

class Phone extends Model {
  static tableName = 'phones'

  static relationMappings = {
    owner: {
      relation: Model.BelongsToOneRelation,
      modelClass: Patient,
      join: {
        from: 'phones.ownerId',
        to: 'persons.id'
      }
    }
  }
}
