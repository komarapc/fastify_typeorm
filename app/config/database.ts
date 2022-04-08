import { DROP_SCHEMA_DB } from "./config";
import { ContactInfoEntity } from "./../../src/entities/fastify_typeorm_test/contact-info";
import { UserEntity } from "./../../src/entities/fastify_typeorm_test/user.entity";
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

export const sqlserv_connection: ConnectionTypes = {
  database_host: "localhost",
  database_name: "fastify_typeorm_test",
  database_port: 1433,
  username: "developer",
  password: "secret12345678",
};

export const default_database = async () => {
  const conn = await createConnection({
    name: "default",
    type: "mysql",
    host: default_connection.database_host,
    port: default_connection.database_port,
    database: default_connection.database_name,
    username: default_connection.username,
    password: default_connection.password,
    extra: {
      trustServerCertificate: true,
    },
    synchronize: true,
    dropSchema: DROP_SCHEMA_DB,
    entities: [UserEntity, ContactInfoEntity],
  });
  return conn;
};

export const mssql_database = async () => {
  const conn = await createConnection({
    name: "default",
    type: "mssql",
    host: sqlserv_connection.database_host,
    port: sqlserv_connection.database_port,
    database: sqlserv_connection.database_name,
    username: sqlserv_connection.username,
    password: sqlserv_connection.password,
    extra: {
      trustServerCertificate: true,
    },
    synchronize: true,
    dropSchema: DROP_SCHEMA_DB,
    entities: [UserEntity, ContactInfoEntity],
  });
  return conn;
};
