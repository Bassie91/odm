<template>
  <div>
      <b-card-body>
        <b-card-title>Simple methronome</b-card-title>
        <b-card-sub-title class="mb-2">demo</b-card-sub-title>
        <b-card-text>
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

        <div class="slidecontainer">
          <input v-model=tempo type="range" min="60" max="210" class="slider">
          <p>{{tempo}}</p>
        </div>
        <!-- <input v-model=tempo placeholder=tempo> -->

        <b-button-group>
          <b-button pill :pressed.sync="togglePlay" variant="dark" @click="handleClick(togglePlay)"><div v-if="togglePlay == true">
          <svg class="bi bi-pause-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 3.5A1.5 1.5 0 017 5v6a1.5 1.5 0 01-3 0V5a1.5 1.5 0 011.5-1.5zm5 0A1.5 1.5 0 0112 5v6a1.5 1.5 0 01-3 0V5a1.5 1.5 0 011.5-1.5z"/>
          </svg>
          </div>
          <div v-else>
          <svg class="bi bi-play-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"/>
          </svg>
        </div></b-button></b-button-group>
      </b-card-text>
    </b-card-body>
    <audio id="beep">
      <source src="../../public/sounds/beep.ogg" type="audio/ogg">
    </audio>
  </div>
</template>
<script>

export default {
  name: 'DrumMachine',
  data () {
    return {
      min: 60,
      max: 240,
      tempo: 90,
      togglePlay: false,
      play: false,
      buttonNumber: 0,
      buttons: [
        { caption: '1', state: true },
        { caption: '2', state: false },
        { caption: '3', state: true },
        { caption: '4', state: false }
      ]
    }
  },
  computed: {
    beepSound() {
      return document.getElementById("beep")
    },
    getTempo() {
      return (60/this.tempo)*1000
    }
  },
  methods: {
    handleClick: function(togglePlay) {
      if(togglePlay===false){
        clearInterval(this.play)
      } else {
        this.play = setInterval(this.oneSecondFunction,this.getTempo)
      }
    }, 
    oneSecondFunction: function() {
      let buttonNumber = this.buttonNumber
      let button = this.buttons[buttonNumber]
      let beatLength = this.buttons.length - 1

      if(buttonNumber<beatLength){
        this.buttonNumber++
      } else {
      this.buttonNumber = 0
      }
      
      if(button.state){
        this.playSound()
        console.log("this is button "+ buttonNumber)
      }
    },
    playSound: function(){
      // let audio = new Audio('/public/sounds/beep.ogg')
      this.beepSound.play()
    }
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
  height: 25px; /* Specified height */
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
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #4c74af; /* Green background */
  cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #4c74af; /* Green background */
  cursor: pointer; /* Cursor on hover */
}

</style>
