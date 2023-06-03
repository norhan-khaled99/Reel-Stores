<template>
    <v-app>
         <form class="my-5" >
                    <input type="hidden" name="_token" value="csrf">
                  <!-- Email input -->
                  <div class="form-outline mb-4">
                    <label class="form-label" for="loginName">Email</label>
                    <input type="email" id="loginName" name="loginName" class="form-control" required />
                  </div>
  
                  <!-- Password input -->
                  <div class="form-outline mb-4 password-container">
                    <label class="form-label" for="loginPassword">Password</label>
                    <input type="password" id="loginPassword" name="loginPassword" class="form-control" required minlength="8"/>
                    <i class="fa-solid fa-eye" ></i>
                  </div>
  
                  <!-- Submit button -->
                  <button
                    type="submit"
                    class="btn text-light mb-4 px-5"
                    style="background-color:#B02B26"
                    @click="login"
                  >Sign in</button>
                </form>
    </v-app>
</template>
  
<script>
export default {

}
</script>
  
<style>
  
</style>