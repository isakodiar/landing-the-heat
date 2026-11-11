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

## WhatsApp comercial configurado

**Contacto de THE HEAT:** +52 449 468 5875 · `524494685875` (formato de WhatsApp).

Los botones usan este número por defecto, incluso si el hosting no define `VITE_WHATSAPP_NUMBER`. Para sustituirlo sin modificar la interfaz, configura `VITE_WHATSAPP_NUMBER` con el número internacional (solo dígitos) en tu archivo `.env` o en el entorno de Vercel, y vuelve a desplegar. El número es público porque se utiliza como destino de contacto comercial.

- Los CTA principales abren `https://wa.me/<número>?text=<mensaje>` con un mensaje de presentación listo para editar y enviar.
- El formulario corto solicita nombre, estudio, servicio y contexto; prepara un texto personalizado que el visitante revisa y **envía manualmente** en WhatsApp.
- **No existe agenda automática ni backend de recepción** y la landing no debe afirmar que se envió o recibió ningún mensaje.
- Si se elimina tanto el número predeterminado del código como la variable del entorno, los CTA llevarán a Contacto con un aviso de configuración.
- Para Vercel: Settings → Environment Variables → agrega `VITE_WHATSAPP_NUMBER` para Production/Preview → vuelve a desplegar para incorporar el valor al build.

## Material audiovisual

Los clips de Parkour EVO, Pilates Mat, Yoga Sabinal y Academia de Box se alojaron en Cloudinary para servirlos con compresión adaptativa. Los videos se reproducen en la galería cuando la persona lo solicita.

## Antes de publicar
1. Probar los CTA de WhatsApp en desktop y móvil con el número comercial confirmado.
2. Probar el formulario verificando que el mensaje contenga los datos correctos y **no se envíe sin confirmación**.
3. Confirmar autorización de uso de cada pieza audiovisual y de las marcas/clientes mostrados.
4. Añadir dominio y metadatos sociales finales.
5. Revisar la política de privacidad correspondiente a los datos compartidos a través de WhatsApp.

## V2 — Material audiovisual y animaciones

- **Hero:** Yoga en el Sabinal como video de fondo en formato `cover`, con titular y formulario de WhatsApp superpuestos. Se muestra un fotograma si el video no puede reproducirse.
- **Trabajo en movimiento:** carrusel que avanza suavemente aproximadamente cada 5 segundos mientras está visible. Las tarjetas reproducen clips de ocho segundos, en bucle y sin audio. Se detiene al interactuar y permite abrir cada video completo.
- **Rendimiento:** avances optimizados en Cloudinary (aproximadamente 1 MB por clip); los videos fuera de pantalla se pausan.
- **Animaciones:** cada sección aparece al entrar en el viewport con IntersectionObserver, sin animación cuando el dispositivo solicita movimiento reducido.
- **Para quién:** imagen `FOTOS GALLI.png` obtenida del Drive autorizado y publicada en Cloudinary como `para-quien-galli`.

### Vista previa

Desplegar la rama `feat/landing-v2-hero-carousel` como **Preview** en Vercel; revisar comportamiento responsive y permisos de reproducción automática en navegador y móvil. El objetivo comercial sigue siendo abrir WhatsApp al **+52 449 468 5875**; ningún formulario envía mensajes sin confirmación del visitante.
