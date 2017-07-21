<template>
  <div class="hello" @click="getJson()">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
  },
  methods: {
    getJson () {
      // 向具有指定ID的用户发出请求
      this.axios.get('employe?password=ai123456&repassword=ai123456&name=hai1long&email=hail1ong@qq.com&phone=18501793419&sex=1&role_id=2')
        .then(function (response) {
          console.log('-------', response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getJson2 () {
      // 向具有指定ID的用户发出请求
      this.axios.get('/api/v2/book/1220562')
        .then(function (response) {
          console.log('-------', response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
