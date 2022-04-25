<template>
  <div class="main" ref="scrollWrap">
    <section class="scroll-section" id="scroll-section-0" ref="scrollSection0" :style="`background-image: url(${이미지})`">
      <div class="hero">
        <div class="title">Leag of Legends</div>
        <div></div>
        <div class="sticky-elem hero-message a" ref="message1">
          <div class="year">10th ANNIVERSARY</div>
        </div>
        <!-- <div class="sticky-elem hero-message b" ref="message2">
          <div class="thanks">THANK YOU SUMMONERS</div>
        </div>-->
        <div class="sticky-elem hero-message c" ref="message3">
          <div class="greeting">리그오브레전드와 10년간 함께 해주신 소환사 여러분, 감사합니다!</div>
          <div class="greeting">THANK YOU, SUMMONERS!</div>
        </div>
      </div>
    </section>
   <section class="scroll-section" id="scroll-section-1" ref="scrollSection1">
     <p>
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda<br>
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda<br>
     </p>
   </section>
    <section class="scroll-section" id="scroll-section-2" ref="scrollSection2">
     <p>
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda<br>
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda<br>
     </p>
   </section>

    <section class="evt">
    <div>

    </div>
      <div class="evt-title">이벤트 대상자인지 확인해보세요!</div>
      <div><img class="evt-pengu" :src="require('@/assets/imgs/pengu.png')"></div>
      <div class="evt-content">
        <div class="evt-form">
          <div class="evt-input-box">
            <input class="evt-input" type="text" @change="input" placeholder="소환사 닉네임 입력" />
          </div>
          <button class="evt-btn" @click="click(), fetchData()">검색</button>
        </div>

        <div class="box">
          <div v-if="isVal">
            <p>{{playerName}}소환사님의 레벨은 {{playerLevel}}!</p>
            <p>티어는 {{playerTier}} 입니다</p>
          </div>

          <div v-if="isNan">
           <img :src="require('@/assets/imgs/sad.png')">
            {{errorText}}
          </div>
        </div>

        <!-- <div v-if="playerData" class="box">
          <p><img width="100" height="100" :src="`http://ddragon.leagueoflegends.com/cdn/12.7.1/img/profileicon/${playerData.profileIconId}.png`"></p>
        </div>

        <div v-else class="box2">

          <div class="evt-null">
            <img class="evt-pengu" :src="require('@/assets/imgs/pengu.png')">
            <div>검색해보세요</div>
          </div>
            <div>
              <img :src="require('@/assets/imgs/sad.png')">
              <p>해당 소환사는 존재하지않습니다</p>
            </div>
        </div> -->
      </div>

      <router-view></router-view>
      <router-link to="/JH">링크</router-link>
    </section>
  </div>

</template>

