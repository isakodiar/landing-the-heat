# THE HEAT — Landing page

Landing page comercial para captar llamadas de diagnóstico con estudios fitness en Aguascalientes.

## Stack
- React + TypeScript
- Vite
- CSS propio (sin Tailwind)
- Lucide React
- Video y posters servidos desde Cloudinary

## Desarrollo
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Configurar la conversión

Copia `.env.example` a `.env` y configura al menos un canal de recepción:

- `VITE_BOOKING_URL`: URL de Calendly, Cal.com u otra agenda. Los CTA de llamada abrirán esta URL.
- `VITE_FORM_ENDPOINT`: webhook para recibir el formulario (recomendado).
- `VITE_WHATSAPP_NUMBER`: alternativa para abrir WhatsApp con el mensaje preparado. Formato internacional, solo dígitos.
- `VITE_CONTACT_EMAIL`: alternativa para abrir el correo con los datos del prospecto.

Si no se configura ninguno, la landing muestra un aviso de que falta conectar la recepción de solicitudes; no simula que el mensaje fue enviado.

## Material audiovisual
Los clips de Parkour EVO, Pilates Mat, Yoga Sabinal y Academia de Box se alojaron en Cloudinary para servirlos con compresión adaptativa. Los videos se reproducen solo cuando la persona lo solicita en la galería.

## Antes de publicar
1. Configurar agenda o canal de recepción de leads.
2. Confirmar autorización de uso de cada pieza audiovisual y de las marcas/clientes mostrados.
3. Añadir dominio y metadatos sociales finales.
4. Probar el formulario y el CTA desde móvil.
