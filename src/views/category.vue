<template>
  <div>
    <Header/>
    <div class="category">
      <div class="category-main">
        <div class="row1">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <span class="breadcrumb-item">彩姿</span>
          </el-breadcrumb>
        </div>
        <div class="row2">
          <div class="row2-row1">
            <div class="row2-row1-row1">
              <el-image class="logo" :src="logo" :fit="fit"/>
              <span>
                彩姿
                <sup>&reg;</sup>
              </span>
            </div>
          </div>
          <div class="divider-green"></div>
          <div class="row2-row2">
            <div class="row2-row2-col1">
              <span class="row2-row2-col1-text1">产品筛选</span>
              <span class="row2-row2-col1-text2">(共43个产品)</span>
            </div>
            <div class="row2-row2-col2">
              <a href="#">
                <span>清空筛选条件</span>
              </a>
            </div>
          </div>
          <div class="divider-gray"></div>
          <div class="row2-row3">
            <span class="row2-row3-text1">产品系列</span>
            <a href="#" class="row2-row3-text2">
              <span>全部</span>
            </a>
            <a href="#" class="row2-row3-text3">
              <span>卓效美肌系列</span>
            </a>
            <a href="#" class="row2-row3-text3">
              <span>唇膏系列</span>
            </a>
            <a href="#" class="row2-row3-text3">
              <span>水润保湿系列</span>
            </a>
            <a href="#" class="row2-row3-text3">
              <span>臻透焕白系列</span>
            </a>
            <a href="#" class="row2-row3-text3">
              <span>面部底妆品系列</span>
            </a>
            <a href="#" class="row2-row3-text3">
              <span>黄金面霜系列</span>
            </a>
          </div>
          <div class="divider-gray"></div>

          <div class="row2-row4">
            <span class="row2-row4-text1">产品系列</span>
            <a href="#" class="row2-row4-text2">
              <span>全部</span>
            </a>
            <a href="#" class="row2-row4-text3">
              <span>100-199</span>
            </a>
            <a href="#" class="row2-row4-text3">
              <span>300-499</span>
            </a>
            <a href="#" class="row2-row4-text3">
              <span>500-699</span>
            </a>
            <el-input v-model="inputLow" placeholder="请输入" class="inputLow" size="mini"></el-input>
            <span class="divider-input">-</span>
            <el-input v-model="inputUp" placeholder="请输入" class="inputUp" size="mini"></el-input>
            <el-button size="mini">确定</el-button>
          </div>
          <div class="divider-gray"></div>

          <div class="module2-row5">
            <div class="module2-row5-col1">
              <span class="module2-row5-col1-text1">默认</span>
            </div>
            <div class="module2-row5-col2">
              <div class="module2-row5-col2-col1">
                <span class="module2-row5-col2-col1-text1">价格</span>
              </div>
              <div class="module2-row5-col2-col2">
                <i class="el-icon-caret-top"/>
                <i class="el-icon-caret-bottom"/>
              </div>
            </div>
            <div class="module2-row5-col2">
              <div class="module2-row5-col2-col1">
                <span class="module2-row5-col2-col1-text1">名称排序</span>
              </div>
              <div class="module2-row5-col2-col2">
                <i class="el-icon-caret-top"/>
                <i class="el-icon-caret-bottom"/>
              </div>
            </div>
          </div>
        </div>
        <div class="module3" v-for="i in 3" :key="i">
          <div class="module3-row1">
            <Product
              class="product"
              :title="item.title"
              :price="item.price"
              :image="item.image"
              v-for="item in product"
              :key="item"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style lang="scss">
