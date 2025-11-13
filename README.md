# Nx with Fastify API and React UI via ts-rest

An [Nx](https://nx.dev) monorepo featuring a [Fastify](https://fastify.dev/) back-end API and [React](https://react.dev/) front-end that exchange data via [ts-rest](https://ts-rest.com/).

API documentation based on the ts-rest contract is generated via Swagger/OpenAPI.

### About this Repo

The code in this repo can serve as a reference boilerplate/template for new full-stack projects.

### Development Setup

The project assumes a linux/unix environment (Windows users can use WSL2) that includes pnpm and a recent version of NodeJS.

Copy `.env.sample` to create `.env` for each of: `apps/fastify-api` and `apps/react-ui`.

### Development Workflow

Run `pnpm install` to install dependencies.

Run `pnpm dev` to start the development server for both the API and UI.

The API runs on port 3001 and the UI runs on port 3000.

A proxy configuration in `apps/react-ui/proxy.conf.json` will proxy requests to http://127.0.0.1:3001/api to the back-end API.

## Build

Run `pnpm build:all` to build the API, UI, and the shared package containing the contract.

## Using Nx to Run Tasks

To execute tasks with Nx use the following syntax:

```
pnpm nx <target> <project> <...options>
```

You can also run multiple targets:

```
pnpm nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
pnpm nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`.

Check out the [Nx Console extensions](https://nx.dev/nx-console) for VSCode extensions and other tools for working with Nx.
