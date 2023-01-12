# asset-poeticmaps-frontend-poc

Frontend POC for the poetic maps project. Purpose is to be utilized by an IFrame within Webflow site, using route to provide the corresponding lambda with collectionIds, and finally rendering data provided by the lambda.

## Setup

### Prerequisites

- NVM or NodeJS installed
- Yarn installed

### Installation & Starting Development Server

Run

`yarn`

then

`yarn dev`

## Caveats

This application uses eslint, prettier, and husky to lint staged files before commit. Files will need to pass linting before being able to be commited.

To avoid issues ensure that prettier is set as the default formatter in your code editor for this directory.

## Deployment

Push branch to origin repository and open a Pull Request to main branch.
