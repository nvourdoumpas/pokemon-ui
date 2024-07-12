# POKEMON UI

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Prerequisites](#prerequisites)
- [Deployment](#deployment)
- [Depedencies](#depedencies)
- [Data](#data)
- [Usage](#usage)

## About <a name = "about"></a>

This project created to training at Vue 3 and Typescript in Vite.

## Getting Started <a name = "getting_started"></a>

- First install depepedencies:

```
npm install
```

- Development run:

```
npm run dev
```

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

## Prerequisites <a name = "prerequisites"></a>

What things you need to install the software and how to install them.

- Visual studio code: https://code.visualstudio.com/
- node.js: https://nodejs.org/en (This project developed with major version 22)

## Deployment <a name = "deployment"></a>

- Deployment Build:

```
npm run build
```

The build creates dist folder with runtime project.

- Preview run:

```
npm run preview
```

Run the project local on your pc from dist folder.

## Depedencies <a name = "depedencies"></a>

The project develop with the bellow depedencies:

- Veutify 3 (For more information: https://vuetifyjs.com/en/)
- pinia (For more information: https://pinia.vuejs.org/)
- axios (For more information: https://axios-http.com/docs/intro)
- vue-router (For more information: https://router.vuejs.org/)

## Usage <a name = "usage"></a>

With these project you can search a pokemon from a pokemon list. You add your favorites pokemons.

!IMPORTANT: Application not ask you for your personal data and not save your favorites. Favorites data cached at cookie and destroyed after 5 days.

All pokemon data not saved at application and provides from Poke API (https://pokeapi.co/)
