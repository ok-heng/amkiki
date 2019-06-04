<template>
  <div class="container-main">
    <Carousel/>
    <div class="main-main">
      <!-- row-1 -->
      <div class="row-1">
        <div class="row-1-1">
          <i class="el-icon-goods"/>
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
            :title="card1.title"
            :icon1="card1.image1"
            :text1="card1.text1"
            :icon2="card1.image2"
            :text2="card1.text2"
            :icon3="card1.image3"
            :text3="card1.text3"
            :icon4="card1.image4"
            :text4="card1.text4"
            buttonText="探索更多"
            buttonIcon="el-icon-arrow-right"
            :image="card1.image5"
          />
        </div>
        <div class="col-2">
          <Card
            :title="card2.title"
            :icon1="card2.image1"
            :text1="card2.text1"
            :icon2="card2.image2"
            :text2="card2.text2"
            :icon3="card2.image3"
            :text3="card2.text3"
            :icon4="card2.image4"
            :text4="card2.text4"
            buttonText="探索更多"
            buttonIcon="el-icon-arrow-right"
            :image="card2.image5"
          />
        </div>
      </div>
      <!-- row-3 -->
      <div class="row-2">
        <div class="col-1">
          <Card
            :title="card3.title"
            :icon1="card3.image1"
            :text1="card3.text1"
            :icon2="card3.image2"
            :text2="card3.text2"
            :icon3="card3.image3"
            :text3="card3.text3"
            :icon4="card3.image4"
            :text4="card3.text4"
            buttonText="探索更多"
            buttonIcon="el-icon-arrow-right"
            :image="card3.image5"
          />
        </div>
        <div class="col-2">
          <Card
            :title="card4.title"
            :icon1="card4.image1"
            :text1="card4.text1"
            :icon2="card4.image2"
            :text2="card4.text2"
            :icon3="card4.image3"
            :text3="card4.text3"
            :icon4="card4.image4"
            :text4="card4.text4"
            buttonText="探索更多"
            buttonIcon="el-icon-arrow-right"
            :image="card4.image5"
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
        .el-icon-goods {
          margin-right: 5px;
          font-size: 30px;
          color: #d1d1d1;
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
      margin-bottom: 40px;
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
            title: "彩姿®臻透焕白乳霜sp/ua++",
            price: 210,
            image: require("@/assets/product1.jpg")
          },
          item2: {
            id: 2,
            title: "彩姿®臻透焕白乳液250ML",
            price: 180,
            image: require("@/assets/product2.jpg")
          },
          item3: {
            id: 3,
            title: "彩姿®焕白面颈膜5片装",
            price: 130,
            image: require("@/assets/product3.jpg")
          },
          item4: {
            id: 4,
            title: "彩姿®焕白轻盈防晒乳SPF50",
            price: 160,
            image: require("@/assets/product4.jpg")
          }
        },
        row2: {
          item1: {
            id: 1,
            title: "彩姿®丝绒雾面唇膏[5种颜色可选]—霓",
            price: 120,
            image: require("@/assets/product5.jpg")
          },
          item2: {
            id: 2,
            title: "彩姿®恒时凝颜®粉底液SPF20/PA",
            price: 210,
            image: require("@/assets/product6.jpg")
          },
          item3: {
            id: 3,
            title: "彩姿®臻透焕白乳霜套装",
            price: 280,
            image: require("@/assets/product7.jpg")
          },
          item4: {
            id: 4,
            title: "彩姿®玻尿酸维C双效精华液",
            price: 480,
            image: require("@/assets/product8.jpg")
          }
        }
      },
      card1: {
        title: "彩姿抗氧化进化论，诠释全新抗氧主义",
        image1: require("@/assets/card1.jpg"),
        text1: "搭配进阶",
        image2: require("@/assets/card2.jpg"),
        text2: "成分臻选",
        image3: require("@/assets/card3.jpg"),
        text3: "个性护肤",
        image4: require("@/assets/card4.jpg"),
        text4: "加乘锁鲜",
        image5: require("@/assets/card5.jpg")
      },
      card2: {
        title: "科技的力量，给你优质的生活",
        image1: require("@/assets/card6.jpg"),
        text1: "强韧秀发",
        image2: require("@/assets/card7.jpg"),
        text2: "即刻柔顺",
        image3: require("@/assets/card8.jpg"),
        text3: "实惠套装",
        image4: require("@/assets/card9.jpg"),
        text4: "个人护理",
        image5: require("@/assets/card10.jpg")
      },
      card3: {
        title: "彩姿助你实现美丽梦想",
        image1: require("@/assets/card/card11.jpg"),
        text1: "增强免疫",
        image2: require("@/assets/card/card12.jpg"),
        text2: "调节血脂",
        image3: require("@/assets/card/card13.jpg"),
        text3: "改善睡眠",
        image4: require("@/assets/card/card14.jpg"),
        text4: "体重管理",
        image5: require("@/assets/card/card15.jpg")
      },
      card4: {
        title: "优质生活，绿色洁净的家",
        image1: require("@/assets/card/card16.jpg"),
        text1: "卧室",
        image2: require("@/assets/card/card17.jpg"),
        text2: "洗衣间",
        image3: require("@/assets/card/card18.jpg"),
        text3: "客厅",
        image4: require("@/assets/card/card19.jpg"),
        text4: "厨房",
        image5: require("@/assets/card/card20.jpg")
      }
    };
  }
};
</script>


