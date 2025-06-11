ALTER TABLE `post` RENAME COLUMN "create_at" TO "created_at";--> statement-breakpoint
ALTER TABLE `users` RENAME COLUMN "updatedAt" TO "updated_at";--> statement-breakpoint
ALTER TABLE `users` RENAME COLUMN "createdAt" TO "created_at";--> statement-breakpoint
ALTER TABLE `webdata` RENAME COLUMN "updatedAt" TO "jsondata";--> statement-breakpoint
ALTER TABLE `webdata` RENAME COLUMN "createdAt" TO "website";--> statement-breakpoint
ALTER TABLE `webdata` RENAME COLUMN "userId" TO "updated_at";--> statement-breakpoint
ALTER TABLE `post` ALTER COLUMN "user_id_post" TO "user_id_post" text NOT NULL;--> statement-breakpoint
ALTER TABLE `webdata` ADD `created_at` text;--> statement-breakpoint
ALTER TABLE `webdata` ADD `user_id` text;