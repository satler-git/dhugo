set shell := ["cmd.exe", "/c"]

run:
    yarn run dev

setup:
    yarn install
    yarn build

format-all:
    yarn biome format --write .

lint-all:
    yarn biome lint .

test:
    yarn vitest

coverage:
    yarn vitest run --coverage

build:
    yarn build
