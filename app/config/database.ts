import { createConnection } from "typeorm";

type ConnectionTypes = {
  database_host: string;
  database_name: string;
  database_port: number;
  username: string;
  password: string;
};

export const default_connection: ConnectionTypes = {
  database_host: "localhost",
  database_name: "fastify_typeorm_test",
  database_port: 5432,
  username: "postgres",
  password: "12345678",
};

export const default_database = async () => {
  const conn = await createConnection({
    type: "postgres",
    host: default_connection.database_host,
    port: default_connection.database_port,
    database: default_connection.database_name,
    username: default_connection.username,
    password: default_connection.password,
    synchronize: true,
    dropSchema: true,
    entities: [],
  });
  return conn;
};
