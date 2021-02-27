declare namespace NodeJS {
  export interface ProcessEnv {
    SALT_KEY: string;
    PORT: number;
    HOST: string;
    USERNAME: string;
    PASSWORD: string;
    DATABASE: string;
    INFO: string;
  }
}