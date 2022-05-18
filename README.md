# App Description

- An application that interacts with JSON data of a Youtube listening history.  In this application, users can view the media of the top 10 songs that were listened to according to the input data.  The output is a Responsive UI that folks can enjoy! :)

## Table of Contents:
* [Deployment](#Deployment)
* [Usage Instructions](#usage-instructions)
* [Cloning Instructions](#cloning-instructions)
* [Tech Stack](#tech-stack)
* [Dependencies](#dependencies)
* [Limitations](#limitations--ideas-for-improvement)
* [TroubleShooting](#troubleshooting--bugs)
* [Scripts](#getting-started-with-create-react-app)

## Deployment:

- Via Vercel @ { https://youtube-top10.vercel.app/ }

## Usage Instructions:
    UI:
        1) Navigate the page by scrolling
        2) Click on a video card to watch!

    Command Line Outputs:
        1) `cd` into the project repo and run `node extractTopTen.js` to get a report of
the top ten songs from the included `data.js` file sorted most to least listened

## Cloning Instructions:

- 1) In the terminal for the project,  `npm i` to install node modules

- NOTES:

    - N/A

## Tech Stack:

- Node.js, JS, React.js, HTML, SCSS

## Dependencies:

### `npm install axios` { https://www.npmjs.com/package/axios } 
    - Promise based HTTP client for the browser and node.js

### `npm i dotenv` => To load environment variables from `.env` file to `process.env` object

### `npm i node-sass` => CSS pre-processor

### `npm i react-intersection-observer`

- React component for animating vertical scrolling
- (https://www.npmjs.com/package/react-scroll)
- (https://react-intersection-observer.vercel.app/?path=/docs/useinview-hook--trigger-once)

### `npm install react-youtube`
- Simple React component acting as a thin layer over the YouTube IFrame Player API
- { https://www.npmjs.com/package/react-youtube }

### `npm install get-youtube-id`
- Parse a youtube url returning the video ID.
- { https://www.npmjs.com/package/get-youtube-id }

Reference: https://www.freecodecamp.org/news/how-to-use-node-environment-variables-with-a-dotenv-file-for-node-js-and-npm/

- react, react-dom, react-scripts, sass, node-sass, cors

## Limitations & Ideas For Improvement:

- As of 05/13/22:

    - App is MOSTLY responsive; should make fully responsive
    - Make the app more specific to a single purpose. See the OpenAI Examples and prompt design docs for inspiration.


## TroubleShooting & Bugs:
    - **NOTE:
    - **NOTE: 

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

