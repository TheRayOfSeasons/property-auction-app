CREATE TABLE `bid_amount` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`outbid` real,
	`active` real,
	`winning` real
);
--> statement-breakpoint
CREATE TABLE `bids` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`outbid` integer,
	`active` integer,
	`winning` integer
);
--> statement-breakpoint
CREATE TABLE `properties` (
	`id` integer,
	`street` text,
	`address` text,
	`change` real,
	`market_value` real,
	`reserve_price` real,
	FOREIGN KEY (`id`) REFERENCES `bids`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`id`) REFERENCES `bid_amount`(`id`) ON UPDATE no action ON DELETE no action
);
