<script>
  import { onMount } from "svelte"

  export let model, attribute, options, label
  export let css = ""

  let fieldName = `${model.name}[${attribute}]`
  let listElem
  let selectedLabel
  let isOpen = false
  let openCSS = "hidden"

  function close() {
    isOpen = false
    openCSS = "hidden"
  }

  function closeWithKeyboard(event) {
    if (event.keyCode === 27) close()
  }

  function toggle() {
    if (isOpen) {
      close()
    } else {
      isOpen = true
      openCSS = "border-blue-500 shadow z-20"
    }

    selectedLabel = getLabel(model[attribute])
  }

  function handleSelect(event) {
    model[attribute] = event.target.dataset.value
    toggle()
  }

  function getLabel(value) {
    let foundOption = options.find(option => option.value === value)

    if (foundOption) return foundOption.label
    else return undefined
  }

  onMount(() => {
    model[attribute] = options[0].value
    selectedLabel = options[0].label
  })
</script>

<svelte:window on:keydown={closeWithKeyboard} on:click={close}/>

<div class="absolute top-0 left-0 w-screen h-screen opacity-0 {isOpen ? "" : "hidden"}" on:click={close}></div>

<div class="flex flex-col {css}">
  {#if label}
    <label for="{fieldName}" class="mb-1 ml-1 text-sm {isOpen ? 'text-blue-500' : 'text-gray-500'} font-medium">{label}</label>
  {/if}

  <div class="relative w-full">
    <div class="flex items-center justify-between py-2 px-3 bg-gray-50 border rounded font-medium text-gray-900 cursor-pointer truncate" on:click={toggle}>
      {selectedLabel}
      {#if !isOpen}
        <i class="bx bx-chevron-down"></i>
      {/if}
    </div>
    
    <ul class="absolute top-0 w-full bg-gray-50 border rounded {openCSS}" bind:this={listElem}>
      {#each options as option}
        <li class="py-2 px-3 hover:bg-blue-50 first:rounded-t last:rounded-b text-gray-800 hover:text-blue-500 cursor-pointer truncate" data-value="{option.value}" on:click={handleSelect}>
          {option.label}
        </li>
      {/each}
    </ul>
  </div>

</div>
