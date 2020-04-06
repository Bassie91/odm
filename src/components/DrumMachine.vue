<template>


  <v-container>
      <audio id="beep">
  <source src="../../public/sounds/beep.ogg" type="audio/ogg">
</audio>
  <v-card flex

          raised
          flat
          max-width = "50vw"
          class = "text-center mx-auto p-5">


        <h1>Drum Machine Online</h1>

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
      </b-button>
        </b-button-group>
      </b-card-text>
        <b-button-group>
        <b-button pill :pressed.sync="myToggle" variant="dark" @click="handleClick(myToggle)"><div v-if="myToggle == true">
 <svg class="bi bi-play-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"/>
</svg>
</div>
<div v-else>
<svg class="bi bi-pause-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.5 3.5A1.5 1.5 0 017 5v6a1.5 1.5 0 01-3 0V5a1.5 1.5 0 011.5-1.5zm5 0A1.5 1.5 0 0112 5v6a1.5 1.5 0 01-3 0V5a1.5 1.5 0 011.5-1.5z"/>
</svg>
</div></b-button>
</b-button-group>
      </b-card-text>
    </b-card-body>
      <b-card-footer>developed by <strong>Bassie</strong> | 2020</b-card-footer>
    </v-card></v-container>
  </template>

<script>

export default {

  name: 'DrumMachine',
  data () {

            return {
                    myToggle: false,
                    t: false,
                    i: 0,
                    sound: document.getElementById("beep"),
                buttons: [
                  { caption: '1', state: true },
                  { caption: '2', state: false },
                  { caption: '3', state: true },
                  { caption: '4', state: false }
                ]
            }
        },
    computed: {
      btnStates() {
        return this.buttons.map(btn => btn.state)
      },

      beepSound() {
        return document.getElementById("beep");
      }
     
    },
    methods: {

    handleClick: function(myToggle) {
      
    if(myToggle===false){
       console.log("false");
        clearInterval(this.t);
      } else {
        
        this.t = setInterval(this.oneSecondFunction,1000);
      }
        
      
      }, 
    oneSecondFunction: function() {

          var i = this.i;
          let button1 = this.buttons[i];
          if(i==0){
           if(button1.state){
          this.playSound();
        }
          this.i++;
        } else if(i==1){
           if(button1.state){
            this.playSound();
          }
          this.i++;
        } else if(i==2){
           if(button1.state){
            this.playSound();
          }
            this.i++;
        }else if(i==3){
           if(button1.state){
            this.playSound();
          } this.i++;
        } else this.i=0;
        
          
    },
    playSound: function(){
               // var audio = new Audio('././public/sounds/beep.mp3');
               
this.beepSound.play();
    }




  }



    
  }

</script>


<style scoped>


</style>
