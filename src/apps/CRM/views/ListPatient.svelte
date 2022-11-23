<script>
  import { createEventDispatcher } from "svelte"
  // Views
  import NewPatientView from "./NewPatient.svelte"

  const dispatch = createEventDispatcher()
</script>

<div class="flex items-center">
  <div class="flex-grow">
    <h1 class="text-2xl font-bold">Mes patients</h1>
  </div>
  <div>
    <button class="flex items-center justify-center py-2 px-3 btn" on:click={() => dispatch("switchView", NewPatientView)}>
      <i class="bx bx-plus text-lg"></i>
    </button>
  </div>
</div>

<main class="py-4">
  <p class="text-gray-400">Aucun patient n'existe encore. Vous pouvez en ajouter un en cliquant sur le bouton en haut à droite.</p>
</main>