declare namespace NodeJS {
  export interface ProcessEnv {
    SALT_KEY: string;
    PORT: number;
    HOST: string;
    DATABASEUSER: string;
    PASSWORD: string;
    DATABASE: string;
    INFO: string;
  }
}