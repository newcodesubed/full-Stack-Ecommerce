import { pgTable, integer, varchar, text, doublePrecision } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const products = pgTable("products", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "products_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	name: varchar({ length: 255 }).notNull(),
	description: text(),
	image: varchar({ length: 255 }),
	price: doublePrecision().notNull(),
	quantity: integer().default(0),
	test: integer().default(0),
});
