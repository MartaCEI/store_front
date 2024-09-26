# store_front - Proyecto MERN (Mongo Express React Node)
Sistema de autentificación y upload de archivos

Store (data taken from https://api.escuelajs.co/api/v1/products)

Formulario de registro. Clase 9 de Julio useState.

## Fase 1: Planificación y Configuración Inicial
Definir los requerimientos y funcionalidades (2-3h)
¿Qué características tendrá la tienda? (catálogo, carrito, pagos, etc.)
1. [x] Necesita un formulario de registro de usuarios. (1a Pagina)

2. [x] Necesita un formulario de inicio de sesión. (2a Pagina)
3. [x] Home.jsx La página principal mostrará un catálogo de productos. (3a Pagina)
4. [ ] Los usuarios podrán ver los detalles de cada producto. (4a Pagina)
5. [ ] Si el usuario no ha iniciado sesión,habrá una interfaz para agregar nuevos productos al catálogo, incluyendo la subida de imágenes. (5a Pagina)
6. [ ] Si el usuario ha iniciado sesión, podrá ver su carrito de compras y realizar pedidos. (6a Pagina)

@ como raiz para /src
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@':'/src'
    }
  }
})
Ejemplo: import '@/css/App.css'
NOTA: en vez de usar ../../ uso @ y todos mis archivos se abren desde la carpeta /src

INSTALAR TAILWIND
CDN Hay que poner la linea que pone y dentro del head de index.html me copio el script. 
<script src="https://cdn.tailwindcss.com"></script>
Archivo nuevo llamado tailwind.config.js en el home de la carpeta. y copiamos 

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}",
    "./index.html"],
    theme: {
    extend: { },
},
plugins: [],
}
```


¿Qué tecnologías se utilizarán? (React, Express, MongoDB, etc.)
Para el front se utilizará React con vite. Tambien los modulos de react-router-dom.
Para el back Express, cors y MongoDB.

Estructura básica de la base de datos. En esta primera fase creamos un mockData para simular la base de datos.
La base de datos tendrá una colección de productos, usuarios y pedidos.
```
{
  products: [
    "title": "Classic Heather Gray Hoodies",
    "price": 69,
    "description": "Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.h",
    "images": [
      "[\"https://i.imgur.com/cHddUCu.jpeg",
      "https://i.imgur.com/CFOjAgK.jpeg",
      "https://i.imgur.com/wbIMMme.jpeg\"]"
    ],
    "creationAt": Automático,
    "updatedAt": Automático,
    "category": {
      "id": Automático,
      "name": "nuevo",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": Automático,
      "updatedAt": Automático
    },
    {
      id: 2,
      name: 'Producto 2',
      price: 200,
      image: 'product2.jpg',
      category: 'category2',
      description: 'Descripción del producto 2'
    },
    ...
  ],
  users: [
    {
      id: 1,
      name: 'Usuario 1',
      email: 'emial@kajd.com',
        password: '123456'
    },
    {
      id: 2,
      name: 'Usuario 2',
      email: '
    },
    ...
    ],

    orders: [
        {
        id: 1,
        userId: 1,
        products: [
            {
            id: 1,
            quantity: 2
            },
            {
            id: 2,
            quantity: 1
            }
        ],
        total: 400,
        status: 'pending'
        },
        {
        id: 2,
        userId: 2,
        products: [
            {
            id: 3,
            quantity: 1
            }
        ],
        total: 300,
        status: 'completed'
        },
        ...
    ]
}
```

Configurar entorno de desarrollo (1-2h)

Instalar y configurar Vite para el frontend.
Configurar Express y MongoDB para el backend.
Configurar CORS para habilitar la comunicación entre frontend y backend.
Subir proyecto inicial a Git (opcional: configurar CI/CD).
Diseñar estructura básica de carpetas y rutas (2h)

Organizar el proyecto de Vite (páginas, componentes, assets).
Organizar el backend en Express (rutas, controladores, modelos).

## Fase 2: Frontend
Crear el diseño básico de la página principal (3-4h)

Prototipo del layout principal (header, catálogo, footer).
Diseño responsivo con CSS o algún framework (ej. Tailwind o Bootstrap).
Componentes de catálogo de productos (4-5h)

Crear componentes React para mostrar la lista de productos.
Crear un sistema de filtros (categorías, precios).
Componente de detalles del producto (3-4h)

Pantalla para visualizar la descripción completa del producto.


## Fase 3: Backend
Modelar la base de datos en MongoDB (3h)

Crear modelos para los productos, usuarios, pedidos.
Crear APIs REST (5-6h)

Endpoints para el CRUD de productos.
Endpoint para manejar el carrito de compras.
Endpoint para la gestión de usuarios y pedidos.

## Fase 4: Integración Frontend-Backend
Conectar frontend con backend (Fetch/Axios) (3-4h)

Consumir API de productos para mostrar los datos.
Implementar la lógica de agregar productos al carrito.
Autenticación y autorización (4-5h)

Crear sistema de autenticación de usuarios (registro, login).
Proteger rutas que requieran autenticación.

## Fase 5: Pruebas e Implementación
Realizar pruebas funcionales (4-5h)

Probar todas las rutas y funcionalidades (producto, carrito, pedidos).
Subir proyecto a Vercel (frontend y backend) (2h)

Configurar las variables de entorno (MongoDB, claves API, etc.).
Ajustes finales y optimización (3-4h)

Mejorar el rendimiento, imágenes, SEO, entre otros.
Tiempo estimado total: 40-50 horas
Puedes ajustar estas tareas a tus necesidades y disponibilidad, pero con esto tendrás una guía clara para empezar.


