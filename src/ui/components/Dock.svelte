<script>
  import { onMount } from 'svelte'

  import AppsController from '../controllers/AppsController'
  import StartMenu from './StartMenu.svelte'

  let timeStr = ""
  let dateStr = ""
  let openApps = []
  let showStartMenu = false

  function startTime() {
    let today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()
    m = padTime(m)
    s = padTime(s)
    timeStr = h + ':' + m
    dateStr = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
  }

  function padTime(i) {
    if (i < 10) {
      i = "0" + i
    }
    return i
  }

  onMount(() => {
    console.log("Dock launched.")
    setInterval(startTime, 1000)
    AppsController.subscribe(newOpenApps => {
      openApps = newOpenApps
    })
  })

  function openStartMenu() {
    showStartMenu = !showStartMenu
  }
</script>

<div id="dock" class="w-full h-12 z-50">
  <div class="flex items-center w-full h-12 bg-black text-white">
    <div class="flex-grow flex items-center h-full">
      <button class="flex flex-col justify-center items-center h-full px-4 focus:outline-none focus:border-0 startbar-button" on:click={openStartMenu}>
        <i class="bx bx-grid-small text-white text-4xl"></i>
        <hr>
      </button>

      <ul class="flex items-center h-full">
        {#each openApps as app}
          <li class="h-full">
            <button class="flex flex-col justify-center items-center h-full px-4 focus:outline-none focus:border-0 startbar-button">
              <span class="block py-1">{app.label}</span>
              <hr>
            </button>
          </li>
        {/each}
      </ul>
    </div>

    <div class="px-6">
      <div class="w-full text-center font-semibold">{timeStr}</div>
      <div class="text-sm tracking-wide text-gray-500">{dateStr}</div>
    </div>
  </div>
</div>

{#if showStartMenu}
  <StartMenu />
{/if}