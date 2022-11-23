import { get } from 'svelte/store'
import { OpenAppsStore } from '../stores'

export default {
  registerListeners: function(appInstance) {
    appInstance.windowComponent.$on('close', e => {
      appInstance.$destroy()
      OpenAppsStore.update(apps => apps.filter(app => app.instance !== appInstance))
    })

    appInstance.windowComponent.$on('bringToForeground', e => {
      let apps = get(OpenAppsStore)
      apps.forEach(app => {
        app.instance.windowComponent.isForeground = false
      })
      // The below statement must be last otherwise the selected window won't be brought
      // to the foreground.
      appInstance.windowComponent.isForeground = true
    })
  }
}