declare namespace NodeJS {
  export interface ProcessEnv {
    CONNECT_STRING: string;
    SENDGRID_KEY: string;
    CONTAINER_CONNECTION_STRING: string;
    ONESIGNAL_ID: string;
    ONESIGNAL_KEY: string;
    SALT_KEY: string;
    EMAIL_TMPL: string;
    HOST: string;
    DATABASEUSER: string;
    PASSWORD: string;
    DATABASE: string;
  }
}