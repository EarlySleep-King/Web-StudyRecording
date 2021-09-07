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
    },
    beforeRouteEnter(to,from,next){
        //Enter方法可用于检查用户是否有权限进入该页面
        console.log(to,from);
        next();
    },
    beforeRouteLeave(to,from,next){
        //leave方法可在提交表单页面使用，比如检测是否填写必填项，如果没有填写则不许离开
        console.log(to,from);
        next();
    }
}
</script>
<style scoped>
    .active{
        color: teal;
    }
</style>