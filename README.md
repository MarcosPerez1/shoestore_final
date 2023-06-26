
# E-Commerce shoestore


### Definición de cliente:

Como usuario, al acceder a la aplicación si estamos logados o no podremos acceder a la landing page en la que tendremos un carrussel con articulos, (que deben de ser los artículos que más insercciones a la lista de favoritos tengan a través de los usuarios), y al navbar que nos dirigirá a los siguientes bloques, Home que se referirá a este carrussel, un apartado de productos donde nos aparecerán los artículos diferenciados por clases y a los que podremos aplicar filtros de búsqueda.

Por último tendremos un apartado usuarios en lo que podremos registrarnos si no lo estamos, y si lo estamos una vez logados aparecerá nuestro nombre de usuario en la parte superior derecha y podremos acceder a un apartado de artículos favoritos de cada usuario y al historial de compras (que habremos hecho a traves de una pasarela de pago (redys?)), tambien tendremos un boton de logout que será un modal que aparecera cuando clickemos en nuestro nombre de usuario.

### Definición técnica:

## Backend

Deberemos de crear un modelo Users, para guardar los registros de las personas que vayan accediendo a nuestra aplicación para así utilizar el username y password que hayan introducido para después hacer el login y poder tener paso a todas las funcionalidades que tiene la app. 

    * id (uuid) Primary Key con uuid_generate_v4()
    * email (text not null) (email de usuario)
    * username (text not null) (nombre de usuario unique)
    * password (text not null) (contraseña a partir de 6 dígitos alfanuméricos)
    


El segundo modelo que deberíamos crear es el apartado de products, para guardar en el los productos que se vayan metiendo y así podemos contar con un stock de todos estos artículos.

    * id (uuid) primary Key con uuid_generate_v4()
    * brand (text not null) (nombre de marca del artículo)
    * model (text not null) (nombre del artículo)
    * size (text not null) (talla del artículo)
    * image (text not null) (url de la imagen)
    * type (text not null) (tipo del artículo para diferenciarlo de otros)
    * price (text not null) (precio de cada artículo)
    

El tercer modelo que crearemos es la tabla purchases que será un tabla que dejará reflejada la venta de los artículos a través de los usuarios.

    * id (uuid) Primary Key con uuid_generate_v4()
    * purchase_date (date not null default now()) (fecha de venta)
    * user_id (uuid not null) references users
    * product_id (uuid not null) references shoes 

El cuarto y último modelo que crearemos será el modelo favourites que será la tabla en la que quedan reflejadas los artículos favoritos de cada usuario y que mas tarde serán lo que tengan orden de prioridad en el carrussel de la landing page.

    * id (uuid) primary key con uuid_generate_v4()
    * favourite_date (date not null default now())
    * user_id (uuid references users(id))
    * shoe_id (uuid references shoe(id))

### ENDPOINTS

Crearemos un endpoint Post/favourites/:id (por el cual iremos añadiendo a un contador las veces que el artículo con ese id ha sido añadido a la lista de favoritos de cada user )
    
    *Haremos un +1 al contador de favourites_count de la tabla products
    *Haremos una nueva insercción a la tabla favourites por el cual sabremos quien ha añadido ese artículo,que artículo y cuando.
    *La respuesta será como esta:

    ```
    {
        "success": true,
        "data":{
            "product": "nombre del producto"
            "users" : "nombre del usuario que lo ha añadido"
        }    }
    

    ```


Crearemos un endpoint get/favourites/mostvalue(para la creación del carrussel de artículos)

    *En este endpoint traeremos los articulos con mas insercciones en favoritos
    *Gracias a este endpoint conseguiremos los productos mas valorados y asi favorecerá su venta.
    
Obtendremos los articulos favoritos de cada usuario a través del endpoint get/favourites/:id.

    *Este endpoint devuelve los artículos favoritos de cada usuario utilizando su id de usuario
    *Gracias a este endpoint el usuario tendrá un listado mas accesible para futuras ventas

## Frontend

Empezaremos el proyecto siempre usando una maqueta de móvil y luego escritorio

Debemos tener 5 páginas:

    * Registro(sin proteger, pero si estamos logados, nos dirigirá a nuestro panel)
    * Login(sin proteger, pero si estamos logados, nos dirigira al panel)
    * Panel de user( protegida, si no estamos logados, no podremos tener acceso)
    * Home( sin proteger, estemos logados o no sera el punto de inicio de app)
    * Products(sin proteger, estemos logados o no podremos acceder a este apartado)


1. La página "Register" contendrá un formulario:

    * Título h1 "Create account"
    * Campo email (requerido)
    * Campo username (requerido)
    * Campo password (requerido, longitud mínima de 4 caracteres)
    * Campo submit (si todo va bien, redirigir a Login)

2. La página "Login" contendrá un formulario:

    * Título h1 "Login"
    * Campo email (requerido)
    * Campo password (requerido, longitud mínima de 4 caracteres)
    * Campo submit (si todo va bien, redirigir a Panel)
    
3. La página "Panel de user" contendrá:

    * Título h1 con el nombre del usuario logeado
    * 1 div para sacar los artículos añadidos a tus favoritos
    * 1 registro de las ventas del usuario

4. La página "home" contendrá:

    * Un slider con los productos más votados 
    * Cada foto puede ser un enlace para ver el producto en detalle

5. La página "products" contendrá:

    * Todos los productos de la tienda
    * Unos filtros de marca, modelo, talla y un rango de precios



[![imagenes](Sin título-2023-06-26-1804.excalidraw)](https://excalidraw.com/#json=7kdZKtQGH2haOsuNYp0Kh,ASCZtNcZajoxAWdg8NtZQg)
