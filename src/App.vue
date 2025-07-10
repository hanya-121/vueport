<template>
  <v-app>
    <Header/>
    <SidePopup/>
    <Popup/>

    <v-main> 
      <router-view />            
    </v-main>

    <Footer/>
  </v-app>
</template>

<script setup>
import Header from './include/Header.vue'
import Footer from './include/Footer.vue'
import SidePopup from './components/SidePopup.vue'
import Popup from './components/Popup.vue'
</script>