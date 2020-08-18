<template>
    <q-page>
        <div>
        <q-img src="images/phone.jpg" :ratio="27/9">
          <div class="absolute-full text-subtitle2 flex flex-center">
            <span class="text-h3 text-weight-thin"> Contact Us </span> 
          </div>
        </q-img>
      </div>

       <div id="contact-info">
            <div class="q-pa-md" style="max-width: 500px" >
                <q-list padding>                    

                <q-item>
                    <q-item-section avatar>
                    <q-btn fab color="primary" icon="place" />
                    </q-item-section>
                    <q-item-section> <span class="text-h5">Head Office:</span> 
                    <q-item-label caption >
                        <span class="text-body2">
                        C9, 24, Muhammadu Buhari Way, Kaduna
                        </span>
                    </q-item-label>
                    </q-item-section> 
                    <q-item-section side >
                    <q-badge label="HQ" />
                    </q-item-section>                   
                </q-item>

                <q-item>
                    <q-item-section avatar>
                    <q-btn fab color="primary" icon="place" />
                    </q-item-section>
                    <q-item-section> <span class="text-h5">Abuja Branch:</span> 
                        <q-item-label caption >
                            <span class="text-body2">
                                Link Block, Wing A,
                                First Floor, BOA Plaza,
                                Central Area, Abuja
                            </span>
                        </q-item-label>
                    </q-item-section>                 
                </q-item>

                <q-item>
                    <q-item-section avatar>
                    <q-btn fab color="primary" icon="email" />
                    </q-item-section>
                    <q-item-section> <span class="text-h5">Email:</span> 
                    <q-item-label caption >
                        <span class="text-body2">
                            muhammadandco431@gmail.com 
                        </span>
                    </q-item-label>
                    </q-item-section>                    
                </q-item>

                <q-separator spaced inset="item" />

                <q-item>
                    <q-item-section avatar>
                    <q-btn fab color="primary" icon="call" />
                    </q-item-section>
                    <q-item-section> <span class="text-h5">Telephone</span> 
                    <q-item-label caption >
                        <span class="text-body2">
                        +234 8034028898; <br> +234 8033146830 <br>
                        +234 8038558144; <br> +234 8033114824 <br>
                        </span>
                    </q-item-label>
                    </q-item-section>                    
                </q-item>

                <q-separator spaced />

                </q-list>
            </div>
        </div>
    </q-page>
</template>

<script>
export default {
    
}
</script>
<style scoped>
    #contact-info{
        margin-left:auto;
        margin-right:auto;        
    } 

</style>