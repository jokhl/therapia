<script>
  import { createEventDispatcher } from "svelte"

  export let tabs, current
  export let css = ""

  let dispatch = createEventDispatcher()

  function handleClick(event) {
    dispatch("switchTab", event.target.dataset.tab)
  }
</script>

<div class="{css}">
  <ul class="flex items-center tabs">
    {#each tabs as tab}
      <li class="{ current === tab.partial ? "active" : "" }" data-tab="{tab.label}" on:click={handleClick}>
        {tab.label}
      </li>
    {/each}
  </ul>
</div>