<template>
  <div>
    <img :src="원룸.image" class="room-img">
    <h4 @click="$emit('openModal')" >{{원룸.title}}</h4>
    <!-- <h4  @click="모달창열렸니 = true, 누른거=i"> {{원룸들[i].title}} </h4> -->
    <p> {{원룸.price}} 원</p>
  </div>
</template>
<script>
  export default {
    props: {
      원룸 : Object
    }
  }
</script>