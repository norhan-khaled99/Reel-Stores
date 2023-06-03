<template>
  <div> 
        <div style="background-color:#B02B26;">
        <div class="container" >
            <div class="social-icons me-4">
                <i class="fab fa-facebook-f me-3 text-light"></i>
                <i class="fab fa-instagram me-3 text-light"></i>
                <i class="fab fa-twitter me-3 text-light"></i>
                <i class="fab fa-youtube me-3 text-light"></i>
            </div>

            <div class="text-center flex-grow-1 ">
                <p class="text-light fs-6 my-1">Use Code C77 - Free Delivery On Orders Over 70</p>
            </div>

            <div class="d-flex align-items-center">
                <div class="me-3">
                    <img src="../../assets/gordan.svg" alt="gordan" width="25" />
                </div>
                <div class="language-select me-3">
                    <select class="form-select  text-light" aria-label="Language Select" style="background-color:#B02B26;border:0">
                    <option value="AR" selected>AR</option>
                    <option value="EN">EN</option>
                    </select>
                </div>
                <div class="phone">
                    <i class="fas fa-phone-volume me-4 text-light "></i>
                    <a href="tel:00962-79-550-1004" class="text-light">00962-79-550-1004</a>
                </div>
            </div>
        </div>
        </div>

        <div class="row g-0 m-auto">
            <nav class="navbar navbar-expand-lg navbar-light " style="color:#FFFFFF">
       <router-link class="navbar-brand" :to="'/'"><img src="@/assets/logo.svg"  /></router-link>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
       </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <input type="text" id="inputtext" />
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fa-solid fa-cart-shopping mt-2 ms-4" style="font-size:25px"></i></a>
                    </li>

                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fa-solid fa-heart mt-2 ms-4" style="font-size:25px;"></i></a>
                    </li>

                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fa-solid fa-user mt-2 ms-4" style="font-size:25px;"></i></a>
                    </li>

                    <li class="nav-item">
                      <router-link :to="'/sign'"> <button class="gradient-button ms-5">Sign In</button> </router-link>    
                    </li>

                    
                </ul>

            

                </div>
            </nav>
        </div>
      
        <div class="row g-0 m-auto">
            <nav class="navbar navbar-expand-lg navbar-light " style="background-color:#EEEBDD">
                <a class="navbar-brand BestSeller ms-4" href="#">Best Seller</a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
               </button>
               
               <div class="collapse navbar-collapse" id="navbarNav">
               <ul class="navbar-nav">
                   <li class="nav-item">
                   <a class="nav-link NewArrivals ms-5 text-dark" href="#">New Arrivals</a>
                   </li>

                   <li class="nav-item">
                   <router-link  class="nav-link AboutUs ms-5 text-dark"   :to="'/aboutus'" >About Us</router-link>
                   </li>

                   <li class="nav-item">
                   <a class="nav-link ContactUs ms-5 mb-2 text-dark" href="#" >Contact Us</a>
                   </li>
                   
               </ul>
               </div>
            </nav>
        </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

#inputtext{
    width:22em; 
    height: 2em;
    border-radius: 30px;
    color: #FFFFFF;
    background-color: #EAC7C6;
    font-size: 30px;
    border: 0;
    box-sizing: border-box;
}
@media screen and (min-width: 0px) and (max-width: 665px) {
    #inputtext {
     width: 10em;
     }
   }
@media screen and (min-width: 665px) and (max-width: 996px) {
    #inputtext {
     width: 10em;
     }
   }
@media screen and (min-width: 997px) and (max-width: 1057px) {
    #inputtext {
     width: 11em;
     }
   }
@media screen and (min-width: 1058px) and (max-width: 1209px) {
    #inputtext {
     width: 13em;
     }
   }
@media screen and (min-width: 1210px) and (max-width: 1339px) {
    #inputtext {
     width: 15em;
     }
   }

@media screen and (min-width: 1340px) {
   #inputtext {
    width: 22em;
    }
  }







.gradient-button {
  background-image: linear-gradient(180deg, #B02B26 0%, rgba(214, 128, 128, 0.51) 100%);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
}

.gradient-button:hover {
  opacity: 0.8;
}

.BestSeller {
    width: 83px; 
    height: 24px;
    left: 56px;
    top: 152px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: #000000;
    
}
.NewArrivals{
    width: 100px;
    height: 24px;
    left: 201px;
    top: 152px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: #000000;
}
.AboutUs{
    width: 73px;
    height: 24px;
    left: 363px;
    top: 152px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
}
.ContactUs{

    width: 90px;
    height: 24px;
    left: 498px;
    top: 152px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: #000000;
}

.container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      background-color: #B02B26;
      padding: 2px;
    }

    .container > div {
      display: flex;
      align-items: center;
      
    }

    .container .social-icons {
      margin-right: 20px;
    }

    .container .language-select {
      margin-right: 20px;
    }

    .container .phone {
      display: flex;
      align-items: center;
    }

    @media (max-width: 767px) {
      .container .social-icons {
        margin-right: 10px;
      }

      .container .language-select {
        margin-right: 10px;
      }

      .container .phone {
        font-size: 12px;
      }
    }
</style>