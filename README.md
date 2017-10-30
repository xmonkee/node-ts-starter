## Features

1. Webpack configurations for typescript server and client apps
2. Docker configurations for development

## Typescript Everywhere

I wrote this config because I found it hard to find existing examples of
having typescript both on the client and the server. The reason I needed this
was because I wanted to share code between them. There are four
webpack configuration included: Server and Client for Dev and Prod.

The configurations inherit from each other in the following way:

```
webpack.base.js
    |---webpack.server.js
    |       |---webpack.server.prod.js
    |       |---webpack.server.dev.js
    |
    |---webpack.client.js
            |---webpack.client.prod.js
            |---webpack.client.dev.js
```

A simple app is included that shows the code sharing. There is a simple
counter implemented on both the server and the client. They both
use `src/models` to maintain the state, and when you run the app
you can see that both are maintained independently.



## Building and Running the application

Installd dependencies

```
$ yarn install
```

### Dev

```
$ yarn dev
```

This will start compilation in `watch` mode. Webpack will
rebuild the server and client every time the server code is changed.

```
$ yarn devserve
```

This will start the server in `watch` mode. It will restart when the code changes.

Both the above commands should be running in different terminals for full
recompile on watch.

### Prod

Prod is much simpler

```
$ yarn prod
$ yarn prodserve
```

There is no recompilation. This just builds and puts the code in `dist/`

### Look at the results

If you are using docker, just browse to ```http://localhost:3000```
The app itself binds to port 80, and docker maps that to 3000 on the
host machine. Without docker, just browse to ```http://localhost```.

## Using the dev Docker container

Start docker container

```
$ ./bin/up
```

Stop the container

```
$ ./bin/down
```

This will stop the container

```
$ ./bin/dev command arg1 arg2 ...
```

This will send the command to the docker container

Then, and here's the cool bit, just preface every command by `./bin/dev'.

For example:
```
./bin/dev yarn serve
```
