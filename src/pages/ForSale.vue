<template>
    <div>
        <div class="q-ma-lg text-center">No Properties Listed! </div> 
        
        <q-dialog v-model="dialoginfo">
            <DialogInfo/>
        </q-dialog>        
    </div>
</template>

<script>
import DialogInfo from '../components/DialogInfo'

    export default {
        name: 'ForSale',

        components: {
            DialogInfo
        },  
        
        data(){
            return{
              dialoginfo: true
            }
        }
        
    }
</script>

<style scoped>

</style>