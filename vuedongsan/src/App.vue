<template>


  <Modal :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" />



  <div class="menu">
    <a v-for="작명 in 메뉴들" :key="작명">{{ 작명 }}</a>
  </div>

 <Discount />
<Card @openModal="모달창열렸니 = true"  :원룸="원룸들[i]" v-for="(작명,i) in 원룸들" :key="작명"  />
<!-- <Card :원룸="원룸들[1]" />
<Card :원룸="원룸들[3]" />
<Card :원룸="원룸들[4]" />
<Card :원룸="원룸들[5]" />
<Card :원룸="원룸들[6]" /> -->
  <!-- <div v-for="(oneroom, a) in products" :key="a">
    <h4> {{oneroom}} </h4>
    <p> 50 만원</p>
  </div> -->


  <!-- <div v-for="(방,i) in 원룸들" :key="i">
    <img :src="원룸들[i].image" class="room-img">
    <h4  @click="모달창열렸니 = true, 누른거=i"> {{원룸들[i].title}} </h4>
    <p> {{원룸들[i].price}} 원</p>
  </div> -->

</template>

<script>
  //{{데이터바인딩}}
  //문법을 왜 쓰는지 ? {{}}
  //html에 하드코딩해놓으면 나중에 변경이 어려움, 데이터에 저장했다가 넣는게 나음
  //Vue의 실시간 자동 렌더링 쓰려면 하셈, data 를 변경하면 관련된 html 에도 실시간으로 반영됨.-> 웹앱만들 수 있음
  //자주 변할거같은 데이터들은 데이터로 보관하고 HTML에 넣기
  //애초에 바뀔일이 없으면 굳이 데이터바인딩 안해도 될 듯.
  // import apple from './oneroom.js';
  import data from './oneroom.js';
  import Discount from './Discount.vue';
  import Modal from './Modal.vue';
  import Card from './Card.vue';


  export default {
    name: 'App',
    data() {
      //데이터는 object 자료로 저장
      return {
        누른거: 0,
        원룸들: data,
        모달창열렸니: false,
        //자료이름, 자료 내용
        // price1: 60,
        // price2: 70,
        logo: '원룸샵',
        스타일: 'color : blue',
        products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
        메뉴들: ['Home', 'Shop', 'About'],
        신고수: [0, 0, 0],
        매물들: ["매울1", "매물2", "매물3"]
      }
    },
    methods: {
      increase() {
      }
    },
    components: {
      Discount : Discount,
      Modal : Modal,
      Card : Card,
    }

  }

  //충격/// html속성도 데이터 바인딩 가능
  // :속성="데이터이름"
</script>

<style>
  div {
    text-align: left;
    max-width: 80%;
    padding: 20px;
  }

  #app {
    max-width: 100%;
  }

  .menu {
    background: salmon;
    padding: 15px;
    border-radius: 5px;
  }

  .menu a {
    color: white;
    padding: 10px;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .room-img {
    width: 100%;
    margin: 20px;
  }

  div {
    box-sizing: border-box;
  }

  .black-bg {
    width: 100%;
    max-width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    padding: 20px;
  }

  .white-bg {
    width: 100%;
    background: white;
    border-radius: 8px;
    padding: 20px;
  }

  .discount {
    background: #eee;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
  }
</style>