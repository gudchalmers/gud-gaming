# G.U.D. Gaming

G.U.D:s platform for game servers. It uses Chalmers oauth for authentication and authorization.

## Development

1. `npm install`
2. `npm run db:migrate`
3. `npm run dev`

## Production

Use the docker image. There is no automation for the running `db:migrate` so run that manually if you change the database schema.

The production is otherwise automated.
