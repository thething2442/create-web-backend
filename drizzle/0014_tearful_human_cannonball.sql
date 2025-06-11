PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_post` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id_post` text NOT NULL,
	`table_of_contents` text,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`post_json` text NOT NULL,
	`image_thumbnail` text NOT NULL,
	`summary` text NOT NULL,
	`updated_at` text NOT NULL,
	`create_at` text NOT NULL,
	`publish_date` text NOT NULL,
	`tags` text NOT NULL,
	`creator` text NOT NULL,
	FOREIGN KEY (`table_of_contents`) REFERENCES `table_of_content`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_post`("id", "user_id_post", "table_of_contents", "title", "description", "post_json", "image_thumbnail", "summary", "updated_at", "create_at", "publish_date", "tags", "creator") SELECT "id", "user_id_post", "table_of_contents", "title", "description", "post_json", "image_thumbnail", "summary", "updated_at", "create_at", "publish_date", "tags", "creator" FROM `post`;--> statement-breakpoint
DROP TABLE `post`;--> statement-breakpoint
ALTER TABLE `__new_post` RENAME TO `post`;--> statement-breakpoint
PRAGMA foreign_keys=ON;