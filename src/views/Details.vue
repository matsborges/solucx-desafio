<template>
  <div class="details">
    
    <div class="container">
        <div class="row mt-5 justify-content-between">
          
          <div class="col-lg-5 col-sm-12 ">
              <div class="info-box row d-flex align-items-center">
                <div class="col">
                  <img class="avatar rounded-circle" v-if="drone.image" :src="imgUrl" alt="Robo">
                </div>
                <div class="col">
                  <ul class="info">
                    <li class="id">#{{drone.id}}</li>
                    <li class="nome">{{drone.name}}</li>
                    <li class="end">{{drone.address}}</li>
                  </ul>
                </div>
              </div>
          </div>

          <div class="col-md-6 col-sm-12">
            <div class="vel-box row">
              <div class="col max-vel ">
                <svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-clock-history" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
                  <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
                  <path fill-rule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
                <p>Max Speed</p>
                <p>{{drone.max_speed}} m/h</p>
              </div>

              <div class="col med-vel">
                <svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-clock" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"/>
                  <path fill-rule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
                <p>Averaged Speed</p>
                <p>{{drone.average_speed}} m/h</p>
              </div>
            </div>
          </div>

        </div>

        <div class="row mt-5 justify-content-between">
          <div class="col-md-6 col-sm-12 status-box">
            <div class="row">
              <div class="col status">
                <svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-check-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
                <p>Status</p>
                <p>{{drone.status}}</p>
              </div>
              <div class="col fly">
                <svg width="4em" height="4em" viewBox="0 0 16 16" class="bi bi-arrow-down-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M11 3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                  <path fill-rule="evenodd" d="M10.646 2.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L11 3.707 8.354 6.354a.5.5 0 1 1-.708-.708l3-3zm-9 7a.5.5 0 0 1 .708 0L5 12.293l2.646-2.647a.5.5 0 1 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
                  <path fill-rule="evenodd" d="M5 2.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5z"/>
                </svg>
                <p>Current Fly</p>
                <p>{{castFly}}</p>
              </div>
            </div>
          </div>

          <div class="col-md-5 col-sm-12 bat-box d-flex flex-column">
            <svg width="5em" height="5em" viewBox="0 0 16 16" class="bi bi-battery-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M12 5H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2z"/>
              <path d="M2 6h10v4H2V6zm12.5 3.5a1.5 1.5 0 0 0 0-3v3z"/>
            </svg>
            <p>Battery</p>
            <p>{{drone.battery}}%</p>
          </div>

        </div>

        <div class="row mt-4">
          <div class="col voltar">
            <router-link to="/">
              <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-left-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.354 10.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L6.207 7.5H11a.5.5 0 0 1 0 1H6.207l2.147 2.146z"/>
              </svg>
            </router-link>
          </div>
        </div>
    </div>
  
  </div>
</template>

<style>
  
  .corpo{
    display: flex;
    flex-direction: column;
     
  }

  .info-box, .vel-box, .status-box, .bat-box{
    padding: 15px 0px;
    background-color: #EFF9FA;
    border: 1px solid #D0EEF0;
    border-radius: 5px;
    color: #2678CF;
  }

  .nome, .max-vel > p, .med-vel > p, .bat-box > p, .status > p, .fly > p {
    font-weight: bold;
    font-size: 1.3rem;
  }

  .avatar{
    height: 150px;
  }

  .info{
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .id,.max-vel p:nth-child(3), .med-vel p:nth-child(3), 
  .status p:nth-child(3),.fly p:nth-child(3),
  .bat-box p:nth-child(3){
    font-weight: bolder;
    font-size: 1.9rem;
  }

  .end{
    font-weight: 500;
    font-size: 1.2;
  }

  .max-vel{
    border-right: 1px solid #2678CF;
  }

  .max-vel{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .max-vel > p{
    margin-bottom: 0;
  }

  .max-vel p:nth-child(3){
    margin-top: 10px;
  }

  .med-vel{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .med-vel > p{
    margin-bottom: 0;
  }

  .med-vel p:nth-child(3){
    margin-top: 10px;
  }  

  .fly{
    border-left: 1px solid #2678CF;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .status{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bat-box{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .voltar{
    color:#2678CF;
    margin-left: -1rem;
  }


</style>

<script>
import Drones from '../services/drones'

export default {
  props:{
    _drone:{
      type: Object,
      default: null
    }
  },

  data(){
    return {
      drone:{

      }
    }
  },

  methods:{
    getDrone(){
      const id = this.$route.params.id;
      Drones.detalhes(id).then(resp => {
        this.drone = resp.data;
      })
    }
  },

  computed:{
    imgUrl:function(){
      return this.drone.image.split("?")[0]
    },
    castFly:function(){
      if(this.drone.fly >= 0 && this.drone.fly <= 50){
        return "Going"
      }else{
        return "Returning"
      }
    }
  },

  beforeMount(){
    if(this._drone){
      this.drone = this._drone
    }else{
      this.getDrone()
    }
  }
}
</script>