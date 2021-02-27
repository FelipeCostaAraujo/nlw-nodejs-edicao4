declare namespace NodeJS {
  export interface ProcessEnv {
    SALT_KEY: string;
    PORT: number;
    HOST: string;
    POSTGRESS_PORT: number;
    USERNAME: string;
    PASSWORD: string;
    DATABASE: string;
    INFO: string;
  }
}