# Proyecto de E-commerce con React

Este proyecto es una aplicación de e-commerce desarrollada con React, Firebase y React Router. La aplicación permite a los usuarios navegar por los productos, ver los detalles de cada producto, agregar productos al carrito, ajustar las cantidades de los productos en el carrito y finalizar la compra a través de un proceso de checkout.

## Funcionalidades

- **Mostrar productos**: La aplicación muestra una lista de productos disponibles.
- **Mostrar detalles del producto**: Los usuarios pueden ver los detalles de un producto específico.
- **Agregar productos al carrito**: Los usuarios pueden agregar productos al carrito de compras.
- **Ajustar cantidades en el carrito**: Los usuarios pueden aumentar o disminuir la cantidad de productos en el carrito.
- **Finalizar compra**: Los usuarios pueden completar su compra a través de un proceso de checkout.

## Tecnologías Utilizadas

- **[React](https://react.dev/)**: Biblioteca de JavaScript para construir interfaces de usuario.
- **[Firebase](https://firebase.google.com)**: Plataforma de desarrollo de aplicaciones que proporciona servicios backend como base de datos en tiempo real y autenticación.
- **[React Router](https://reactrouter.com)**: Librería para manejar la navegación en aplicaciones React.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/CDToralesPoli/PuntoEspresso_React.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd PuntoEspresso_React
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Configura Firebase:
    - Crea un proyecto en Firebase Console.
    - Configura tu aplicación web y copia las credenciales de configuración.
    - Crea un archivo `.env` en la raíz del proyecto y agrega tus credenciales de Firebase:
        ```env
        REACT_APP_FIREBASE_API_KEY=your_api_key
        REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
        REACT_APP_FIREBASE_PROJECT_ID=your_project_id
        REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
        REACT_APP_FIREBASE_APP_ID=your_app_id
        ```

5. Ejecuta la aplicación:
    ```bash
    npm run dev
    ```

## Documentación

- Documentación de [React](https://react.dev/learn)
- Documentación de [Firebase](https://firebase.google.com/docs)
- Documentación de [React Router](https://reactrouter.com/en/main/start/tutorial)


## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para discutir cualquier cambio que te gustaría hacer.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.
