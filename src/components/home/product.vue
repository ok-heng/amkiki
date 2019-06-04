<template>
  <div class="product">
    <router-link :to="{name: 'detail', query: {title, price, image}}">
      <el-image style="width: 110px; height: 110px" :src="image" :fit="fit"/>
    </router-link>
    <div class="col2">
      <router-link :to="{name: 'detail', query: {title, price, image}}">
        <div class="col2-row1">
          <span class="name">{{title}}</span>
        </div>
      </router-link>
      <div class="col2-row2">
        <span class="price">¥{{price}}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.product {
  display: flex;
  .el-image {
    margin-right: 10px;
  }
  .col2 {
    display: flex;
    flex-direction: column;
    width: 150px;
    .col2-row1 {
      flex: 1;
      display: flex;
    }
    .col2-row2 {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-bottom: 10px;
    }
    .price {
      font-size: 22px;
      color: #db5353;
    }
  }
}
</style>

<script>
export default {
  name: "Product",
  props: {
    title: String,
    price: String,
    image: String
  }
};
</script>

