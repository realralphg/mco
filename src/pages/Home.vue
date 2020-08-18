<template>
  <div>
    <div>
      <q-carousel
        v-model="slid"
        swipeable
        animated
        autoplay
        infinite
        control-color="secondary"
        :navigation="navigation"
        :navigation-position="navPos"
        height="350px"
        class="bg-grey-8 text-white"
        >

        <q-carousel-slide :name="carousel.name" class="q-pa-none" v-for="carousel in topCarousel" :key="carousel.id">
          <div>
            <q-img :src="carousel.imageUrl" height="350px"/>
            <div class="custom-caption absolute-bottom text-white text-h5 text-weight-light">
            {{ carousel.title }}
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

<!-- Our Identity Section -->
    <div class="bg-grey-4">              
      <div >
        <div class="q-px-lg q-py-md text-body1">
          <div class="text-h4">
            Muhammad & Co.
            <q-badge align="top">MCO</q-badge>
          </div>
          <p>
            MESSRS MUHAMMAD & CO. (MCO) is a dynamic firm of qualified and experienced 
            Estate Surveyors and Valuers registered under the Companies and Allied Matters 
            Decree of 1990, serving industry, commerce, governments and individual persons 
            or groups.  The firm was established in 1982 with Head Office in Kaduna and 
            branches at Abuja and other State Capitals in Nigeria.  The firm, as a Corporate 
            Member of the Nigerian Institution of Estate Surveyors and Valuers (NIESV) 
            Established by Decree Number 24 of 1975, is registered by the Estate Surveyors 
            and Valuers Registration Board of Nigeria (Registration Number A431)... <router-link to="/aboutus">read more</router-link>
          </p>
        </div>
      </div>

      <!-- Two Cards - Chairman-->
      <div class="row items-start justify-center  q-pa-md bg-grey-4 ">
        <q-card class="bg-primary" style="max-width: 350px">
            <img src="images/chairman.jpg" alt="">
        </q-card>

        <q-card class="q-pa-md text-grey-7 bg-grey-3" style="max-width: 450px; width: 100%"> 
            <span class="text-weight-light text-h6 text-black">Abdullahi Muh'd Sani, </span> <span><small><i>FNIVS, RSV</i> </small></span> <br>
            <span class="text-weight-light text-h6 text-black">(Chairman/CEO)</span> 
            <p>Abdullahi Muhammadu Sani is the Chairman/Chief Executive Officer of Muhammad & Company, 
              Director, New Nigeria Construction Company (NNCC) Limited and a Member of the Governing 
              Council of Ibrahim Badamasi Babangida (IBB) University, Lapai, Niger State, Nigeria. The 
              primary focus of his work at Muhammad & Company is to assist clients with strategy 
              management, appraisal and technical needs related to Real Estate and Land Acquisition 
              Matters. Mr. Sani has worked for a variety of clients in the Real Estate, Agricultural, 
              Petroleum, Financial Services, Industries, Government and its Agencies. For these clients, 
              he has developed strategies to deliver business value and assessed, designed and implement 
              management systems to ensure compliance, manage risk and obtain competitive advantage.</p>                
        </q-card>
      </div>

      <!-- Two Cards - Acting Chairman-->
      <div class="row items-start justify-center  q-pa-md bg-grey-4 ">
        <q-card class="bg-primary" style="max-width: 350px">
            <img src="images/acting.jpg" alt="">
        </q-card>

        <q-card class="q-pa-md text-grey-7 bg-grey-3" style="max-width: 450px; width: 100%"> 
            <span class="text-weight-light text-h6 text-black">Abdulrahman Ahmed, </span> <span><small><i>FNIVS, RSV</i> </small></span> <br>
            <span class="text-weight-light text-h6 text-black">(Ag. Chairman/Mng. Partner)</span> 
            <p>Alhaji Abdulrahman Ahmed is the current Acting Chairman and Managing Partner of 
              Muhammad & Company. He is a fellow of the Nigerian Institution of 
              Estate Surveyors and Valuers (NIESV), Registered Estate Surveyor and 
              Valuer, member of the Privilege Committee, former member of the National 
              Council of the Institution and former Chairman of Kaduna state 
              branch of the Nigerian Institution of Estate Surveyors and Valuers. At Muhammad & Company, 
              his goal is to ensure quality control and as Team Lead, ensure adherence to highest 
              standards, International Best Practice and work ethics.</p>                
        </q-card>
      </div>  

