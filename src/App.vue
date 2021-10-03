<template>
<router-view/>
</template>


<script>

export default {
  name: 'App',
 
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo{

    width: 100px;
}

.register input, .login input{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

}
.register button, .register login{
    width: 320px;
    height: 40px;
    border: 1px solid #ccc;
    background: skyblue;
    color: #fff;
    cursor: pointer;

}

</style>
