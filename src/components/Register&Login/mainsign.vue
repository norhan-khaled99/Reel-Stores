<template>
    <section class="my-3">
      <div class="container">
        <div class="row">
          <!-- First column -->
          <div class="col-lg-6 vh-100">
            <ul class="nav nav-pills">
              <li>
                <a
                  data-toggle="pill"
                  href="#pills-login"
                  :class="{ selected: signIn }"
                  @click.prevent="signIn = true; signUp = false"
                >
                  <span class="sign">sign in</span>
                </a>
              </li>
              <li>
                <a
                  data-toggle="pill"
                  href="#pills-signUp"
                  :class="{ selected: signUp }"
                  @click.prevent="signIn = false; signUp = true"
                >
                  <span class="sign">sign up</span>
                </a>
              </li>
            </ul>
  
            <div class="tab-content">
              <!-- Sign in -->
              <div class="tab-pane fade show active" id="pills-login">
                <signIn v-if="signIn" />
              </div>
  
              <!-- Sign up -->
              <div class="tab-pane fade" id="pills-signUp">
                <signUp v-if="signUp" />
              </div>
            </div>
          </div>
          <!-- First column -->
  
          <!-- Second column -->
          <div class="col-lg-6 vh-100">
            <div class="d-flex mt-4 justify-content-end">
              <router-link :to="'/'">
                <img style="width: 25px; height: 25px;" src="@/assets/close.png" />
              </router-link>
            </div>
            <div class="mt-5">
              <p class="ms-3 fs-3">or sign <span v-if="signIn">in</span><span v-if="signUp">up</span> via</p>
              <br />
              <div class="border border-2 p-2 w-50 text-center my-2 fs-2 preferred-color">
                <i class="fab fa-facebook-f ms-3 fw-light"></i>
                &nbsp;
                <a href="https://www.facebook.com" style="text-decoration: none;"><b>Facebook</b></a>
              </div>
              <div class="border border-2 p-2 w-50 text-center my-4 fs-2 preferred-color">
                <img src="../../assets/google-icon.png" width="30rem" class="me-2" />
                <a href="https://myaccount.google.com/" style="text-decoration: none;"><b>Google</b></a>
              </div>
              <p class="ms-3 fs-4">
                by clicking submit you agree to
                <br />&nbsp;&nbsp;&nbsp; the <a href="#">Terms and Conditions</a>
              </p>
            </div>
          </div>
          <!-- Second column -->
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import signIn from "@/components/Register&Login/signin.vue";
  import signUp from "@/components/Register&Login/signup.vue";
  
  export default {
    data: () => ({
      signIn: true,
      signUp: false,
    }),
    components: {
      signIn,
      signUp,
    },
  };
  </script>
  
  <style>
  .selected {
    border-bottom: 2px solid #b02b26;
  }
  
  .selected > span {
    color: #b02b26;
  }
  
  .sign {
    font-size: xx-large;
    color: black;
  }
  
  .preferred-color {
    color: #5957ba;
    border-radius: 10px;
  }
  
  @media (max-width: 768px) {
    .col-lg-6 {
      flex: 1;
      width: 100%;
    }
  
    .vh-100 {
      height: auto;
    }
  
    .nav-pills {
      justify-content: center;
    }
  
    .tab-content {
      margin-top: 20px;
    }
  
    .ms-3 {
      margin-left: 1rem !important;
    }
  }

  a{
    text-decoration: none;
  }
  </style>
  