<template>
<div id="app">
       <DrumMachine />
    </div>
</template>

<script>
import DrumMachine from './components/DrumMachine';

export default {
  data() {
            return {
                component: "DrumMachine"
            }
        },
  name: 'app',

  components: {
    DrumMachine,
  }
}
</script>
