CREATE TABLE `comments` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text,
	`comments` text NOT NULL
);
--> statement-breakpoint
ALTER TABLE `users` ADD `commenrs` text REFERENCES comments(id);