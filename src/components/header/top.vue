<template>
  <div class="container-top">
    <div class="main-top">
      <div class="row-1">
        <div class="col-1">
          <router-link :to="{name: 'home'}">
            <el-image style="width: 90px; height: 50px" :src="images.logo"/>
          </router-link>
          <el-select v-model="value" placeholder="送货至" size="mini">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>

          <el-divider direction="vertical"/>

          <a class="opacity" href="#">供货状态</a>
        </div>

        <div class="col-2">
          <div class="login">
            <span>
              您好，欢迎来到彩姿云购，请
              <a class="opacity" href="#">【 登陆 】</a>
            </span>

            <a class="opacity" href="#">
              <i class="el-icon-shopping-cart-2"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container-top {
  display: flex;
  justify-content: center;
  background-color: #08305c;
  .main-top {
    width: 1100px;
    color: #fff;
    a,
    i,
    span {
      color: #fff;
    }
    .row-1 {
      display: flex;
      .opacity:hover {
        opacity: 0.8;
      }
      .col-1 {
        display: flex;
        align-items: center;
        flex: 2;
        height: 72px;
        background-color: #08305c;
        .logo {
          opacity: 1;
        }
      }
      .col-2 {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
        height: 72px;
        background-color: #08305c;
      }
      .el-image {
        margin-right: 50px;
      }
      .el-divider {
        margin-left: 20px;
        margin-right: 20px;
      }
      .login {
        display: flex;
        align-items: center;
        a {
          margin-right: 10px;
          .el-icon-shopping-cart-2 {
            font-size: 30px;
          }
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "HeaderTop",
  data() {
    return {
      images: {
        logo: require("@/assets/logo-header.png")
      },
      options: [
        {
          value: "选项1",
          label: "广东"
        },
        {
          value: "选项2",
          label: "广西"
        },
        {
          value: "选项3",
          label: "湖北"
        },
        {
          value: "选项4",
          label: "湖南"
        },
        {
          value: "选项5",
          label: "江西"
        }
      ],
      value: ""
    };
  }
};
</script>