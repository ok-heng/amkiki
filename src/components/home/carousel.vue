<template>
    <el-row type="flex" justify="center">
      <el-carousel height="400px" trigger="click" arrow="never">
        <el-carousel-item v-for="item in images" :key="item">
          <el-image
            style="width: 1500px; height: 400px"
            :src="item"
            :fit="fit"
          />
        </el-carousel-item>
      </el-carousel>
    </el-row>
</template>

<style lang="scss">
.el-carousel {
  width: 1500px;
}
</style>


<script>
export default {
  name: "Carousel",
  data() {
    return {
      images: {
        item1: require("@/assets/carousel1.jpg"),
        item2: require("@/assets/carousel2.jpg"),
        item3: require("@/assets/carousel3.jpg"),
        item4: require("@/assets/carousel4.jpg")
      }
    }
  }
};
</script>



