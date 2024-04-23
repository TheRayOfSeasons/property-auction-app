# property-auction-app

An application that imitates a property auction system. This is submitted as an evaluation project.

## Local Setup

1. Ensure that you have pnpm. If not, install with `npm install -g pnpm`.
2. `cd` into the project directory, then run `pnpm install`.
3. Setup Turso through `curl -sSfL https://get.tur.so/install.sh | bash`
4. Sign-in or register in Turso. You may refer to the first 4 instructions here: [https://orm.drizzle.team/learn/tutorials/drizzle-with-turso](https://orm.drizzle.team/learn/tutorials/drizzle-with-turso).
5. For good measure, refresh/reload your shell.
6. Create database with `turso db create property-auction-app`.
7. Create the token with `turso db tokens create drizzle-turso-db`.
8. Create a .env in the root directory, and add the following:
```
TURSO_CONNECTION_URL=<URL from step 6>
TURSO_AUTH_TOKEN=<token from step 7>
``` 
9. Run migrations and fill the sqlite database with mock data through running the following:
    ```
    pnpm db:migrate
    pnpm db:seed
    ```
10. Run `pnpm dev` to finally run locally.

## Significant Tech Used

- Next.js
- Drizzle ORM (with an SQLite DB)
- Zustand state management
- TailwindCSS

## Specs followed
Frontend in React
- pixel-perfect implementation, on a 2560x1440 screen
- consume ticker API endpoint and populate the ticker row

Backend in Node/Nest (or any JS-based)

- develop the ticker API endpoint that returns data on your_bids (broken down into outbid, active and winning bid counts), your_bid_amounts (broken_down into dollar value amount of outbid, active and winning bids), and property_listing (the street address of property, the current winning bid amount, and the negative or positive value of the last bid amount, different images)

- you can use fake data so long as i can toggle through different properties and their information (address, image) would change

- high level API endpoint documentation (preferably Swagger)
