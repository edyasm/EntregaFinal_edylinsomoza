# Guía de Uso - Sistema de Gestión de Productos

Este proyecto es un sistema de gestión de productos desarrollado en JavaScript. Permite agregar, ajustar y eliminar productos, así como también mostrar la lista de productos existentes.

## Funcionalidades

- **Mostrar Productos:** Muestra la lista de productos existentes.
- **Ajustar Producto:** Permite ajustar la cantidad de un producto existente.
- **Agregar Producto:** Agrega un nuevo producto al registro.
- **Eliminar Producto:** Elimina un producto del registro.


## Integración de API

El sistema puede integrar una API para obtener información sobre un usuario aleatorio y muestra el nombre del usuario y su ubicacion.

## Instrucciones de Uso

1. **Cargar la Página:** Al cargar la página, los productos se cargarán automáticamente.
2. **Mostrar Productos:** Se mostrará una lista de los productos existentes junto con su stock actual.
3. **Ajustar Producto:**
   - Selecciona el tipo de ajuste (positivo o negativo).
   - Selecciona el producto al que deseas ajustar la cantidad.
   - Ingresa la cantidad de ajuste.
   - Haz clic en el botón "Ajustar".
4. **Agregar Producto:**
   - Ingresa el nombre del nuevo producto.
   - Ingresa la cantidad inicial de stock para el producto.
   - Haz clic en el botón "Agregar".
5. **Eliminar Producto:**
   - Selecciona el producto que deseas eliminar.
   - Haz clic en el botón "Eliminar".
   - Confirmar la eliminación en el diálogo emergente.

## Notas

- Los productos se almacenan localmente en el navegador utilizando el Local Storage del navegador.
- Se validan los caracteres del nombre del producto al agregar un nuevo producto.
- Se proporcionan mensajes de alerta para acciones críticas como falta de stock, productos duplicados y eliminación de productos.
- La integración de la API proporciona información adicional sobre los productos para una mejor experiencia de usuario.
- La función para obtener un usuario aleatorio muestra el nombre del usuario y la ubicacion en la página.

