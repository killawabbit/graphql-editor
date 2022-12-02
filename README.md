# graphql-editor

The handy docker image for [graphql-editor](https://github.com/graphql-editor/graphql-editor) and [get-graphql-schema](https://github.com/prisma-labs/get-graphql-schema)

## Quick start
### Editor
To launch ```graphql-editor```, run ```docker compose up editor```

### Export
To export the existing graphql schema, fill the blanks in ```.env.local``` copied from ```.env```
and run ```docker compose up export```
Then you'll get ```schema.graphql```