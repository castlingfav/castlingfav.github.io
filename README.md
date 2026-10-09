# Generador ITSE

Plataforma web para trámites ITSE, creada por Favio Arrese.

- **ITSE:** anexos y declaraciones juradas (la fecha va solo en los documentos que elijas), plan de seguridad, memoria de extintores, organizar y verificar las carpetas de cada expediente (también desde .zip y .rar) y un banco de documentos que se reutilizan (certificados de sedes; DNI, vigencias y fichas RUC de los dueños).
- **SUNARP:** en preparación, con su propio almacenamiento separado de ITSE.
- **Cuentas:** cada persona se registra con su correo; el administrador aprueba por correo o en Usuarios y decide a qué entra.
- **Datos:** todo se guarda en el Google Drive del administrador a través de su servidor (Google Apps Script). Funciona desde la computadora o el celular, sin depender de ninguna PC encendida.
- **Lo que no está en este código:** los documentos del banco, la lista de apoderados, la firma y las cuentas viven solo en ese Drive y en el servidor.
- **Archivos:** `index.html` es la aplicación completa. `ocr/` trae el lector de texto (pdf.js y Tesseract), el visor de Word y el lector de .rar, que funcionan en el navegador.
