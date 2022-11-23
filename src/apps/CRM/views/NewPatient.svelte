<script>
  import { createEventDispatcher } from 'svelte'
  
  // Models
  import PatientViewModel from '../view_models/PatientViewModel'

  // Components
  import TabsComponent from '../../../ui/components/Tabs.svelte'

  // Partials
  import GeneralInfo from './partials/GeneralInfo.svelte'
  import MedicalInfo from './partials/MedicalInfo.svelte'

  const Tabs = [
    { label: 'Général', partial: GeneralInfo },
    { label: 'Médical', partial: MedicalInfo },
  ]

  let dispatch = createEventDispatcher()
  let currentPartial = GeneralInfo
  let patient = new PatientViewModel()

  function handleSwitchTab(event) {
    let selectedTab = Tabs.find(tab => tab.label === event.detail)
    currentPartial = selectedTab.partial
  }
</script>

<h1 class="text-2xl font-bold">Nouveau patient</h1>

<TabsComponent css="inline-block mt-4 text-sm" tabs={Tabs} current={currentPartial} on:switchTab={handleSwitchTab} />

<svelte:component this={currentPartial} patient={patient} />
