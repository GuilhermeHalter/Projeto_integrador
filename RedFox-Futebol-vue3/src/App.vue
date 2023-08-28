<script>
import LoginUser from './components/LoginUser.vue';

export default {
  components: {
    LoginUser
  }
};

</script>

<template>
   <div id="app">
    <LoginUser />
  </div>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    
  }
}
</style>
