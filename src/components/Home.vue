<template>
<h1>Welcome Home</h1>
</template>

<script>
export default{
    name: "Home",
    mounted()
{
    let user = localStorage.getItem('user-info');

    if(!user)
    {
        this.$router.push({name: 'signup'})
    }
}
}


</script>