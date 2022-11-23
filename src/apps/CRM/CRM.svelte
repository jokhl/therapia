<script>
  import { onMount } from "svelte"

  import Window from "../../ui/components/Window.svelte"

  export let windowComponent
  export const AppName = "Patients"

  // Views
  import ListPatientView from "./views/ListPatient.svelte"

  let currentView = ListPatientView
  let viewElement

  function switchView(event) {
    viewElement.classList.toggle("animate-slide-out")

    setTimeout(() => {
      currentView = event.detail
      viewElement.classList.toggle("animate-slide-out")
      viewElement.classList.toggle("animate-slide-in")
      setTimeout(() => viewElement.classList.toggle("animate-slide-in"), 1000)
    }, 500)
  }


  onMount(() => {
    console.log("CRM App launched.")
    viewElement.classList.toggle("animate-slide-in")
    setTimeout(() => viewElement.classList.toggle("animate-slide-in"), 1000)
  })
</script>

<svelte:options accessors={true} />

<Window css="w-3/4 min-h-60p" centered={true} title={AppName} titleBar={false} bind:this={windowComponent}>
  <div class="flex-grow flex w-full">
    <aside class="w-3/12 bg-gray-200">
      <ul class="w-full py-6 px-4">
        <li class="w-full">
          <button class="w-full py-2 px-3 text-white bg-blue-600 rounded-md text-left text-sm font-medium">
            Tous mes patients
          </button>
        </li>
      </ul>
    </aside>

    <div class="w-9/12 p-6">
      <div bind:this={viewElement}>
        <svelte:component this={currentView} on:switchView={switchView} />
      </div>
    </div>

  </div>
</Window>
