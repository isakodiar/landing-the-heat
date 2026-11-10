/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BOOKING_URL?: string;
  readonly VITE_FORM_ENDPOINT?: string;
  readonly VITE_WHATSAPP_NUMBER?: string;
  readonly VITE_CONTACT_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
