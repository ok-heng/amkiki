<template>
  <div class="container-product">
    <router-link :to="{name: 'detail', query: {title, price, image}}">
      <el-image class="image" :src="image" :fit="fit"/>
    </router-link>
    <div style="height: 20px" />
    <router-link :to="{name: 'detail', query: {title, price, image}}">
      <span>{{title}}</span>
    </router-link>
    <div class="row3">
      <div class="row3-col1">
        <span class="price">¥{{price}}</span>
      </div>
      <div class="row3-col2">
        <i class="el-icon-shopping-cart-1"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container-product {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
  width: 210px;
  background-color: #fff;
  .image {
    margin-bottom: 30px;
    width: 210px;
    height: 200px;
  }
  .row3 {
    display: flex;
    align-items: center;
    margin-top: 20px;
    .row3-col1 {
      flex: 1;
      display: flex;
      .price {
        font-size: 20px;
        color: #ff0000;
      }
    }
    .row3-col2 {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .el-icon-shopping-cart-1 {
        font-size: 24px;
      }
    }
  }
}
</style>

<script>
export default {
  name: "Product",
  props: {
    title: String,
    price: Number,
    image: String
  }
};
</script>


