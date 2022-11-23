const { Model } = require('objection')

const Phone = require('./Phone')

class Patient extends Model {
  constructor(firstName, lastName, birthday, gender) {
    this.firstName = firstName
    this.lastName = lastName
    this.birthday = birthday
    this.gender = gender
    // phones array must have at least one element for the new patient form
    this.phones = [
      { label: 'home', number: '' }
    ]
    this.specialists = []
  }

  static get tableName() {
    return 'patients'
  }

  static get relationMappings() {
    return {
      phones: {
        relation: Model.HasManyRelation,
        modelClass: Phone,

        filter(builder) {
          builder.where('phonableType', 'Patient')
        },

        beforeInsert(model) {
          model.phonableType = 'Patient'
        },

        join: {
          from: 'patients.id',
          to: 'phones.phonableId'
        }
      }
    }
  }
}

export default Patient
