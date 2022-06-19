# React Meetups

React Meetups es una app para la creación de eventos basada en React. React Meetup te permite crear eventos y añadirlos a tus eventos favoritos.

![Captura de pantalla 2022-06-17 a las 18 10 23](https://user-images.githubusercontent.com/32579111/174493648-26a36f30-db2b-4829-b2d2-f3f34e11d763.png)


# Ejecutar React Meetup
- clonar el repositorio `git clone https://github.com/ibandasca/react-meetup.git`
- `cd react-meetup`
- `yarn`
- `yarn start`
- navegar a la ruta `http://localhost:3000`

# Ejecutar los tests E2E (Cypress)
Para lanzar todos los tests via CLI:
- `yarn start`
- `yarn cypress:run`

Para lanzar los tests individualmente:
- `yarn start`
- `yarn cypress:open`
- Seleccionar la opción `E2E Testing`
- Seleccionar el navegador a emplear para la visualización de los tests (Chrome o Electron)
- Seleccionar el test a correr individualmente

# Solución empleada

La solución empleada para el funcionamiento de la aplicación consiste en hacer uso de un contexto mediante context API (`meetupListContext`) para la creación de Meetups y a su vez poder añadir estos a la lista de favoritos, de modo que podamos evitar hacer 'prop drilling'. Dicho contexto nos proporciona un provider (`MeetupsListProvider`) que se encarga de wrapear la aplicación entera para que los elementos hijos puedan hacer uso de dicho contexto.
