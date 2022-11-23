<script>
  import { onMount } from 'svelte'
  import AppController from '../../ui/controllers/AppsController'

  import Window from '../../ui/components/Window.svelte'
  import Picto from '../../ui/components/Picto.svelte'

  export let windowComponent
  export const AppName = "Tableau de bord"

  onMount(() => {
    console.log("Dashboard App launched.")
  })
</script>

<svelte:options accessors={true} />

<Window css="w-3/4" centered={true} bind:this={windowComponent}>
  <div class="py-12 px-16">
    <h1 class="text-2xl font-bold">Bonjour, Jesly</h1>
    <p class="pt-4">Vous avez 5 consultations aujourd'hui.</p>
  </div>
  <div class="py-12 px-16">
    <ul class="w-full grid grid-cols-3 gap-2 place-items-stretch p-4">
      <li>
        <a href="#" on:click={() => AppController.launch('CRM')} class="flex items-start w-full h-full p-4 hover:bg-gray-300 rounded-lg">
          <Picto name="users" size="big" />
          <div class="pl-4">
            <span class="block font-semibold text-lg">Patients</span>
            <span class="text-gray-600 text-sm">Consulter vos fiches patients et les gérer</span>
          </div>
        </a>
      </li>
      <li>
        <a href="" class="flex items-start w-full h-full p-4 hover:bg-gray-300 rounded-lg">
          <Picto name="schedule" size="big" />
          <div class="pl-4">
            <span class="block font-semibold text-lg">Agenda</span>
            <span class="text-gray-600 text-sm">Organiser votre temps, gérer les rendez-vous</span>
          </div>
        </a>
      </li>
      <li>
        <a href="" class="flex items-start w-full h-full p-4 hover:bg-gray-300 rounded-lg">
          <Picto name="accounting" size="big" />
          <div class="pl-4">
            <span class="block font-semibold text-lg">Comptabilité</span>
            <span class="text-gray-600 text-sm">Vos dépenses, vos recettes et tout ce qui a trait à l'argent</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</Window>
