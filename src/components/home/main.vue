<template>
  <div class="container-main">
    <Carousel/>
    <div class="main-main">
      <!-- row-1 -->
      <div class="row-1">
        <div class="row-1-1">
          <i class="el-icon-star-on"/>
          <span>猜你喜欢</span>
        </div>

        <div class="row-1-2" v-for="row in images" :key="row">
          <Product
            :title="item.title"
            :price="item.price"
            :image="item.image"
            v-for="item in row"
            :key="item.id"
          />
        </div>
      </div>

      <!-- row-2 -->
      <div class="row-2">
        <div class="col-1">
          <Card
            title="纽崔莱祝你健康纽崔莱祝你健康"
            icon1="el-icon-cherry"
            text1="增强免疫"
            icon2="el-icon-cherry"
            text2="增强免疫"
            icon3="el-icon-cherry"
            text3="增强免疫"
            icon4="el-icon-cherry"
            text4="增强免疫"
            buttonText="增强免疫"
            buttonIcon="el-icon-arrow-right"
            image="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          />
        </div>
        <div class="col-2">
          <Card
            title="纽崔莱祝你健康纽崔莱祝你健康"
            icon1="el-icon-cherry"
            text1="增强免疫"
            icon2="el-icon-cherry"
            text2="增强免疫"
            icon3="el-icon-cherry"
            text3="增强免疫"
            icon4="el-icon-cherry"
            text4="增强免疫"
            buttonText="增强免疫"
            buttonIcon="el-icon-arrow-right"
            image="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  .main-main {
    display: flex;
    flex-direction: column;
    width: 1100px;
    background-color: rgb(247, 247, 247);
    .row-1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 40px;
      background-color: #fff;
      .row-1-1 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
        margin-bottom: 25px;
        .el-icon-star-on {
          font-size: 30px;
          color: #e43838;
        }
        span {
          font-size: 18px;
        }
      }
      .row-1-2 {
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
      }
    }
    .row-2 {
      display: flex;
      .col-1 {
        flex: 1;
      }
      .col-2 {
        flex: 1;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>

<script>
import Card from "./card.vue";
import Product from "./product.vue";
import Carousel from "./carousel.vue";

export default {
  name: "Main",
  components: {
    Card,
    Product,
    Carousel
  },
  data() {
    return {
      images: {
        row1: {
          item1: {
            id: 1,
            title: "雅姿®臻透焕白乳霜sp/ua++",
            price: 210,
            image: require("@/assets/product1.jpg")
          },
          item2: {
            id: 2,
            title: "雅姿®臻透焕白乳液250ML",
            price: 180,
            image: require("@/assets/product2.jpg")
          },
          item3: {
            id: 3,
            title: "雅姿®焕白面颈膜5片装",
            price: 130,
            image: require("@/assets/product3.jpg")
          },
          item4: {
            id: 4,
            title: "雅姿®焕白轻盈防晒乳SPF50",
            price: 160,
            image: require("@/assets/product4.jpg")
          }
        },
        row2: {
          item1: {
            id: 1,
            title: "雅姿®丝绒雾面唇膏[5种颜色可选]—霓",
            price: 120,
            image: require("@/assets/product5.jpg")
          },
          item2: {
            id: 2,
            title: "雅姿®恒时凝颜®粉底液SPF20/PA",
            price: 210,
            image: require("@/assets/product6.jpg")
          },
          item3: {
            id: 3,
            title: "雅姿®臻透焕白乳霜套装",
            price: 280,
            image: require("@/assets/product7.jpg")
          },
          item4: {
            id: 4,
            title: "雅姿®玻尿酸维C双效精华液",
            price: 480,
            image: require("@/assets/product8.jpg")
          }
        }
      }
    };
  }
};
</script>


