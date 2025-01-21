CREATE TABLE `minecraft` (
	`id` integer PRIMARY KEY NOT NULL,
	`userId` integer NOT NULL,
	`username` text NOT NULL,
	`uuid` text NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`email` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);