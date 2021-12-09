<template>
   <div>
      <h1>Hello VUE Component XXXX</h1>
      <h1>{{ msg1 }}</h1>
      <h1>{{ msg2 }}</h1>
   </div>
</template>
<script>
export default { 
   data() {
      return {
         msg1: "This is my message - 1",
         msg2: "This is my message - 2"
      }
   }
}
</script>