<template>
    <div>
        <q-card class="bg-primary text-white q-pb-md">
            <q-card-section class="row items-center q-pb-none">
                <div class="text-h6 text-secondary">Information!</div>
                <q-space />
                <q-btn icon="close" @click="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="text-center">
                There Are No  <br> 
                <span class="text-h3 text-secondary text-weight-thin">Properties Listed <br> </span>      
                <span style="float: right"><b>AT THIS TIME</b></span> <br>
                <span style="float: right">Call +23480 3855 8144</span>
            </q-card-section>
        </q-card>     
    </div>
</template>

<script>
    export default {

        methods:{
            close(){
                this.$router.replace('/')
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>