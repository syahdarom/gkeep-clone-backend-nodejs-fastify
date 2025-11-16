# GKeep Clone Back-End Application

## Description

A personal back-end application project for serving a note-taking service. Inspired by Google Keep.

## Technology Stack

- Node.js (a JavaScript runtime): [https://github.com/nodejs/node](https://github.com/nodejs/node)
- TypeScript (it's JavaScript but with type-steroids): [https://github.com/microsoft/TypeScript](https://github.com/microsoft/TypeScript)

## Framework & Library

- Fastify (a Node.js web framework): [https://github.com/fastify/fastify](https://github.com/fastify/fastify)
- Pino (a JavaScript logger): [https://github.com/pinojs/pino](https://github.com/pinojs/pino)
- Vitest (a JavaScript testing framework): [https://github.com/vitest-dev/vitest](https://github.com/vitest-dev/vitest)
- dotenv (an ENVs loader): [https://github.com/motdotla/dotenv](https://github.com/motdotla/dotenv)

## Utility & Tool

- tsx (a TypeScript executor): [https://github.com/privatenumber/tsx](https://github.com/privatenumber/tsx)

## Specifications

- [Node.js](https://github.com/fastify/fastify) with version 24.10.0 LTS or higher
- [pnpm](https://github.com/pnpm/pnpm) with version 10.20.0 or higher

## Configuration

### Environment Variables

All required environment variables are listed in the `.env.example` file. They can be set by creating a `.env` file (if it does not already exist) and setting them within it, or by using system-wide environment variables directly on the host machine.

## API Specification

The API specification is defined in the `apiSpec.yaml` file, and it's stored in the `docs/api-spec` folder.

## Getting Started

### Dependencies Installation

```bash
pnpm install # or pnpm i
```

### Code Quality

```bash
# For linting all source code files
pnpm lint

# For TypeScript type-checking
pnpm check-types

# For formatting all source code files
pnpm format:w
```

### Development

```bash
pnpm dev
```

> Make sure to set all the required environment variables first before running in development mode. See the [environment variables configuration](#environment-variables) section.

## Testing

```bash
pnpm test
```

For running tests with the watch mode:

```bash
pnpm test:w
```

## Building for Production

Create a production build:

```bash
pnpm build
```

After building the application, you can start the built application by running the following command:

```bash
pnpm start
```

> Make sure to set all the required environment variables first before running the built application. See the [environment variables configuration](#environment-variables) section.

## Additional Information

This is an initial development documentation.

## License

[MIT License](./LICENSE.txt) © 2025-present Syahda Romansyah.
