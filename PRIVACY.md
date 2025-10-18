# Política de Privacidad de AutoRelleno Sitename (Extensión de Chrome)

**Fecha de entrada en vigor:** [Fecha de hoy, p. ej., 18 de octubre de 2025]

La extensión "AutoRelleno Sitename" se compromete a proteger su privacidad. Esta política explica cómo la extensión maneja sus datos.

## 1. Recopilación de Información

**NO se recopila información personal identificable (PII) ni ningún otro dato sensible.**

La extensión "AutoRelleno Sitename" no recopila, transmite, procesa ni almacena datos de usuario en servidores externos de ningún tipo.

## 2. Almacenamiento Local de Datos

* **Dato Almacenado:** La extensión solo almacena una **preferencia de configuración** (el valor del `sitename` introducido por el usuario).
* **Método:** Este valor se almacena **exclusivamente de forma local** en el navegador del usuario utilizando la API `chrome.storage.local`.
* **Propósito:** El único propósito de este almacenamiento es recordar la preferencia del usuario para que el campo de login se auto-rellene correctamente.

## 3. Permisos de Extensión

Los permisos solicitados (`storage` y `host_permissions` para `https://panel.ibernetic.com/*`) se utilizan únicamente para el fin declarado de auto-rellenar el campo de formulario.

## 4. Confidencialidad

Esta extensión no tiene acceso a sus contraseñas, datos de pago, historial de navegación ni ninguna otra información fuera del campo `sitename` en el dominio especificado.

## 5. Contacto

Si tiene alguna pregunta sobre esta Política de Privacidad, por favor, póngase en contacto a través de la página de soporte o el repositorio de GitHub de la extensión.
