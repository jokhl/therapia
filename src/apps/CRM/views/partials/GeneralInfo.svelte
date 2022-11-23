<script>
  import PatientViewModel from '../../view_models/PatientViewModel'

  // Components
  import TextInput from '../../../../ui/components/TextInput.svelte'
  import SelectInput from '../../../../ui/components/SelectInput.svelte'

  export let patient

  function addPhoneField() {
    patient.phones = patient.phones.concat({ label: 'home', number: '' })
  }
</script>

<div class="grid grid-cols-3 gap-2 w-full mt-8">
  <TextInput attribute="firstName" model={patient} label="Prénom" />
  <TextInput attribute="lastName" model={patient} label="Nom" />
  <TextInput attribute="birthday" model={patient} label="Date de naissance" />
  <SelectInput attribute="gender" model={patient} label="Genre" options={PatientViewModel.genderLabels} />

  <TextInput attribute="street" model={patient} label="Rue" />
  <div class="flex">
    <TextInput attribute="postalCode" model={patient} label="C.P." css="w-1/4 mr-1" />
    <TextInput attribute="city" model={patient} label="Ville" css="w-3/4" />
  </div>
</div>

<div class="w-full mt-6">
  <div class="flex items-center w-1/2">
    <div class="w-1/3 text-sm text-gray-500 font-medium">E-mail</div>
    <div class="w-2/3">
      <TextInput attribute="email" model={patient} />
    </div>
  </div>
  <div class="flex w-full mt-2">
    <div class="w-1/6 py-3 text-sm text-gray-500 font-medium">Téléphone(s)</div>
    {#if patient.phones.length > 0}
      <ul class="w-3/6 -mt-2">
        {#each patient.phones as phone, i}
          <li class="flex w-full mt-2">
            <SelectInput attribute="phones[{i}]['label']" model={phone} options={PatientViewModel.phoneLabels} css="w-1/3" />
            <TextInput attribute="phones[{i}]['number']" model={phone} css="w-2/3 ml-2" />
          </li>
        {/each}
      </ul>
    {/if}
    <div class="{patient.phones.length > 0 ? 'ml-4' : ''}">
      <button class="flex items-center justify-center py-2 pl-2 pr-3 text-sm text-gray-700 font-medium btn" on:click={addPhoneField}>
        <i class="bx bx-plus mr-2"></i> Ajouter
      </button>
    </div>
  </div>
</div>
