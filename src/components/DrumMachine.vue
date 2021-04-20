<template>
  <div>
    <audio id="beep" preload="auto">
      <source src="../assets/sounds/beep.ogg" type="audio/ogg">
    </audio>
    <audio id="accent" preload="auto">
      <source src="../assets/sounds/accent.ogg" type="audio/ogg">
    </audio>
      <b-card-body>
        <b-card-title>Methronome</b-card-title>
        <b-card-sub-title class="mb-2">Set number of notes, accents and tempo...</b-card-sub-title>
        <b-card-text>
          <div class="slidecontainer">
            <input v-model=notes type="range" min="1" max="16" class="slider" @change="setButtons(beepSound)">
            <p>Notes: {{notes}}</p>
          </div>

          <div class="slidecontainer">
            <input v-model=tempo type="range" min="60" max="270" class="slider">
            <p>Tempo: {{tempo}} bpm</p>
          </div>

          <b-card-text>
          <b-button-group block class="">
            <b-button
              v-for="(btn, idx) in buttons"
              :key="idx"
              :pressed.sync="btn.state"
              variant="primary"
            >{{ btn.caption }}
          </b-button></b-button-group>
        </b-card-text>



        <b-button-group>
          <b-button pill :pressed.sync="togglePlay" variant="dark" class="p-3" @click="handleClick(togglePlay)"><div v-if="togglePlay == true">
          <span class="mdi mdi-pause"></span> Pause
          </div>
          <div v-else>
          <span class="mdi mdi-play"></span>Play
        </div></b-button></b-button-group>
      </b-card-text>
    </b-card-body>
    
  </div>
</template>
<script>

export default {
  name: 'DrumMachine',
  data () {
    return {
      notes: 4,
      tempo: 90,
      togglePlay: false,
      play: false,
      buttonNumber: 0,
      buttons: []
    }
  },
  mounted() {
    const accent = document.getElementById("accent")
    // const beep = document.getElementById("beep")
    this.setButtons(accent)
  },
  computed: {
    beepSound() {
      return document.getElementById("beep")
    },
    getTempo() {
      return (60/this.tempo)*1000
    },
  },
  methods: {
    setButtons(sound) {
      let buttons = []
      let i
      let button = Object
      
      for(i=1;i<=this.notes;i++){
        button = { caption: i, state: false, sound: sound}
        buttons.push(button)
        // console.log(button)
      }

      this.buttons = buttons
    },
    handleClick: function(togglePlay) {
      if(togglePlay===false){
        this.buttonNumber = 0
        clearInterval(this.play)
      } else {
        this.play = setInterval(this.playNotes,this.getTempo)
      }
    }, 
    playNotes() {
      let buttonNumber = this.buttonNumber
      let button = this.buttons[buttonNumber]
      let beatLength = this.buttons.length - 1

      if(buttonNumber<beatLength){
        this.buttonNumber++
      } else {
      this.buttonNumber = 0
      }
      
      if(button.state){
        button.sound.play()
        // console.log("this is button "+ buttonNumber)
      } else document.getElementById("beep").play()
    },
  }  
}
</script>

<style scoped>
.slidecontainer {
  width: 100%; /* Width of the outside container */
}

/* The slider itself */
.slider {
  -webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 10px; /* Specified height */
  background: #d3d3d3; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: .2s; /* 0.2 seconds transition on hover */
  transition: opacity .2s;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 15px; /* Set a specific slider handle width */
  height: 15px; /* Slider handle height */
  background: #4c74af; /* Green background */
  cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
  width: 15px; /* Set a specific slider handle width */
  height: 15px; /* Slider handle height */
  background: #4c74af; /* Green background */
  cursor: pointer; /* Cursor on hover */
}

</style>