<script>
  import { onMounted, ref} from 'vue'
  import axios from 'axios'

  //씬을나눈다
  //씬의 높이를 세팅한다
  //활성화 시킬 씬을 결정한다
  export default {
    name: 'App',
    components: {

    },
    data() {
      return {
        isVal : false,
        isNan : false,
        errorText: "존재하지않는 데이터입니다",
        이미지: "https://universe.leagueoflegends.com/images/championsBackground.jpg",
        summonInfo: [],
        playerID: '',
        playerName: '',
        playerLevel: '',
        playerTier: '',
        unrankMessage: "언랭크",
        apiKey : "RGAPI-36ff702e-fa33-412b-80b8-7401adc67e95",
        text: '', //출력될 값
        inputText:'', //input값
        sceneInfo: [
          {
            type: 'sticky',
            heightNum: 4,
            scrollHeight: 0,
            objs: {
              // container: document.querySelector('scroll-section-0')
              container : this.$refs.scrollSection0,
              massageA : this.$refs.message1,
              massageB : this.$refs.message2,
              massageC : this.$refs.message3,
            },
            values: {
              messageA_opacity_in: [0,1, {start: 0.1, end: 0.2}],
              messageA_translateY_in: [20, 0, {start: 0.1, end: 0.2}],
              messageA_opacity_out: [1,0, {start: 0.25, end: 0.3}],
              messageA_translateY_out: [0, -20, {start: 0.25, end: 0.3}],
              messageB_opacity_in: [0,1, {start: 0.3, end: 0.4}],
              messageB_opacity_out: [0,1, {start: 0.45, end: 0.5}],
            }
          },
          {
            type: 'normal',
            heightNum: 4,
            scrollHeight: 0,
            objs: {
               container: this.$refs.scrollSection1
            }
          },
          {
            type: 'sticky',
            heightNum: 4,
            scrollHeight: 0,
            objs: {
               container: this.$refs.scrollSection2
            }
          },
        ],
        //window.pageYOffset 갱신
        yOffset : 0,
        //현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
        prevScrollHeight : 0,
        //현재 활성화된 scene
        currentScene : 0,
        totalScrollHeight: 0,
        messageA_opacity_in: '',
        messageA_opacity_out: '',
        messageA_translateY_in: '',
        messageA_translateY_out:'',
        messageB_opacity_in: '',
        messageB_opacity_out: '',
        currentYOffset: 0,
        rv: 0,
        scrollRatio: 0,
        outerScrollRatio:0,
        enterNewScene: false,
        scrollHeight: 0,
        partSCrollStart: 0,
        partScrollEnd: 0,
        partScrollHeight: 0,
        currentSceneValues: '',
        infoCurretScene: 0,
      }
    },

    methods: {
        init() {
          this.setLayout();
        },

        input(e){
          return this.inputText = e.target.value
          //input에 입력된 값 inputText로 넣어주기
        },
        click(){
          return this.text = this.inputText
          //출력됡밧인 text에 input값을 넣어준 inputText를 넣어주기
        },
        fetchData: function () {
          axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${this.text}?api_key=${this.apiKey}`)
          .then((res1) => {
            this.summonInfo.push(res1.data);
            this.playerID = (res1.data.id);
            this.playerName = (res1.data.name);
            this.playerLevel = (res1.data.summonerLevel);
            this.isVal = true;
            this.isNan = false;

              console.log(this.isVal);


              axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${this.playerID}?api_key=RGAPI-36ff702e-fa33-412b-80b8-7401adc67e95`)
                .then((res2) => {

                  if(res2.data[0] === undefined){
                    this.playerTier = this.unrankMessage;
                  }else {
                    this.playerTier = (res2.data[0].tier);
                  }

                }).catch( error => {
                   console.log(error);
                });

          }).catch( error => {
               if (error.status == undefined) {
                   this.isNan = true;
                   this.isVal = false;
               }

          });
        },
        isValdata(){
          this.isVal == true;
        },
        setLayout() {
         //재할당
          this.sceneInfo[0].objs.container = this.$refs.scrollSection0;
          this.sceneInfo[1].objs.container = this.$refs.scrollSection1;
          this.sceneInfo[2].objs.container = this.$refs.scrollSection2;

          //각 section의 높이값 설정
          for (let i = 0; i < this.sceneInfo.length; i++) {
            this.sceneInfo[i].scrollHeight = this.sceneInfo[i].heightNum * window.innerHeight;
            this.sceneInfo[i].objs.container.style.height = `${this.sceneInfo[i].scrollHeight}px`
          }
        },
        scrollLoop() {
          //yoffset값이 이전 씬의 값들합볻다 크면 다음 씬이 진행중
          //활성화 시킬 씬이 무엇이냐?
          this.yOffset = window.pageYOffset;
          this.sceneInfo[0].scrollHeight


          this.prevScrollHeight = 0;//초기화

          for (let i = 0; i < this.currentScene; i++) {
            this.prevScrollHeight =  this.prevScrollHeight+this.sceneInfo[i].scrollHeight;
          }

        console.log("현재씬" + this.currentScene);
        console.log( "prevScroll" +this.prevScrollHeight);

          if( this.yOffset > this.prevScrollHeight + this.sceneInfo[this.currentScene].scrollHeight) {
            // this.currentScene++;
          }

          if(this.yOffset <this.prevScrollHeight) {

            // this.currentScene--;
               console.log( "prevScroll" +this.prevScrollHeight);

          }

        },

        calcValues() {

        },

        playAnimation() {

        },

      },
      mounted() {
        window.addEventListener('load', this.init());
        window.addEventListener('resize', this.setLayout);
        window.addEventListener('scroll', () => {

          //스크롤이 일어날 때 yOffset 의 값을 window.pageYOffset 값으로 갱신
          this.scrollLoop();
        });

      },
  }
</script>

<style lang="scss">
  body {
    margin: 0;
  }

  .scroll-section {
    border: 1px solid red
  }
</style>