<template>
  <div class="home">
    <div class="container mt-3">
      <form class="needs-validation" novalidate>
        <div class="form-row">
          <div class="col-md-2 mb-3">
            <label for="drone-id">Drone ID</label>
            <input v-model="filtro.id" type="text" class="form-control" id="drone-id" @change="getDrones()" required />
          </div>
          <div class="col-md-4 mb-3">
            <label for="name">Name</label>
            <input v-model="filtro.name" type="text" class="form-control" id="name" @change="getDrones()" required />
          </div>
          <div class="col-md-3 mb-3">
            <label for="fly">Current Fly</label>
            <select v-model="filtro.fly" class="form-control" id="fly" @blur="getDrones()">
              <option value="">Select</option>
              <option value="ida">Ida</option>
              <option value="volta">Volta</option>
            </select>
          </div>
          <div class="col-md-3 mb-3">
            <label for="status">Status</label>
            <select v-model="filtro.status" class="form-control" id="status" @blur="getDrones()">
              <option value="">Select</option>
              <option value="failed">Failed</option>
              <option value="flying">Flying</option>
              <option value="success">Success</option>
              <option value="charging">Charging</option>
              <option value="repair">Repair</option>
              <option value="offline">Offline</option> 
            </select>
          </div>
        </div>
      </form>

      <table class="table">
        <thead>
          <tr class="cabecalho">
            <th scope="col" @click="setSort('id')">Drone</th>
            <th scope="col" @click="setSort('name')">Customer</th>
            <th scope="col"></th>
            <th scope="col" @click="setSort('battery')">Batteries</th>
            <th scope="col" @click="setSort('max_speed')">Max Speed</th>
            <th scope="col" @click="setSort('average_speed')">Averaged Speed</th>
            <th scope="col" @click="setSort('fly')">Current Fly</th>
            <th scope="col" @click="setSort('status')">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="drone of drones" :key="drone.id" @click="goToDetails(drone)">
            <td>{{drone.id}}</td>
            <td><img :src="drone.image" alt="Drone Image"></td>
            <td><span class="name">{{drone.name}}</span>{{drone.address}}</td>
            <td>{{drone.battery}} %</td>
            <td>{{drone.max_speed}} m/h</td>
            <td>{{drone.average_speed}} m/h</td>
            <td>{{drone.fly}}</td>
            <td>{{drone.status}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <nav aria-label="Page navigation example" class="mt-3">
      <ul class="pagination justify-content-center d-flex">
        <li class="page-item"><a class="page-link" @click="getDrones(1)">1</a></li>
        <li class="page-item"><a class="page-link" @click="getDrones(2)">2</a></li>
        <li class="page-item"><a class="page-link" @click="getDrones(3)">3</a></li>
        <li class="page-item"><a class="page-link" @click="getDrones(4)">4</a></li>
        <li class="page-item"><a class="page-link" @click="getDrones(5)">5</a></li>
        <li class="page-item"><a class="page-link" @click="getDrones(6)">6</a></li>
        <li class="page-item"><a class="page-link" @click="getDrones(7)">7</a></li>
        <li class="page-item"><a class="page-link" @click="getDrones(8)">8</a></li>
        <li class="page-item"><a class="page-link" @click="getDrones(9)">9</a></li>
        <li class="page-item"><a class="page-link" @click="getDrones(10)">10</a></li>
      </ul>
    </nav>
    
  </div>
</template>

<script>
import Drones from '../services/drones'

export default {
  data(){
    return{
      drones: [],
      filtro:{
        id: null,
        name: "",
        status: "",
        fly: "",
        limit:100,
        sort: "id",
        order: "asc"
      },
    }
  },

  mounted(){
    this.getDrones()
  },

  methods: {
    getDrones: function(page = 1){
      console.log(this.filtro);
      Drones.listar(this.filtro, page).then(resp => {
        this.drones = resp.data
      })
    },

    goToDetails: function(drone){
      Drones.detalhes(drone.id).then(resp => {
        this.$router.push({
          name: "detalhes",
          params: {id:drone.id},
          props: {_drone:resp.data}
        })
      })
    },

    setSort: function(column){
      if(this.filtro.sort == column){
        if(this.filtro.order == "asc"){
          this.filtro.order = "desc"
        }else{
          this.filtro.order = "asc"
        }
      }else{
        this.filtro.sort = column
        this.filtro.order = "asc"
      }
      this.getDrones()
    }
  }
  
}

</script>

<style>
  label {
    color: #5f9fe2;
    font-weight: bold;
    font-size: 1.2rem;
  }

  input[type="text"]{
    background-color: #eff9ff;
    border-color: #d7e8f5; 
  }
  input[type="text"]:hover{
    background-color: #eff9ff;
    border-color: #d7e8f5; 
  }

  select, option{
    background-color: #eff9ff !important;
    color: #5f9fe2;
  }

  th, td{
    color: #6b9fc9;
  }

  th, td{
    cursor: pointer;
  }

  .name{
    display: flex;
    font-size: 1.3rem;
    font-weight: bold;
  }
</style>