# Swagger UI Dist

Swagger UI Dist is a dependency-free distribution of the static assets built by [Swagger UI](https://github.com/swagger-api/swagger-ui) designed to be easily mounted as a static asset path by node projects. The primary motivation is to make it easy to leverage Swagger UI without pulling in its dependencies.

## Usage (Koa example)

```
var koa = require("koa");
var mount = require("koa-mount");
var serve = require("koa-static");

var swaggerUIDist = require("swagger-ui-dist");

var app = koa();
app.use(mount("swagger-docs", serve(swaggerUIDist.dist)));
```