<!-- Table -->
      <Table/>          

<!-- Carousel II -->
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="secondary"
        navigation
        arrows
        height="400px"
        class="bg-grey-1 shadow-2 rounded-borders"
      >
        <q-carousel-slide :name="1" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders full-height" src="images/zunga1.jpg" />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders full-height" src="images/zunga2.jpg" />
          </div>
        </q-carousel-slide>   
        <q-carousel-slide :name="3" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders full-height" src="images/zunga3.jpg" />
          </div>
        </q-carousel-slide> 
        <q-carousel-slide :name="4" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders full-height" src="images/zunga4.jpg" />
          </div>
        </q-carousel-slide> 
        <q-carousel-slide :name="5" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders full-height" src="images/zunga5.jpg" />
          </div>
        </q-carousel-slide> 
        <q-carousel-slide :name="6" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders full-height" src="images/zunga6.jpg" />
          </div>
        </q-carousel-slide> 
        <q-carousel-slide :name="7" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders full-height" src="images/zunga7.jpg" />
          </div>
        </q-carousel-slide> 
        <q-carousel-slide :name="8" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders full-height" src="images/zunga8.jpg" />
          </div>
        </q-carousel-slide> 
        <q-carousel-slide :name="9" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders full-height" src="images/zunga9.jpg" />
          </div>
        </q-carousel-slide> 
        <q-carousel-slide :name="10" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img class="rounded-borders full-height" src="images/zunga10.jpg" />
          </div>
        </q-carousel-slide> 
        <q-carousel-slide :name="11" class="column no-wrap">
          <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wr10p">
            <q-img class="rounded-borders full-height" src="images/zunga11.jpg" />
          </div>
        </q-carousel-slide>                                                                             
   
      </q-carousel>

      <div class="text-center text-grey-9">
          <p> Compensation and Resettlement of Project Affected Persons in 
            The Zungeru Hydroelectric Power Project, Niger State, Nigeria (Swipe Left) </p>
      </div>      

<!-- Two Cards -->
      <div class="row items-start justify-center  q-pa-xs q-gutter-sm">
        <q-card class="q-pa-md text-white bg-secondary" style="max-width: 250px; min-width: 250px;">
            <span class="text-h4 text-weight-light text-primary">Muhammad <br> & Company</span> <br> <br>
            <div class="text-center">
              <q-icon class="q-pb-sm q-pl-sm" color="primary" name="home" size="30px"/>
              <q-icon class="q-pb-sm q-pl-sm" color="primary" name="home" size="30px"/>
              <q-icon class="q-pb-sm q-pl-sm" color="primary" name="home" size="30px"/> <br>             
            </div>
            <span class="text-primary" style="float: right"><b>...A firm with a difference!</b></span>
        </q-card>

        <q-card class="q-pa-md text-grey-4 bg-primary" style="max-width: 250px"> 
            <p>Having served numerous clients for over 30years in the corporate and private sector, 
               we continue to redefine the real estate industry in NIgeria, developing 
               strategies and management systems for better and informed decision making processes.</p>                
        </q-card>
      </div>
    
    </div>  
  </div>
</template>

<script>
import Table from '../components/Table'

export default {

  components:{
    Table
  },

  data () {
    return {    
    // for Carousel
      slid: 'moonlove',
      navigation: true,
      navPos: 'bottom',
      slide: 1,

      topCarousel: [
        {
          id: '1',
          name: 'moonlove',
          imageUrl: '/images/house2.jpg',
          title: 'Estate Surveyors & Valuers',
        },
        {
          id: '2',
          name: 'lovecircle',
          imageUrl: '/images/house1.jpg',
          title: 'Property Management',
        },
        {
          id: '3',
          name: 'lovelove',
          imageUrl: '/images/house4.jpg',
          title: 'Asset Valuation',
        },
        {
          id: '4',
          name: 'loveRing',
          imageUrl: '/images/house5.jpg',
          title: 'Property Rating',
        },                         
      ],      
    }
  }

}
</script>

<style scoped>

.custom-caption{
    bottom: 50px;
    text-align: center;
    padding: 5px;
    background-color: rgba(0, 0, 0, .3);
}

.radius{
  border-radius: 15px 0px 15px 0px;
  max-width: 350px;
}

a{
    text-decoration: none;        
}

</style>
