<script>
import Joi from 'joi';

  import PatientViewModel from '../../apps/CRM/view_models/PatientViewModel'

  export let model, attribute, label, css

  let fieldName = `${model.name}[${attribute}]`
  let isSelected = false
  let isValid = true
  let errorMessage = ''

  function handleTextInput(event) {
    model[attribute] = event.target.value
  }

  function handleOnFocus(event) {
    isSelected = true
  }

  function handleOnBlur(event) {
    isSelected = false

    try {
      Joi.assert(model[attribute], PatientViewModel.schema[attribute], {
        errors: {
          label: false
        },
        messages: {
          'any.required': 'Cette donnée est nécessaire.',
          'string.empty': 'Cette donnée est nécessaire.',
          'string.email': 'Cela ne ressemble pas à une adresse e-mail.',
        }
      })
      isValid = true
    } catch(error) {
      errorMessage = error.message
      isValid = false
    }
  }
</script>

<div class="flex flex-col {css} text-field {isValid ? '' : 'error'}">
  {#if label}
    <label for="{fieldName}" class="mb-1 ml-1 text-sm {isSelected ? 'text-blue-500' : 'text-gray-500'} font-medium">
      {label}
    </label>
  {/if}
  <input type="text" name="{fieldName}" class="py-2 px-3 bg-gray-50 border rounded outline-none focus:border-blue-500 focus:bg-blue-50 font-medium text-gray-900" on:input={handleTextInput} on:focus={handleOnFocus} on:blur={handleOnBlur}>
  {#if !isValid}
    <span class="block mt-1 text-xs text-red-500">{errorMessage}</span>
  {/if}
</div>
