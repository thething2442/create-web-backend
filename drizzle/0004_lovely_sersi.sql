ALTER TABLE `post` RENAME COLUMN "created_at" TO "create_at";--> statement-breakpoint
ALTER TABLE `post` ALTER COLUMN "title" TO "title" text NOT NULL;--> statement-breakpoint
ALTER TABLE `post` ALTER COLUMN "description" TO "description" text NOT NULL;--> statement-breakpoint
ALTER TABLE `post` ALTER COLUMN "image_thumbnail" TO "image_thumbnail" text NOT NULL;--> statement-breakpoint
ALTER TABLE `post` ALTER COLUMN "updated_at" TO "updated_at" text NOT NULL;--> statement-breakpoint
ALTER TABLE `post` ALTER COLUMN "create_at" TO "create_at" text NOT NULL;