<template>
  <div class="toast">
    <van-button type="primary" @click="$toast({msg:'成功',type:'success'})">成功</van-button>
    <van-button type="danger" @click="$toast({msg:'失败',type:'fail'})">失败</van-button>
    <van-button type="default" @click="$toast({msg:'警告',type:'warning'})">警告</van-button>
    <van-button type="primary" @click="$toast({msg:'加载',type:'loading'})">加载</van-button>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  }
}
</script>

<style scoped lang='less'>
.van-button{
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
}
</style>
