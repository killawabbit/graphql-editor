# graphql-editor

The handy docker image for [graphql-editor](https://github.com/graphql-editor/graphql-editor)

## Quick start
Docker run
```
docker run -p 8080:3000 ghcr.io/tk42/graphql-editor:latest
```
or create and run docker-compose.yml
```docker-compose.yml
version: '3'

services:
  graphql-editor:
    image: ghcr.io/tk42/graphql-editor:latest
    ports: 
     - 8080:3000
```