.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .category-main {
    display: flex;
    flex-direction: column;
    width: 1100px;
    a {
      text-decoration: none;
      color: rgb(27, 27, 27);
    }
    .row1 {
      margin: 30px 0px;
      .breadcrumb-item {
        color: #067527;
      }
    }
    .row2 {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      .row2-row1 {
        display: flex;
        .row2-row1-row1 {
          display: flex;
          align-items: center;
          padding: 10px;
          .logo {
            margin-left: 10px;
            margin-right: 15px;
            width: 40px;
            height: 40px;
          }
          span {
            font-size: 24px;
          }
        }
      }
      .divider-green {
        height: 1px;
        background-color: rgb(20, 218, 125);
      }
      .divider-gray {
        height: 1px;
        background-color: rgb(212, 212, 212);
      }
      .row2-row2 {
        display: flex;
        .row2-row2-col1 {
          flex: 1;
          display: flex;
          align-items: center;
          .row2-row2-col1-text1 {
            padding: 15px 30px;
            margin-right: 10px;
          }
          .row2-row2-col1-text2 {
            font-size: 13px;
          }
        }
        .row2-row2-col2 {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          span {
            font-size: 13px;
          }
        }
      }
      .row2-row3 {
        display: flex;
        align-items: center;
        .row2-row3-text1 {
          padding: 15px 30px;
          margin-right: 10px;
          background-color: rgb(248, 246, 246);
        }
        .row2-row3-text2 {
          margin-right: 30px;
          padding: 5px 5px;
        }
        .row2-row3-text3 {
          margin-right: 40px;
          padding: 5px 5px;
        }
      }
      .row2-row4 {
        display: flex;
        align-items: center;
        .row2-row4-text1 {
          padding: 15px 30px;
          margin-right: 10px;
          background-color: rgb(248, 246, 246);
        }
        .row2-row4-text2 {
          margin-right: 50px;
          padding: 5px 5px;
        }
        .row2-row4-text3 {
          margin-right: 80px;
          padding: 5px 5px;
        }
        .inputLow {
          width: 70px;
        }
        .divider-input {
          margin: 0px 10px;
        }
        .inputUp {
          width: 70px;
          margin-right: 20px;
        }
      }
      .module2-row5 {
        display: flex;
        align-items: flex-end;
        height: 50px;
      }
      .module2-row5-col1 {
        display: flex;
        align-items: flex-end;
        margin: 0px 50px 0px 40px;
        height: 100%;
        border-bottom: 2px solid #067527;
        cursor: pointer;
        .module2-row5-col1-text1 {
          padding: 5px 8px;
        }
      }
      .module2-row5-col2 {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin: 0px 50px 0px 0px;
        height: 100%;
        cursor: pointer;
        &:hover {
          .module2-row5-col2-col2 .el-icon-caret-top {
            color: rgb(15, 156, 74);
          }
        }
        .module2-row5-col2-col1 {
          display: flex;
          align-items: flex-end;
          height: 100%;
          border-bottom: 2px solid #067527;
          .module2-row5-col2-col1-text1 {
            padding: 5px 8px;
          }
        }
        .module2-row5-col2-col2 {
          display: flex;
          flex-direction: column;
          .el-icon-caret-top,
          .el-icon-caret-bottom {
            color: #ddd;
          }
        }
      }
    }
    .module3 {
      display: flex;
      flex-direction: column;
      .module3-row1 {
        display: flex;
        .product {
          margin-right: 33px;
        }
      }
    }
  }
}
</style>

<script>
import Header from "@/components/header/header.vue";
import Footer from "@/components/footer/footer.vue";
import Product from "@/components/category/product.vue";

export default {
  name: "Category",
  components: {
    Header,
    Footer,
    Product
  },
  data() {
    return {
      inputLow: "",
      inputUp: "",
      logo: require("@/assets/mobile/logo4.png"),
      product: {
        product1: {
          title: "雅姿®水润保湿清爽套装[超值优惠装]",
          price: 320,
          image: require("@/assets/category/product2.jpg")
        },
        product2: {
          title: "雅姿修颜遮瑕液【3种颜色可选】—浅肤色",
          price: 230,
          image: require("@/assets/category/product1.jpg")
        },
        product3: {
          title: "雅姿®恒时凝颜®夜间修复乳霜 强效锁水",
          price: 260,
          image: require("@/assets/category/product3.jpg")
        },
        product4: {
          title: "雅姿®玻尿酸维C双效精华液DP精华",
          price: 120,
          image: require("@/assets/category/product4.jpg")
        }
      }
    };
  }
};
</script>

