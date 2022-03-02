<template>
  <!-- 모달창이열렸니 data가 true면 보여주고 false면 숨김 -->
  <div class="black-bg" v-if="모달창열렸니 == true ">
    <div class="white-bg">
      <h4>{{원룸들[누른거].title}}</h4>
      <div><img :src="원룸들[누른거].image" class="room-img"></div>
      <p>{{원룸들[누른거].content}}</p>
      <div>{{원룸들[누른거].price}}</div>
      <!-- <button @click="모달창열렸니 = false">닫기</button> -->
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Modal',
    props: {
      title: String,
      원룸들 : Array,
      누른거 : Number,
      모달창열렸니: Boolean,
    }
  }
</script>