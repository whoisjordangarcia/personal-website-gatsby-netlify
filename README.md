# arickho.com

[![Greenkeeper badge](https://badges.greenkeeper.io/arickho/arickho.com.svg)](https://greenkeeper.io/)

Source code for my personal website. Contains a copy of my personal resume, and as well some links.

View it here: [https://arickho.com](https://arickho.com)

MIT Licensed.

## Build using

- React
- Redux
- Next.js
- AWS Elasticbeanstalk / S3
- Docker

## Commands

| Command                       | Description                       |
| ----------------------------- | --------------------------------- |
| `npm run dev`                 | Used for development              |
| `npm run start`               | Used for development              |
| `npm run build`               | Builds prod bundle                |
| `npm run interactive-upgrade` | Useful for upgrading packages     |
| `npm run lint:css`            | Uses stylelint                    |
| `npm run export`              | exports next bundle               |
| `npm run docker:build`        | build docker container            |
| `npm run docker:clean`        | removes docker container          |
| `npm run docker:run`          | runs site within docker container |
| `npm run docker:stop`         | stops docker container            |
| `npm run docker:start`        | starts docker container           |
| `npm run docker:logs`         | view docker container logs        |
| `npm run deploy`              | deploys prod build into docker    |
