<template>
  <div class="container-bottom">
    <div class="main-bottom">
      <div class="row-1">
        <span>版权为彩姿（中国）日用品有限公司所有未经许可不得转载或链接，2019年粤ICP备05013154 | 服务条款 | 彩姿全球网</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #08305c;
  .main-bottom {
    display: flex;
    flex-direction: column;
    width: 1100px;
    .row-1 {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      background-color: #08305c;
      span {
        color: #fff;
      }
    }
  }
}
</style>

<script>
/* eslint-disable */
export default {
  name: "Bottom"
};
</script>


