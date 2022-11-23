<script>
  import { fly } from 'svelte/transition'

  import Picto from '../../ui/components/Picto.svelte'
</script>

<div class="absolute bottom-0 left-0 w-1/4 mb-16 ml-4 p-4 bg-gray-100 opacity-90 blur rounded shadow-md" transition:fly="{{ y: 10, duration: 300 }}">
  <h1 class="pb-4 font-bold text-lg">Applications</h1>

  <ul class="w-full">
    <li>
      <a href="" class="flex items-start w-full h-full p-4 hover:bg-gray-300 rounded-lg">
        <Picto name="users" size="medium" />
        <div class="pl-4">
          <span class="block font-semibold">Patients</span>
          <span class="text-gray-600 text-sm">Consulter vos fiches patients et les gérer</span>
        </div>
      </a>
    </li>
    <li>
      <a href="" class="flex items-start w-full h-full p-4 hover:bg-gray-300 rounded-lg">
        <Picto name="schedule" size="medium" />
        <div class="pl-4">
          <span class="block font-semibold">Agenda</span>
          <span class="text-gray-600 text-sm">Organiser votre temps, gérer les rendez-vous</span>
        </div>
      </a>
    </li>
    <li>
      <a href="" class="flex items-start w-full h-full p-4 hover:bg-gray-300 rounded-lg">
        <Picto name="accounting" size="medium" />
        <div class="pl-4">
          <span class="block font-semibold">Comptabilité</span>
          <span class="text-gray-600 text-sm">Vos dépenses, vos recettes et tout ce qui a trait à l'argent</span>
        </div>
      </a>
    </li>
  </ul>
</div>