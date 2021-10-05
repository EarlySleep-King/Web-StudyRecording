<template>
<div>
    <div class="content">
        <span> 明星经理:2人 </span>
        <div class="moreButton">查看更多</div>
    </div>
    <div class="list"></div>
</div>
</template>
<script>
export default {
data(){
return{

}
}
}
</script>
<style scoped>
.content{
    margin: 20px 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
    span{
        font-size: 12px;
        color: #666;
    }
    .moreButton{
        height: 30px;
        width: 60px;
        border: 1px solid dodgerblue;
        border-radius: 5px;
        font-size: 12px;
        color: dodgerblue;
        text-align: center;
        line-height: 30px;

    }
</style>