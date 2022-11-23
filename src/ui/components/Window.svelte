<script>
  import { onMount, createEventDispatcher } from "svelte"

  export let css, centered, title, minWidth, minHeight
  export let maximized = false
  export let bgOpacity = "opacity-100"
  export let titleBar = true

  let windowElement
  let topOffset = 0
  let leftOffset = 0
  let dragged = false
  let resizing = false
  let dockHeight = document.querySelector("#dock").offsetHeight
  let visibility = titleBar ? "" : "opacity-0 hover:opacity-100"

  const Dispatch = createEventDispatcher()

  function maximize() {
    if (maximized) {
      maximized = false
      windowElement.style.removeProperty("width")
      windowElement.style.removeProperty("height")

      if (centered) centerWindow(windowElement)
    } else {
      maximized = true
      topOffset = 0
      leftOffset = 0
      windowElement.style.width = `${window.innerWidth}px`
      windowElement.style.height = `${window.innerHeight}px`
    }
  }

  function close() {
    Dispatch("close")
  }

  function bringToForeground(e) {
    Dispatch("bringToForeground")
    /** It is important to prevent the event from bubbling up
    /* to the Shell component where there is a click listener
    /* on the #desktop element that sends all the open apps
    /* to the foreground. **/
    e.stopPropagation()
  }

  function drag() {
    dragged = true
  }

  function resize() {
    resizing = true
  }

  function drop() {
    dragged = false
    resizing = false
  }

  function move(e) {
    if (dragged) {
      let newYPos = topOffset + e.movementY
      let newXPos = leftOffset + e.movementX

      // don"t allow dragging under the dock minus an arbitrary margin of 20px
      if (newYPos < window.innerHeight - dockHeight - 20) {
        topOffset = newYPos
      }

      // don"t allow dragging out of the visible area (arbitrary margin of 20px)
      if (newXPos < window.innerWidth - 20) {
        leftOffset = newXPos
      }
    }

    if (resizing) {
      let newYPos = topOffset + e.movementY
      let newXPos = leftOffset + e.movementX
      let newHeight = windowElement.offsetHeight + e.movementY
      let newWidth = windowElement.offsetWidth + e.movementX


      // don"t allow resizing under the dock minus an arbitrary margin of 20px
      if (newYPos < window.innerHeight - dockHeight - 20 && newHeight >= minHeight) {
        windowElement.style.height = `${newHeight}px`
      }

      // don"t allow resizing out of the visible area (arbitrary margin of 20px)
      if (newXPos < window.innerWidth - 20 && newWidth >= minWidth) {
        windowElement.style.width = `${newWidth}px`
      }
    }
  }

  function centerWindow(elem, horizontally = true, vertically = true) {
    if (horizontally) {
      leftOffset = ( window.innerWidth / 2 ) - ( elem.offsetWidth / 2 )
    }

    if (vertically) {
      topOffset = ( window.innerHeight / 2 ) - ( elem.offsetHeight / 2 )
    }
  }

  onMount(() => {
    if (centered) {
      centerWindow(windowElement)
    }

    minWidth = minWidth || windowElement.offsetWidth
    minHeight = minHeight || windowElement.offsetHeight
  })
</script>

<svelte:options accessors={true} />
<svelte:window on:mouseup={drop} on:mousemove={move} />

<div class="absolute flex flex-col {css} bg-gray-100 {bgOpacity} blur border rounded shadow-lg" style="top: {topOffset}px; left: {leftOffset}px;" bind:this={windowElement} on:click={bringToForeground}>
  
  <div class="flex items-center w-full h-6 bg-gradient-to-t from-gray-300 to-gray-200 border-b not-selectable z-20" on:mousedown={drag}>
    <div class="flex-grow text-center text-sm text-gray-800 font-medium cursor-move">{title ? title : ""}</div>
    <div class="absolute right-0 flex items-center">
      <button class="focus:outline-none">
        <i class="p-1 bx bx-minus text-sm hover:text-blue-600"></i>
      </button>
      <button class="focus:outline-none" on:click={maximize}>
        <i class="p-1 bx bx-rectangle text-sm hover:text-blue-600"></i>
      </button>
      <button class="focus:outline-none" on:click={close}>
        <i class="p-1 bx bx-x hover:text-red-600"></i>
      </button>
    </div>
  </div>

  <div class="flex-grow flex flex-col w-full h-0 not-selectable overflow-hidden">
    <slot></slot>
  </div>

  <div class="absolute bottom-0 right-0 w-4 h-4 cursor-move" on:mousedown={resize}></div>

</div>
