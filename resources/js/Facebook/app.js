import axios from "axios"
import Vue from "Vue"
import FacebookApp from "./FacebookApp.vue"
new Vue({
   el: "#app",
   components: {
      'facebook-app': FacebookApp
   },
   data: {
      msg: "Hello There",
      data: []
   },
   created: function() {
      let self = this
      let url = "https://jsonplaceholder.typicode.com/users"
      axios.get( url ).then( function( res ){
         self.data = res.data
         console.log( self.data )
      })
   }
})