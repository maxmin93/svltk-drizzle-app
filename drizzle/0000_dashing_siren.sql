CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"phone" varchar(256)
);

truncate table users;

insert into users (full_name, phone) values
('John Doe', '1234567890'),
('Talon Gison', '677267890'),
('Babara Dov', '33267890'),
('Emi Karl', '7774567890');
