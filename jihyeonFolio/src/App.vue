<template>
    <div class="bin"></div>
    <div class="bin"></div>
    <div class="bin"></div>
  <div>
    <section class="middle">
      <h1 class="middle-title">IPPP SSSS</h1>
      <p class="">
        the mall's special offers. <br> the mall's special offers.
      </p>
    </section>
    <section class="bottom">
      <div class="container">
        <div class="list">
          <div class="row">
            <div class="item">
              <a href="">
                <div class="item-img one" ref="itemImage">
                <img :src="require('@/assets/imgs/item_00.jpeg')" alt="">
              </div>
              </a>
              <div>item 00</div>
            </div>
            <div class="item">
              <a href="">
                <div class="item-img two">
                  <img :src="require('@/assets/imgs/item_01.jpeg')" alt="">
                </div>
              </a>
              <div>item 01</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="bin"></div>
    <div class="bin"></div>
    <div class="bin"></div>
                <div class="bin"></div>
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
      return {
       listItem : [],
      }
    },

    methods: {
      heightChange(){

   
      //    const ItemWidth = this.$refs.itemImage.clientWidth
         
      //  this.$refs.itemImage.clientHeight = ItemWidth * 1.4



      },

      //Timline animation
      scrollAnimation(){
        gsap.timeline({
          scrollTrigger: {
            trigger: ".middle",
            start: "80% center",
            end: "+=500px",
            // markers: true,
            scrub: true,
            pin: true,
          }
        })
        .to(".middle-title",{ opacity: "0" })


        gsap.timeline({
          scrollTrigger: {
            trigger: ".item-img.one",
            start: "top bottom",
  
            scrub: true,
            markers: true,
          }
        })
        .from( ".item-img.one",{ height:"750px"})
        .to( ".item-img.one",{ y:"0"})
        // .from(".item-img.two",{x:0, y: "-750px"})

  
      },
    },
    mounted(){
      this.scrollAnimation();
      this. heightChange();
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  .bin {
    height: 50vh;
  }
</style>