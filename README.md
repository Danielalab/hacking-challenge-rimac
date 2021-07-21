# Hacking Challenge Rimac

Este proyecto es una página web que permite a los clientes de Rimac cotizar un seguro vehicular  🚗.  
Las(os) usuarias(os) porán ingresar sus datos y decidir el monto con el que deseean asegurar su vehículo. Además pueden agregar o quitar otras coberturas al plan del seguro vehicular.

## Demo

- Puedes ver una demo del proyecto en el siguiente video: [Ver video](https://www.loom.com/share/989507ba196740de9998d237d3d745b7)
- Puede visualizar el proyecto desplegado en el siguiente link: [Hacking Challenge App](https://hacking-challenge-rimac.web.app/)

> Nota: Todos los campos del primer formulario de ingreso son requeridos y deben cumplir con el siguiente formato:
> - DNI: 8 dígitos numéricos (Ejemplo: `99900991`).
> - Celular: 9 dígitos numéricos (Ejemplo: `525213649`).
> - Placa: 3 primeros dígitos deben ser númericos o letras. Debe continuar un guión `-` y los tres últimos dígitos deben ser numéricos
> (Ejemplo: `ABC-369`).

### Correr el proyecto de manera local en su computadora

  1. Clonar el repositorio: `git clone https://github.com/Danielalab/hacking-challenge-rimac.git`
  2. Entrar a la carpeta: `cd hacking-challenge-rimac`
  3. Instalar las dependencias del proyecto: `npm install`
  4. Levantar el servidor local: `npm start`

## Stack Tecnológico

#### React

Se utilizó React para renderizar las vistas contruyendo una **single page aplication** que ayuda a que la página cargue
de forma más rápida.
Se utilizaron diversos Hooks para manejar el estado de la aplicación:
- useState: para manejar el estado interno de cada componente.
- useContext: para guardar información global que se necesitaba en diversos componentes como la placa, nombre de cliente, etc.

#### React Router
Se utilizó React Router para manejar las rutas de la aplicación.
Hooks utilizados:
- useLocation
- useHistory

#### PropTypes:
Se utilizó para validar las propiedades de cada componente.

#### Sass
Se utilizó Sass para construir los estilos de la aplicación y poder reutilizarlos usando clases.

#### Git & Github:
Se utilizo Git para el control de versiones del proyecto de manera local y Github para alojar el proyecto de forma remota, crear un project,
releases, issues.

#### Bootstrap
Se utilizó este framework de Css para poder contruir los estilos de la aplicación de forma más rápido utilizando sus clases pre-construidas.

#### Eslint
Herramiento de desarrollo para poder mantener un estilo legible en el código. Para este proyecto se hizo uso de 
[la guía de estilos de Airbnb](https://www.npmjs.com/package/eslint-config-airbnb).

#### Firebase Hoisting
Es una PaaS que nos permite desplegar la aplicación de forma rápida.

## Planificación 

Para este proyecto se crearon 4 historias de usuario. Cada historia tiene sus criterios de aceptación y definición de terminado.
La planificación se encuentra en un tablero de Kanban alojado en un proyecto de Github [Ver tablero](https://github.com/Danielalab/hacking-challenge-rimac/projects/1).

### Historias de Usuario
Por cada Historia de usuario se creo una lista de tareas en issues ([Ver lista de tareas](https://github.com/Danielalab/hacking-challenge-rimac/issues?q=is%3Aissue+is%3Aclosed)).
Antes de crear las historias de usuario se identifico la lista de posibles componentes de acuerdo al diseño entregado ([Ver lista de componentes](https://www.figma.com/file/lGcYVFEnSSpKElo8G1X6yM/Hacking-Challenge-2021-Dani-version?node-id=2603%3A720)).

- [HU1: Yo como cliente de Rimac debo poder iniciar sesión de manera sencilla para cotizar mi seguro vehicular](https://github.com/Danielalab/hacking-challenge-rimac/issues/3)
- [HU2: Yo como cliente de Rimac debo poder indicar los datos de mi vehículo y el monto de mi seguro](https://github.com/Danielalab/hacking-challenge-rimac/issues/16)
- [HU3: Yo como cliente de Rimac debo poder agregar y quitar coberturas a mi plan de seguro vehicular](https://github.com/Danielalab/hacking-challenge-rimac/issues/26)
- [HU4: Yo como cliente de Rimac debo poder ver una página de agradecimiento con los instrucciones finales](https://github.com/Danielalab/hacking-challenge-rimac/issues/37)

### Realeases
Para este proyecto se realizaron 3 realeases:
- [v0.2.0: Boy With Luv](https://github.com/Danielalab/hacking-challenge-rimac/releases/tag/v0.2.0)
- [v0.3.0: ON Kinetic Manifesto Film](https://github.com/Danielalab/hacking-challenge-rimac/releases/tag/v0.3.0)
- [v0.4.0: Fake Love](https://github.com/Danielalab/hacking-challenge-rimac/releases/tag/v0.4.0)
