import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table: Knex.TableBuilder) => {
    table.increments();
    table.string("first_name");
    table.string("last_name");
    table.string("phone");
    table.string("email");
    table.string("country");
    table.string("twitter");
    table.string("facebook");
    table.string("instagram");
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}
