<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <a href="/"><img src="images/mcologo.png" style="height: 40px; max-width: 40px; padding-top: 5px;"></a>

        <q-toolbar-title class=" ">
          <router-link to="/" tag="span" style="cursor: pointer"> Muhammad & Co </router-link>
        </q-toolbar-title>

        <q-space/>

        <q-btn
          class="lt-md"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        
        <q-btn no-caps flat class="gt-sm row" v-for="link in essentialLinks" :key="link.id" :to="link.to" exact clickable>
          <div class="column justify-center">
            <q-icon :name="link.icon" class="q-mr-xs" size="18px"/>
          </div>

          <div class="column q-mr-md">
            <q-item-label>{{link.label}}</q-item-label>
          </div>
        </q-btn>  

      </q-toolbar>
    </q-header>

    <q-footer>
      <div class="text-center bg-grey-10">
        <div class="text-secondary">Muhammad & Co</div>
        <div class="text-secondary">Estate Surveyors & Valuers</div>
        <div class="text-grey-6">Copyright 2020</div>                
        <div class="text-grey-6">Greysoft Technologies</div>
      </div>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="250"
      content-class="bg-primary"
    >
      <q-list>
        <q-item-label header class="text-white text-h5 text-weight-light">
          Muhammad & Co
        </q-item-label>

        <q-item class="text-grey-5" v-for="link in essentialLinks" :key="link.id" :to="link.to" exact clickable>
          <q-item-section avatar>
            <q-icon :name="link.icon"></q-icon>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{link.label}}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',

  data () {
    return {
      leftDrawerOpen: false,

      essentialLinks: [
        {
          label: 'Home',
          icon: 'home',
          to: '/'
        },
        {
          label: 'About Us',
          icon: 'home',
          to: '/aboutus'
        },
        {
          label: 'To Let',
          icon: 'home',
          to: '/tolet'
        },
        {
          label: 'For Sale',
          icon: 'home',
          to: '/forsale'
        },                
        {
          label: 'Contact Us',
          icon: 'phone',
          to: '/contactus'
        },
      ]      
    }
  }
}
</script>

<style scoped>
.q-router-link--exact-active{
  color: white !important;
}

.fixed-bottom{
  position:absolute;
}

a{
    text-decoration: none;     
}

</style>