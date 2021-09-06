<template>
    <div>
        <div>Hello MyPage!</div>
        <p class="active">{{ str1 }}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            str1: "Im EarlySleep-King!"
        }
    }
}
</script>
<style scoped>
    .active{
        color: teal;
    }
</style>