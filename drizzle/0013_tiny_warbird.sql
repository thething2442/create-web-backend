PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_table_of_content` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text,
	`description` text,
	`imageSource` text,
	`subcontent` text,
	`datepublish` text,
	`post` text,
	`updatedAt` integer,
	`createdAt` text
);
--> statement-breakpoint
INSERT INTO `__new_table_of_content`("id", "title", "description", "imageSource", "subcontent", "datepublish", "post", "updatedAt", "createdAt") SELECT "id", "title", "description", "imageSource", "subcontent", "datepublish", "post", "updatedAt", "createdAt" FROM `table_of_content`;--> statement-breakpoint
DROP TABLE `table_of_content`;--> statement-breakpoint
ALTER TABLE `__new_table_of_content` RENAME TO `table_of_content`;--> statement-breakpoint
PRAGMA foreign_keys=ON;