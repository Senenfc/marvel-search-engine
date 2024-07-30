Aplicación **Next.js** para la búsqueda de héroes de Marvel, en ella se muestra un listado con los primeros 50 héroes con un buscador que permite filtrarlos por el nombre.
Sobre estos héroes podemos agregarlos a favoritos a través del botón corazón que nos indicará que es favorito si está relleno en color rojo o sin rellenar en el caso de que no sea favorito. También si clicamos sobre la card accederemos a la info del heroe en concreto en el que se nos mostrará su imagen, su nombre, y en caso de tenerlo, su descripción y los cómics en los que sale, ordenados por fecha ascendente, en un carrusel con scroll horizontal.


## Levantar el proyecto

En primer lugar, al tener el proyecto descargado, en la raiz copiamos `.env.example` y lo renombramos a `.env.local`. 
Las variables a rellenar son:

```
API_BASE_URL=http://gateway.marvel.com/v1/public
API_TS=1
API_KEY=123456
API_HASH=123456
```

Siendo API_KEY y API_HASH tus credenciales de la api de Marvel.

Cuando lo tengamos, por consola en la raíz del proyecto:

```bash
npm install
# o
yarn install
# o
pnpm install
# o
bun install
```

Una vez instalado podemos arrancar la aplicación con:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador y podrás ver la aplicación en funcionamiento.


## Tecnologías

`Next.js`
`Typescript`
`Vitest`


## Arquitectura

La aplicación se compone de una arquitectura sencilla y limpia que separa los componentes haciéndolos reutilizables e independientes de las páginas, con esto podemos crear componentes del lado del cliente pero haciendo que las páginas sirmpre sean SSR y podamos aprovechar la potencia de Next, lo cual también nos mejora el SEO al proporcionarnos de esta manera una carga rápida y la posibilidad de personalizar la metadata de esta.

También se crea una capa de servicios que abstrae las llamadas a la api, por lo que si en un futuro quisieramos cambiar por fetch por, por ejemplo, Axios, solamente tendríamos que modificar el fichero services/base.ts y no tendríamos que tocar nada más. En este fichero también agregaríamos otros métodos de llamada en el caso de necesitarlos.

Igualmente también se abstraen las devoluciones de la api para enviar solo los datos necesarios a cliente y al igual que antes si quisieramos cambiar a otra api solamente tendríamos que tocar los servicios.

También nos aprovechamos de la potencia de las imágenes y los link de Next.js que nos permiten realizar la precarga de imágenes y optimización tanto de estas como de la navegación.

Contamos con 3 páginas:

- La principal en la raiz `/` con el buscador y las card de los héroes resultantes de la llamada a la api.
- `/hero/{id}` con la info del héroe.
- `/favorites`con el listado de favoritos y su buscador

El desarrollo está hecho en responsive design.
Se realizan test de varios componentes y servicios.


## Nice to have

Se están mejorando ciertos aspectos y otros que con más tiempo se podrían mejorar aún más.

Actualmente se está cambiando el filtrado para que ataque directamente a la api y también la generación de páginas de cada héroe para que se haga de manera estática y sea más rápida la carga, ya que la api va bastante lenta.

Mejoras que se podrían hacer con más tiempo:

- Crear componente de no hay resultados para el caso de que no se encuentra ninguna búsqueda o que no haya favoritos.
- Crear componente sin descripción, o sin comics para la página de cada héroe.
- Modo oscuro.
- Filtros para la búsqueda.
- Adaptador para la librería de llamadas.
- Tipado de las respuestas de la api.
- Test de todos los archivos.