<script>
  // Components
  import TextInput from "../../../../ui/components/TextInput.svelte"
  import SelectInput from "../../../../ui/components/SelectInput.svelte"

  export let patient

  function addSpecialistField() {
    patient.specialists = patient.specialists.concat({
      name: "",
      type: "",
      email: "",
      phone: "",
    })
  }
</script>

<div class="w-full mt-8">
  <div class="flex items-center w-full">
    <h2 class="w-full py-3 text-gray-500 font-medium">Personnes de contact</h2>
    <div class="ml-4 pt-1">
      <button class="flex items-center justify-center py-2 pl-2 pr-3 text-sm text-gray-700 font-medium btn" on:click={addSpecialistField}>
        <i class="bx bx-plus mr-2"></i> Ajouter
      </button>
    </div>
  </div>

  {#if patient.specialists.length > 0}
    <table class="w-full mt-4 table-default">
      <thead>
        <tr>
          <th></th>
          <th class="w-4/12">Nom</th>
          <th class="w-2/12">Type</th>
          <th class="w-3/12">E-mail</th>
          <th class="w-3/12">Téléphone</th>
        </tr>
      </thead>
      {#each patient.specialists as specialist, i}
        <tr>
          <td class="border-r border-gray-200 text-center text-gray-500">{i + 1}</td>
          <td>{specialist.name}</td>
          <td>{specialist.type}</td>
          <td>{specialist.email}</td>
          <td>{specialist.phone}</td>
        </tr>
      {/each}
    </table>
  {:else}
    <p class="mt-2 text-gray-400 text-sm">Il n'y a pas encore de personne de contact.</p>
  {/if}
</div>
