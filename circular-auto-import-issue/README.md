## Circular auto import issue

1. open ./src/models/index.ts and read my comments
2. then open ./src/schemas/index.ts and read my comments

To run the project run:

1. `npm watch`
2. `npm start`

You should see the error:

```shell
ReferenceError: Cannot access 'Photo' before initialization
    at /webstorm-issues/circular-auto-import-issue/src/schemas/index.ts:13:5
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)
```