<template>
   
   <div class="main d-flex justify-content-between flex-column">
        <div>
           <Headercomponent/>
        </div>

        <div> 
            <RouterView></RouterView>
        </div>

        <div>
          <Footer/>
        </div>

    </div>
</template>

<script>
import Headercomponent from '@/components/header/header.vue'
import Footer from '@/components/Footer/footer.vue'
export default {
    components:{
        Headercomponent,
        Footer,
        
     }
}
</script>

<style scoped>
    
.main{
   min-height: 100vh;
   width: 100%;
}

</style>