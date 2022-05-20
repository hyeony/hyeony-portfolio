<template>
  <div>
    <div class="box">
      box1
    </div>
  </div>
</template>

<script>
  import { onMounted, ref} from 'vue'
  import axios from 'axios'
  import { gsap } from "gsap"
  import { ScrollTrigger, ScrollToPlugin, MotionPathPlugin } from "gsap/all"
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin)


 
  export default {
    name: 'portFolio',
    components: {

    },
    data() {

    },

    methods: {
      //Timline animation
      scrollAnimation(){
        gsap.timeline({
          scrollTrigger: {
            trigger: ".safe",
            start: "-90%",
            end: "-8% top",
            markers: true,
            scrub: true,
          }
        })
        .from(".section-head-typo",{ transform: "matrix(1.5, 0, 0, 1.5, 0, 0)" })
        .from(".section-head-sub", { transform: "matrix(1, 0, 0, 1, 0, 50)", opacity:"0"})

        gsap.timeline({

        })
      },
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
  }

  .box {
    width: 50px;
    height: 50px;
    border: 1px solid red;
  }
</style>