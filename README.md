# openbd-openapi

Unofficial openapi specification for [openBD](https://openbd.jp/).

Currently only the get method in `/get` is implemented.

## Usage

The openapi specification is `./bin/openapi.yaml`.

Client code generation

```bash
# install
git clone https://github.com/mitosagi/openbd-openapi
npm install

npm run gen-list
# Outputs a list of languages/frameworks that are supported by the code generator.
# See https://github.com/OpenAPITools/openapi-generator for details.

npm run gen -- java
# 'java' is an example. You can specify any language/framework in the output list
# The code of the API client is generated in the ./gen folder.
```
