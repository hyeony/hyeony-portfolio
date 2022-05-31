<template>
  <div>
    <section class="intro">
      <div class="intro-wrap">
        <div class="container">
          <div class="title">
            Web UI Development,<br>
            Publisher.
          </div>
          <p>안녕하세요 웹퍼블리셔 김지현입니다.<br> UI개발 외 UI,UX, 디자인에도 관심이 많습니다.<br> 현재 포트폴리오 리뉴얼작업중입니다 :)</p>
        </div>
      </div>
    </section>
    <div class="projects">
      <section class="middle">
        <h1 class="middle-title">Project List</h1>
        <p class="middle-copy">
          It's a list of all <br>the projects I've been working on
        </p>
      </section>
      <section class="bottom">
        <div class="container">
          <!-- list -->
          <div class="list">
            <div class="row">
              <div class="item">
                <a href="#!">
                  <div class="item-img one" :ref="itemImage">
                  <img :src="require('@/assets/imgs/hds.png')" alt="">
                </div>
                </a>
                <div class="name">SK하이닉스 디자인시스템 고도화프로젝트</div>
                <p class="copy">프레임 워크 환경에서 스타일 작업 업무를 맡아 진행했습니다.</p>
              </div>
              <div class="item">
                <a target="_blank" href="https://sandbox.fintech.or.kr/">
                  <div class="item-img two" :ref="itemImage">
                    <img :src="require('@/assets/imgs/sandbox.png')" alt="">
                  </div>
                </a>
                <div class="name">금융규제 샌드박스</div>
                <p class="copy">모든 ui개발을 담당하여 진행했습니다.</p>
              </div>
              <div class="item">
                <a target="_blank" href="https://uxstudio.sktelecom.com/">
                  <div class="item-img three" :ref="itemImage">
                  <img :src="require('@/assets/imgs/studio.png')" alt="">
                </div>
                </a>
                <div class="name">UX Studio</div>
                <p class="copy">부트스트랩을 이용하여 컴포넌트를 제작하는 업무를 진행했습니다.</p>
              </div>
              <div class="item">
                <a target="_blank" href="https://uxstudio.sktelecom.com/">
                  <div class="item-img four" :ref="itemImage">
                  <img :src="require('@/assets/imgs/studio.png')" alt="">
                </div>
                </a>
                <div class="name">~ studying</div>
                <p class="copy">notion에 스터디내용을 정리하며 성장을 위해 노력하고있습니다</p>
              </div>
            </div>
          </div>
          <!-- /list -->
        </div>
      </section>
    </div>
    <section class="resume">
      <div class="container">
        <a href="" class="btn-resume-down">Download resume </a>
      </div>
    </section>
    <footer>
      <div></div>
    </footer>
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
       itemRefs : [],
      }
    },

    methods: {
      heightChange(){
      //    const ItemWidth = this.$refs.itemImage.clientWidth
      //  this.$refs.itemImage.clientHeight = ItemWidth * 1.4
      },

      itemImage(el){
        this.itemRefs.push(el)
      },

      //Timline animation
      scrollAnimation(){
        gsap.timeline({
          scrollTrigger: {
            trigger: ".intro",
            start: "top top",
            scrub: true,
            // markers: true,
          }
        })
        .to(".intro-wrap",{ y:"100%", ease: "none", backgroundColor: '#fff'})


        gsap.timeline({
          scrollTrigger: {
            trigger: ".middle",
            start: "80% center",
            endTrigger: ".bottom",
            end: "+=700px",
            // markers: true,
            scrub: true,
            pin: true,
            pinSpacing: false
          }
        })
        .to(".middle-title",{ opacity: "0" })
        .to(".middle-copy",{ opacity: "0" })

        gsap.timeline({
          scrollTrigger: {
            trigger: ".item-img.one",
            start: "top bottom",
            end:"bottom center",
            scrub: true,
            // markers: true,
          }
        })
        .to(".item-img.one",{ y:"0", ease: "none"})

        gsap.timeline({
          scrollTrigger: {
            trigger: ".item-img.two",
            start: "top bottom",
            end:"bottom center",
            scrub: true,
            // markers: true,
          }
        })
        .to(".item-img.two",{ y:"0", ease: "none"})

        gsap.timeline({
          scrollTrigger: {
            trigger: ".item-img.three",
            start: "top bottom",
            end:"bottom center",
            scrub: true,
            // markers: true,
          }
        })
        .to(".item-img.three",{ y:"0", ease: "none"})

        gsap.timeline({
          scrollTrigger: {
            trigger: ".item-img.four",
            start: "top bottom",
            end:"bottom center",
            scrub: true,
            // markers: true,
          }
        })
        .to(".item-img.four",{ y:"0", ease: "none"})


      },

    },
    beforeUpdate(){
      this.itemRefs = []
    },
    updated(){

    },
    mounted(){
      this.scrollAnimation();
      this. heightChange();

      const sections = document.querySelectorAll('section');
       const cards = document.querySelectorAll('.item-img');
       console.log(cards);

      sections.forEach((section, index) => {
        gsap.to(section, {autoAlpha: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top bottom-=200',
            toggleActions: 'play none none reverse',
            // markers: true
          }
        });

        ScrollTrigger.create({
          trigger: section,
          id: index+1,
          start: 'top center',
          end: () => `+=${section.clientHeight + 50}`,
          toggleActions: 'play reverse none reverse',
          toggleClass: {targets: section, className: "is-active"},
          duration: 2
          // markers: true
        })

      })

      //set refs array 
      // this.itemRefs.forEach(this.addTimeline);
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