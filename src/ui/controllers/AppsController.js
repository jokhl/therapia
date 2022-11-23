import { OpenAppsStore } from '../stores'
import WindowsController from './WindowsController'

const APPS = [
  'Dashboard',
  'CRM'
]

function registerApp(params) {
  // Do not use the 'push' method because it does not return a new array
  OpenAppsStore.update(apps => apps.concat([params]))
}

export default {
  subscribe: function(cb) {
    OpenAppsStore.subscribe(cb)
  },
  launch: async function(appName) {
    if (APPS.includes(appName)) {
      let appComponent = await import(`../../apps/${appName}/${appName}.svelte`)
      let app = new appComponent.default({
        target: document.querySelector('#desktop')
      })
      WindowsController.registerListeners(app)
      registerApp({
        name: appName,
        label: app.AppName,
        instance: app
      })
    }
    else {
      console.error(`Error: Unknown app '${appName}'.`)
    }
  }
}