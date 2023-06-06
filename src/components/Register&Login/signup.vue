<template>
  <form class="my-5" @submit.prevent="register" >
    <!-- name input -->
    <div class="form-outline mb-4">
      <label class="form-label" for="registerName"> Name*</label>
      <input
        type="text"
        id="registerFirstName"
        name="name"
        class="form-control"
        required
        v-model="name"
        @blur="validateInput('name')"
      />
      <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
    </div>

    <!-- Email input -->
    <div class="form-outline mb-4">
      <label class="form-label" for="registerEmail">Email*</label>
      <input
        type="email"
        id="registerEmail"
        name="email"
        class="form-control"
        required
        v-model="email"
        @blur="validateInput('email')"
      />
      <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
    </div>

    <!-- Password input -->
    <div class="form-outline mb-4 password-container">
      <label class="form-label" for="registerPassword">Password*</label>
      <input
        type="password"
        id="registerPassword"
        name="password"
        class="form-control"
        required
        v-model="password"
        @blur="validateInput('password')"
      />
      <i class="fa-solid fa-eye" @click="showpassword"></i>
      <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
    </div>

    <!-- Repeat Password input -->
    <div class="form-outline mb-4 password-container">
      <label class="form-label" for="registerRepeatPassword">Repeat password*</label>
      <input
        type="password"
        id="registerRepeatPassword"
        name="password_confirmation"
        class="form-control"
        required
        v-model="confirmPassword"
        @blur="validateInput('confirmPassword')"
      />
      <i class="fa-solid fa-eye" @click="showconfirmpassword"></i>
      <span v-if="errors.confirmPassword" class="error-message">{{ errors.confirmPassword }}</span>
    </div>

    <!-- phone number input -->
    <div class="form-outline mb-4">
      <label class="form-label" for="registerPhoneNumber">Phone number*</label>
      <input
        type="number"
        id="registerPhoneNumber"
        class="form-control"
        required
        v-model="phoneNumber"
        @blur="validateInput('phoneNumber')"
      />
      <span v-if="errors.phoneNumber" class="error-message">{{ errors.phoneNumber }}</span>
    </div>

    <!-- country_code input -->
    <div class="form-outline mb-4">
      <label class="form-label" for="registercountry_code">Country code*</label>
      <input
        type="text"
        id="registercountry_code"
        class="form-control"
        required
        v-model="countryCode"
        @blur="validateInput('countryCode')"
      />
      <span v-if="errors.countryCode" class="error-message">{{ errors.countryCode }}</span>
    </div>
    <!-- Submit button -->
    <button
      type="submit"
      class="btn text-light mb-3"
      style="background-color:#B02B26"
    >
      Sign up
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      countryCode: '',
      valid:0,
      errors: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        countryCode: '',
      },
    };
  },
  computed: {
    isFormValid() {
      return (
        this.name &&
        this.email &&
        this.password &&
        this.confirmPassword &&
        this.phoneNumber &&
        this.countryCode 
      );
    },
  },
  methods: {
    showpassword(){
      var passwordInput = document.getElementById("registerPassword");
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
      } 
      else{
        passwordInput.type = "password";
      }
    },
    showconfirmpassword(){
      var passwordInput = document.getElementById("registerRepeatPassword");
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
      } 
      else{
        passwordInput.type = "password";
      }
    },
    validateInput(field) {
      const phoneNumberRegex = /^.{0,20}$/;
      const passwordRegex = /^.{8,}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if(field == "name")
      {
        if (!this[field])
        {
          this.errors[field] = 'This input is required.';
        }
        else
        {
          this.errors[field] = '';
          this.valid++;
        }
      }
      else if(field == "email")
      {
        if (!this[field])
        {
          this.errors[field] = 'This input is required.';
        }
        else if(this.email && !emailRegex.test(this.email)) 
        {
            this.errors.email = 'Invalid email format.';
        }
        else
        {
          this.errors[field] = '';
          this.valid++;
        }
      }
      else if(field == "password")
      {
        if (!this[field])
        {
          this.errors[field] = 'This input is required.';
        }
        else if (this.password && !passwordRegex.test(this.password)) {
        this.errors.password = 'Password must be at least 8 characters long.';
        }
        else
        {
          this.errors[field] = '';
          this.valid++;
        }
      }
      else if(field == "confirmPassword")
      {
        if (!this[field])
        {
          this.errors[field] = 'This input is required.';
        }
        else if(this.confirmPassword !== this.password) 
        {
            this.errors.confirmPassword = 'Passwords do not match.';
        }
        else
        {
          this.errors[field] = '';
          this.valid++;
        }
      }
      else if(field == "phoneNumber")
      {
        if (!this[field])
        {
          this.errors[field] = 'This input is required.';
        }
        else if (this.phoneNumber && !phoneNumberRegex.test(this.phoneNumber)) {
          this.errors.phoneNumber = 'Phone number must be up to 20 characters long.';
        }
        else
        {
          this.errors[field] = '';
          this.valid++;
        }
      }
      else if(field == "countryCode")
      {
        if (!this[field])
        {
          this.errors[field] = 'This input is required.';
        }
        else if (this.countryCode != 966) {
          this.errors.countryCode = 'Country code must be 966.';
        }
        else
        {
          this.errors[field] = '';
          this.valid++;
        }
      }
      else
      {
        this.errors[field] = '';
      }

    },
    async register(){
      if(this.isFormValid) {
        const userdata = {
          name: this.name,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
          phoneNumber: this.phoneNumber,
          countryCode: this.countryCode  
        };
        try {
          const response = await fetch("http://localhost:3000/auth/register", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userdata)
          });
          if (response.ok) {
            console.log("userdata: " + "ok")
            const responseData = await response.json();
            console.log("Registration successful:", responseData);
          } else {
            console.error("Registration failed:", response.status, response.statusText);
          }
        } catch (error) {
          console.error("Error occurred during registration:", error);
        }
     }
    },






  },
};
</script>

<style>
.error-message {
  color: red;
}
</style>

