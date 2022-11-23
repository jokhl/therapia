<script>
  import { onMount } from 'svelte'
  import AppsController from './ui/controllers/AppsController'
  import { get } from 'svelte/store'
  import { OpenAppsStore } from './ui/stores'

  import Dock from './ui/components/Dock.svelte'

  const StartupApps = [
    'CRM'
  ]

  onMount(() => {
    setBg()

    StartupApps.forEach(app => {
      AppsController.launch(app)
    })
  })

  function setBg() {
    document.querySelector('#desktop').style.background = `url('https://w.wallhaven.cc/full/28/wallhaven-28ekym.jpg')`
    document.querySelector('#desktop').style.backgroundSize = 'cover'
  }

  function allToBackground() {
    let apps = get(OpenAppsStore)
    apps.forEach(app => {
      app.instance.windowComponent.isForeground = false
    })
  }
</script>

<div class="w-full h-full grid grid-rows-1 auto-rows-max">
  <div id="desktop" class="relative place-self-stretch" on:click={allToBackground}>
  </div>

  <Dock />
</div>