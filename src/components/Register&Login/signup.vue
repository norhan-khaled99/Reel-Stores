<template>
    <v-app>
           <form class="my-5"  action="https://reelstore.metafortech.com/auth/register">
           <input type="hidden" name="_token" value="csrf">
                 <!-- First name input -->
                 <div class="form-outline mb-4">
                   <label class="form-label" for="registerName">First name*</label>
                   <input type="text" id="registerFirstName" name="name" class="form-control" required/>
                 </div>
 
                 <!-- Last name input -->
                 <div class="form-outline mb-4">
                   <label class="form-label" for="registerLastName">Last name*</label>
                   <input type="text" id="registerLastname"  class="form-control" />
                 </div>
 
                 <!-- phone nunber input -->
                 <div class="form-outline mb-4">
                   <label class="form-label" for="registerPhoneNumber">Phone number*</label>
                   <input type="number" id="registerPhoneNumber"   class="form-control" />
                 </div>
                 <!-- Email input -->
                 <div class="form-outline mb-4">
                   <label class="form-label" for="registerEmail">Email*</label>
                   <input type="email" id="registerEmail" name="email" class="form-control" required />
                 </div>
 
                 <!-- Password input -->
                 <div class="form-outline mb-4 password-container">
                   <label class="form-label" for="registerPassword">Password*</label>
                   <input type="password" id="registerPassword" name="password" class="form-control" required/>
                   <i class="fa-solid fa-eye" ></i>
 
                 </div>
 
                 <!-- Repeat Password input -->
                 <div class="form-outline mb-4 password-container">
                   <label class="form-label" for="registerRepeatPassword">Repeat password*</label>
                   <input type="password" id="registerRepeatPassword" name="password_confirmation" 
                   class="form-control" required/>
                                     <i class="fa-solid fa-eye" ></i>
 
                 </div>
 
                 <!-- Submit button -->
                 <button
                   type="submit"
                   class="btn text-light mb-3"
                   style="background-color:#B02B26"
                   @click="register"
                 >Sign up</button>
               </form>
   </v-app>
 </template>
 
<script>
 export default {

 }
</script>
 
<style>
 
</style>