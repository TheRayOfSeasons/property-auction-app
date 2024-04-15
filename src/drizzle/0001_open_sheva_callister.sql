-- Custom SQL migration file, put you code below! --
INSERT INTO `bids` (`outbid`, `active`, `winning`)
VALUES (12, 24, 12);
INSERT INTO `bid_amount` (`outbid`, `active`, `winning`)
VALUES (100000.00, 100000.00, 100000.00);
INSERT INTO `properties` (`street`, `address`, `change`, `market_value`, `reserve_price`, `bid`, `bid_amount`)
VALUES ("14 Flood St.", "New Orleans, LA, 70122", 100.00, 40000, 5000.00, 1, 1);

INSERT INTO `bids` (`outbid`, `active`, `winning`)
VALUES (13, 20, 25);
INSERT INTO `bid_amount` (`outbid`, `active`, `winning`)
VALUES (120000.00, 140000.00, 200000.00);
INSERT INTO `properties` (`street`, `address`, `change`, `market_value`, `reserve_price`, `bid`, `bid_amount`)
VALUES ("24 Washington Ave.", "Washington DC", -100.00, 50000, 5200.00, 2, 2);

INSERT INTO `bids` (`outbid`, `active`, `winning`)
VALUES (14, 20, 14);
INSERT INTO `bid_amount` (`outbid`, `active`, `winning`)
VALUES (50000.00, 50000.00, 70000.00);
INSERT INTO `properties` (`street`, `address`, `change`, `market_value`, `reserve_price`, `bid`, `bid_amount`)
VALUES ("289 Hempstead St.", "California", 0.00, 30000, 5000.00, 3, 3);

INSERT INTO `bids` (`outbid`, `active`, `winning`)
VALUES (10, 15, 10);
INSERT INTO `bid_amount` (`outbid`, `active`, `winning`)
VALUES (200000.00, 200000.00, 200000.00);
INSERT INTO `properties` (`street`, `address`, `change`, `market_value`, `reserve_price`, `bid`, `bid_amount`)
VALUES ("57 West Ave G.", "New York", 100.00, 45000, 5200.00, 4, 4);
