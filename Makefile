all:
	npm install --global pnpm
	pnpm install
	pnpm build:all
	pnpm docker:up

build:
	pnpm build:all

dev:
	pnpm dev
