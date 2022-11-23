import Joi from 'joi'

class PatientViewModel {
  static get name() {
    return 'patient'
  }

  static get genderLabels() {
    return [
      { value: 'female', label: 'Féminin' },
      { value: 'male', label: 'Masculin' },
      { value: 'transsexual', label: 'Transsexuel' },
      { value: 'queer', label: 'Queer' },
      { value: 'nonbinary', label: 'Non-binaire' },
      { value: 'other', label: 'Autre' },
    ]
  }

  static get phoneLabels() {
    return [
      { value: 'home', label: 'Domicile' },
      { value: 'mobile', label: 'Mobile' },
      { value: 'work', label: 'Professionnel' },
    ]
  }

  static get specialistTypes() {
    return [
      { value: 'physician', label: 'Médecin' },
      { value: 'psychologist', label: 'Psychologue' },
      { value: 'psychiatrist', label: 'Psychiatre' },
      { value: 'other', label: 'Autre' },
    ]
  }
  
  constructor(firstName, lastName, birthday, gender) {
    this.firstName = firstName
    this.lastName = lastName
    this.birthday = birthday
    this.gender = gender
    // phones array must have at least one element for the new patient form
    this.phones = []
    this.specialists = []
  }

  static get schema() {
    return {
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      birthday: Joi.date().required(),
      gender: Joi.string().valid(...this.genderLabels),
      street: Joi.string().required(),
      postalCode: Joi.string().required(),
      city: Joi.string().required(),
      phones: Joi.object({
        label: Joi.string().valid(...this.phoneLabels),
        number: Joi.string().required()
      }),
      email: Joi.string().email({ tlds: false }),
      specialists: Joi.object({
        type: Joi.string().valid(...this.specialistTypes),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        phones: Joi.object({
          label: Joi.string().valid(...this.phoneLabels),
          number: Joi.string().required()
        }),
        email: Joi.string().email({ tlds: false }),
      }),
    }
  }
}

export default PatientViewModel
