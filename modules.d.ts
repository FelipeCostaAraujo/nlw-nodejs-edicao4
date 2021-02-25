declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: number;
    HOST: string;
    DATABASEUSER: string;
    PASSWORD: string;
    DATABASE: string;
    INFO: string;
  }
}