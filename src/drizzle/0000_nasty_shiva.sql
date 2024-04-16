CREATE TABLE `bid_amount` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`outbid` real DEFAULT 0 NOT NULL,
	`active` real DEFAULT 0 NOT NULL,
	`winning` real DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `bids` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`outbid` integer DEFAULT 0 NOT NULL,
	`active` integer DEFAULT 0 NOT NULL,
	`winning` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `properties` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`street` text DEFAULT '' NOT NULL,
	`address` text DEFAULT '' NOT NULL,
	`change` real DEFAULT 0 NOT NULL,
	`market_value` real DEFAULT 0 NOT NULL,
	`reserve_price` real DEFAULT 0 NOT NULL,
	`satellite_view` text DEFAULT '' NOT NULL,
	`street_view` text DEFAULT '' NOT NULL,
	`bid` integer NOT NULL,
	`bid_amount` integer NOT NULL,
	FOREIGN KEY (`bid`) REFERENCES `bids`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`bid_amount`) REFERENCES `bid_amount`(`id`) ON UPDATE no action ON DELETE no action
);
