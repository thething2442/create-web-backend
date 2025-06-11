CREATE TABLE `herosection` (
	`id` text PRIMARY KEY NOT NULL,
	`herotitle` text,
	`herodescription` text,
	`heroimage` text
);
--> statement-breakpoint
CREATE TABLE `navbar` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text,
	`url` text
);
