CREATE TABLE `table_of_content` (
	`id` text PRIMARY KEY NOT NULL,
	`post` text,
	`title_post` text NOT NULL,
	`description_content` text NOT NULL,
	`image_content` text NOT NULL,
	`sub_content` text NOT NULL,
	FOREIGN KEY (`post`) REFERENCES `post`(`id`) ON UPDATE no action ON DELETE no action
);
