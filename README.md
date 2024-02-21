# SESSION-1 :How to Create a Backend:

## Step 1:
- **Command:** `npm init -y`
- **Description:** When you run `npm init -y`, it creates a `package.json` file in the current directory with default values for the project name, version, description, entry point, test command, Git repository, keywords, author, and license.

## Step 2:
- **Command:** `npm install express`
- **Description:** The command `npm install express` is used to install the Express.js framework for building web applications with Node.js.

## Step 3:
- **Action:** Add Script
- **Description:** In `package.json`, add a script `start: node index.js`. This is to execute the `index.js` using command `npm start` or `npm run start`.

## Step 4:
- **Command:** `npm install nodemon --save-dev`
- **Description:** `nodemon` is a utility that monitors for changes in files in a Node.js application and automatically restarts the server when changes are detected. So, install it as a devDependency.

## Step 5:
- **Action:** Create index.js
- **Description:** Create a file `index.js`, create a server through importing `http` and then `.createServer` function to create a function, use `.listen` to listen to the Port. Add in the script as dev: `nodemon index.js`.

## Step 6:
- **Action:** Handle Requests and Responses
- **Description:** Add request, response in the `.createServer` function to request or to give a response.
