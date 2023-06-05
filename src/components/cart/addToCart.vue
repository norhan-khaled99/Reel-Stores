<template>
  <div class="container">
    <div class="row justufy-content-center">
      <div class="col-4">
        <h4>electronic & games</h4>
        <h4>Toys</h4>
        <h4>Arts</h4>
        <h4>summer collection</h4>
        <h4>stationary</h4>
      </div>
      <div class="col-8">
        <div class="container">
          <div class="row">
            <router-link :to="''">
              <span>Home</span> ->
              <span>electronic & games</span>
            </router-link>
          </div>
          <hr class="w-50" />
          <!-- here list all categry products -->
          <div class="row">
            <div v-for="i in 5" :key="i" class="col-lg-2 col-sm-6">
              <img
                class="border border-1 p-0 rounded-circle"
                style="width:70px;hight:70px;"
                src="@/assets/headphone.png"
              />
              <h6>product title</h6>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 col-sm-6">
              <label for>sort by:</label>
              <div class="dropdown">
                <select class="btn border">
                  <option value="sg">default sort</option>
                </select>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6">
              <label for>show :</label>
              <div class="dropdown">
                <select class="btn border">
                  <option v-for="i in 15" :key="i" value="i">{{i}}</option>
                </select>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mt-4 me-0">
              <img  style="width:24px" src="@/assets/grid.svg" />
              <span class="me-3">Grid</span>
              <img class style="width:24px" src="@/assets/list.svg" />List
            </div>
          </div>
          <hr class="mt-5" />

          <!-- pagination here -->

          <div class="row">
            <div class="card col-xl-4 col-md-6 col-sm-12 mb-2" v-for="i in 9" :key="i">
              <img class="card-img" src="@/assets/image_headphone.png" />
              <div class="card-img-overlay text-end">
                <img class="iconSide" src="@/assets/Heart.svg" alt="heart" />
                <br />
                <img class="iconSide" src="@/assets/Bage.svg" alt="bage" />
                <br />
                <img class="iconSide" src="@/assets/Image.svg" alt="image" />
              </div>
              <span class=" categoryStyle">summer collection</span>
              <p class>pools</p>
              <div class="row">
                <span class="col-lg-3 col-sm-12  text-danger fw-bold">$180</span>
                <del class="col-lg-4 col-sm-12" style="color:gray">$130</del>
                <span class="col-lg-5 col-sm-12">

                <span class="me-1" v-for="i in 5" :key="i">
                  <i
                  style="width:10px;height:10px"
                    class="fa fa-star  text-warning"
                    aria-hidden="true"
                  ></i>
                </span>
                </span>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <h2 class="mt-5">Related Productes</h2>
      <div>
        <!-- <p>slider here Related Productes</p> -->
        <productsSwiper />
      </div>
    </div>

    <div class="row">
      <h2 class="mt-5">You May Also Like</h2>
      <div>
        <!-- <p>slider here You May Also Like</p> -->
        <productsSwiper />
      </div>
    </div>
  </div>
</template>

<script>
import productsSwiper from "@/components/swiper/productsSwiper.vue";
export default {
  components: {
    productsSwiper
  }
};
</script>

<style>
.iconSide {
  width: 30px;
  height: 30px;
}
.iconSide:hover {
  cursor: pointer;
}
.categoryStyle {
  width: 152px;
  height: 21px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #323232;
  opacity: 0.5;
}
@media screen and (min-width: 0px) and (max-width: 665px) {
    .categoryStyle {
     width: 10rem;
     font-size: 11px;
     }
   }
</style>