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

build:
    yarn build
