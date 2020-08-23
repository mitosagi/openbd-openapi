# openbd-openapi

Unofficial OpenAPI specification for [openBD](https://openbd.jp/).

## Usage

The OpenAPI specification is `./bin/openapi.yaml`.

### Client code generation

Install

```bash
git clone https://github.com/mitosagi/openbd-openapi
npm install
```

Get lang/framework list

```bash
npm run gen-list
```

Output is a list of languages/frameworks that are supported by the code generator. See [GitHub - OpenAPITools/openapi-generator](https://github.com/OpenAPITools/openapi-generator) for details.

Code generation

```bash
npm run gen -- java
```

'java' is an example. You can specify any language/framework in the output list. The code of the API client is generated in the `./gen` folder.

### Update specification

When `partial-api.yaml` or [the official JSON Schema](https://api.openbd.jp/v1/schema?pretty) is changed, it is necessary to regenerate `./bin/openapi.yaml`.

```bash
npm run create
```

## API Specification Overview

All URIs are relative to *https://api.openbd.jp/v1*

| HTTP request      | Description                                |
| ----------------- | ------------------------------------------ |
| **GET** /coverage | Get coverage                               |
| **GET** /get      | Get up to 1,000 bibliographic information  |
| **POST** /get     | Get up to 10,000 bibliographic information |

## License

[MIT License](https://opensource.org/licenses/MIT)
