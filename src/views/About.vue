<template>
  <div class="about">
    <h1>This is an about page</h1>{{result}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        result: {},
      }
    },
    mounted() {
      fetch('https://swapi.dev/api/planets/1/')
      .then(response => { 
          if(response.ok){
              return response.json()    
          } else{
              alert("Server returned " + response.status + " : " + response.statusText);
          }                
      })
      .then(response => {

          this.result = Object.assign({}, response); 
          this.responseAvailable = true;
      })
      .catch(err => {
          console.log(err);
      });
    }
  };
</script>
