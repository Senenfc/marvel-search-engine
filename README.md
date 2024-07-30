Aplicación **Next.js** para la búsqueda de héroes de Marvel, en ella se muestra un listado con los primeros 50 héroes con un buscador que permite filtrarlos por el nombre.
Sobre estos héroes podemos agregarlos a favoritos a través del botón corazón que nos indicará que es favorito si está relleno en color rojo o sin rellenar en el caso de que no sea favorito. También si clicamos sobre la card accederemos a la info del heroe en concreto en el que se nos mostrará su imagen, su nombre, y en caso de tenerlo, su descripción y los cómics en los que sale, ordenados por fecha ascendente, en un carrusel con scroll horizontal.


## Levantar el proyecto

En primer lugar, al tener el proyecto descargado en la raiz copiamos `.env.example` y lo renombramos a `.env.local`. 
Las variables a rellenar son:

```
API_BASE_URL=http://gateway.marvel.com/v1/public
API_TS=1
API_KEY=123456
API_HASH=123456
```

Siendo API_KEY y API_HASH tus credenciales de la api de Marvel.

Cuando lo tengamos por consola en la raíz del proyecto:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.



