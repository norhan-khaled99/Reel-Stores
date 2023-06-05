<template>
  <div>
    <swiper
      ref="{swiperRef}"
      :slidesPerView="3"
      :centeredSlides="true"
      :spaceBetween="10"
      :navigation="true"
      :modules="modules"
    >
      <swiper-slide v-for="i in 5" :key="i">
        <div class="card w-100" style="width: 50rem;">
          <img class="card-img-top w-50" src="@/assets/google-icon.png"  />
          <div class="card-img-overlay  text-end">
               <img class=" iconSide" src="@/assets/Heart.svg" alt="heart"><br/>
               <img class="iconSide " src="@/assets/Bage.svg" alt="bage"><br/>
               <img class=" iconSide" src="@/assets/Image.svg" alt="image">
          </div>
              <div class="container">
                <div class="row justify-content-start">
                  <span class="col-4 categoryStyle">summer collection</span>
                  <span class=""  v-for="i in 5" :key="i">
                    <i style="width:5px;height:9px" class="fa fa-star  text-warning" aria-hidden="true"></i>
                  </span><br/>
                      <p class="">pools</p>
                      <span class="text-danger fw-bold me-2">$180</span>
                      <del style="color:gray">$130</del>
                    
                </div>
                <div class="row">
                 <p class="col-8">wefg</p>
                </div>
              </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation]
    };
  }
};
</script>


<style scoped>
.iconSide{
 width: 45px;
 height: 45px;
}
.iconSide:hover{
cursor: pointer;
}
.card-img-top {
  height: 50%;
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
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: rgb(240, 217, 217);
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide div {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 300px;
  margin: 20px auto;
}
</style>