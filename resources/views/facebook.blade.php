<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Document</title>
</head>
<body>
<div id="app">
   <facebook-app></facebook-app>
   <div>@{{ msg }}</div>
   <div v-for="user in data">
      <span>@{{ user.name }}</span>
   </div>
</div>
<script src="{{asset('js/facebook/app.js')}}"></script>
</body>
</html>