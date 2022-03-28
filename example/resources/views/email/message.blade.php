<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
    <title>Registro</title>
</head>
<body>
    <p>Hola! Se ha creado tu usuario a las {{ $user['created_at']}}.</p>
    <p>Estos son tus datos:</p>
    <ul>
        <li>Nombre: {{$user['name'] }}</li>
        <li>Email: {{$user['email'] }}</li>
        <li>Contraseña: {{$user['password'] }}</li>
    </ul>
   
</body>
</html>