<template>
  <div class="container-info">
    <div class="main-info">
      <div class="row-1">
        <div class="col-1">
          <span class="title">关于彩姿</span>
          <span class="text">企业文化</span>
          <span class="text">企业证照</span>
          <span class="text">工作机会</span>
          <span class="text">各地店铺</span>
          <span class="text">联系我们</span>
        </div>
        <div class="col-1">
          <span class="title">品牌和产品</span>
          <span class="text">彩妆系列</span>
          <span class="text">美容化妆品</span>
          <span class="text">家庭护理系列</span>
          <span class="text">个人护理系列</span>
          <span class="text">抗衰老系列</span>
          <span class="text">清润舒爽系列</span>
        </div>
        <div class="col-1">
          <span class="title">友情链接</span>
          <span class="text">彩姿官网</span>
          <span class="text">彩姿公益基金会</span>
          <span class="text">彩姿培训中心</span>
          <span class="text">直销信息</span>
          <span class="text">国家工商总局直销行业管理</span>
        </div>
        <div class="col-1">
          <span class="title">帮助中心</span>
          <span class="text">购物指南</span>
          <span class="text">常见问题</span>
          <span class="text">售后服务</span>
        </div>
        <div class="col-1">
          <span class="text">掌上彩姿</span>
          <div class="col-1-row2">
            <el-image class="logo" :src="item" :fit="fit" v-for="item in logo" :key="item"/>
          </div>
          <span class="text">彩姿云购</span>
          <el-image style="width: 120px; height: 120px" :src="QRCode" :fit="fit"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  background-color: #fff;
  .main-info {
    display: flex;
    flex-direction: column;
    width: 1100px;
    .row-1 {
      display: flex;
      height: 300px;
      margin-top: 20px;
      background-color: #fff;
      .col-1 {
        flex: 1;
        display: flex;
        flex-direction: column;
        .title {
          margin-bottom: 20px;
          font-size: 16px;
          color: rgb(15, 46, 104);
        }
        .text {
          margin-bottom: 10px;
        }
        .col-1-row2 {
          margin-top: 10px;
          margin-bottom: 30px;
          .logo {
            margin-right: 15px;
            width: 40px;
            height: 40px;
          }
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "Info",
  data() {
    return {
      logo: {
        logo1: require("@/assets/mobile/logo1.png"),
        logo2: require("@/assets/mobile/logo2.png"),
        logo3: require("@/assets/mobile/logo3.png"),
        logo4: require("@/assets/mobile/logo4.png")
      },
      QRCode: require("@/assets/mobile/QRCode.png")
    };
  }
};
</script>


