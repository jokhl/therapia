<script>
  export let name, size = 'small'

  import UsersPicto from '../assets/pictos/users.png'
  import SchedulePicto from '../assets/pictos/schedule.png'
  import AccountingPicto from '../assets/pictos/accounting.png'

  const Pictos = {
    'users': UsersPicto,
    'schedule': SchedulePicto,
    'accounting': AccountingPicto,
  }

  const Sizes = {
    'small': 'w-6',
    'medium': 'w-8',
    'big': 'w-12'
  }
</script>

<img src="{Pictos[name]}" alt="{name}" class="{Sizes[size]}">