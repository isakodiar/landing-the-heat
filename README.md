# THE HEAT — Landing page

Landing comercial orientada a generar conversaciones por **WhatsApp** con dueños y administradores de estudios fitness en Aguascalientes.

## Stack
- React + TypeScript
- Vite
- CSS propio
- Lucide React
- Video y posters servidos desde Cloudinary

## Desarrollo local
```bash
npm install
cp .env.example .env
# Editar .env y colocar el WhatsApp comercial
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Conectar WhatsApp (requerido antes de publicar)

Configura `VITE_WHATSAPP_NUMBER` en el entorno de despliegue y en tu archivo `.env` local. Debe contener solo dígitos, prefijo internacional incluido. Para México usa `52` + 10 dígitos. No se incluye ningún número inventado ni se almacena en el código fuente.

- Los CTA principales abren `https://wa.me/<número>?text=<mensaje>` con un mensaje de presentación listo para editar y enviar.
- El formulario corto solicita nombre, estudio, servicio y contexto; prepara un texto personalizado que el visitante revisa y **envía manualmente** en WhatsApp.
- **No existe agenda automática ni backend de recepción** y la landing no debe afirmar que se envió o recibió ningún mensaje.
- Si falta un número válido, los CTA llevan a Contacto, donde aparece un aviso de configuración. No abren un chat con un número incorrecto.
- Para Vercel: Settings → Environment Variables → agrega `VITE_WHATSAPP_NUMBER` para Production/Preview → vuelve a desplegar para incorporar el valor al build.

## Material audiovisual

Los clips de Parkour EVO, Pilates Mat, Yoga Sabinal y Academia de Box se alojaron en Cloudinary para servirlos con compresión adaptativa. Los videos se reproducen en la galería cuando la persona lo solicita.

## Antes de publicar
1. Confirmar el número comercial y probar los CTA en desktop y móvil.
2. Probar el formulario verificando que el mensaje contenga los datos correctos y **no se envíe sin confirmación**.
3. Confirmar autorización de uso de cada pieza audiovisual y de las marcas/clientes mostrados.
4. Añadir dominio y metadatos sociales finales.
5. Revisar la política de privacidad correspondiente a los datos compartidos a través de WhatsApp.
