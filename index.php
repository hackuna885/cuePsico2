<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Citas Atención Psicológica - UTFV</title>
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/animate.min.css">
    <link rel="stylesheet" href="css/style.css?v=1.0.1">
    <link rel="stylesheet" href="css/sweetalert2.min.css">
    <link rel="stylesheet" href="css/hover.css" />
    <link rel="icon" href="favicon.ico?v=2" type="image/x-icon" />
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet" />
    <link href="css/sb-admin-2.css" rel="stylesheet" />
    <script src="js/vue.js"></script>
    <script src="js/vue-router.js"></script>
    <script src="js/vuex.js"></script>
</head>
<body>
    <div class="container-fluid" id="app">
        <router-view></router-view>              
    </div>
    
    <script src="js/jquery.min.js"></script>
    <script src="js/axios.min.js"></script>
    <script src="js/sweetalert2.js"></script>
    <script src="js/main.js"></script>
    <script src="components/Inicio.js?v=1.0.1"></script>
    <script>
        app.use(store);
        app.use(router)
        app.mount("#app")
    </script>
</body>
</html>