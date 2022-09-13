<template>
  <div class="user-lists">
    <div v-for="(item, index) in modelData" :key="index">
        <div class="user-wrapper">
          <div class="user-avatar">
            <img v-if="item.avatar_url" :src="item.avatar_url">
            <img v-else src="../assets/images/duck.svg">
          </div>
          <h4>{{ item.login }}</h4>
          <a href="#">github</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lists',
  props: {
    modelData: Array,
  },
  data() {
    return {
    };
  },

};
</script>

<style>
  .user-lists{
    display: flex;
    flex-wrap: wrap;
  }
  .user-avatar{
    position: relative;
    width: 140px;
    height: 140px;
    background: #54A3FF;
    border-radius: 50%;
  }
  .user-avatar img {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    top: 50%; 
    right: 50%;
    transform: translate(50%,-50%);
  }
  .user-wrapper {
    text-align: center;
    padding: 20px;
  }
  .user-wrapper h4 {
    font-size: 20px;
  }
  .user-wrapper a {
    text-decoration: none;
    color: #54A3FF;
    font-size: 12px;
  }
</style>