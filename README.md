# Big-Sky-Lodges

Big Sky Lodges hotel booking site

## Website

[Click here to visit the deployed site](https://big-sky-lodges.herokuapp.com/)

## Description

This Note Taker App is a web application designed for creating, keeping track of, and deleting notes. It was built using Node.js and Express.js and Heroku, it also employs file-based storage (JSON). Key features include creating notes, viewing a list of saved notes, and deleting notes. Overall, this app offers a reliable note-taking solution, easily accessible and manageable, with a foundation suitable for future expansions and features such as making edits to existing notes.

## Installation

You need to have Node.js and Express.js installed. In your terminal, navigate to the folder that contains the server.js file and enter "npm start" in the command line.

## Table of Contents

- [Website](#website)
- [Description](#description)
- [Installation](#installation)
- [Technology](#technology)
- [Users-Stories](#user-stories)
- [Usage](#usage)
- [Demo](#demo)
- [Code](#code)
- [Learning](#learning)
- [Author](#author)
- [Credits](#credits)
- [Contributing](#Contributing)
- [Questions](#questions)
- [License](#license)

## Technology

- Console.table
  [Learn about Console.table](https://www.npmjs.com/package/console.table)

- Node.js
  [Learn about Node.js](https://nodejs.org/en)

- MySQL2
  [Learn about MySQL2](https://www.npmjs.com/package/mysql2)
- MYSQL
  [Learn about MySQL](https://dev.mysql.com/)

- Inquirer
  [Learn about Inquirer](https://www.npmjs.com/package/inquirer)

- JavaScript
  [Learn about JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

- Git
  [Learn about Git](https://git-scm.com/)

# User-Stories

- As a waste-conscious person , I want to filter recipes based on ingredients I already have
- As a busy person , I want to filter recipes based on prep time
- As someone who enjoys alcohol, I’d like to receive beverage suggestions
- As someone who has a food intolerance, I want to filter out recipes that would cause me problems
- As someone you is a foodie, I want to filter for recipes based on cuisine type
- As someone who is on a specific diet, I want to be able to search recipes based on diet type
- As someone who is cost-conscious, I want to sort recipes from least to most expensive

## Usage

1. Click the "Get Started" button
2. Enter the notes title and then text contents, click the save icon in the upper right.
3. Click the trash icon on an existing note to delete it

# Demo

![Alt Text](/images/2023-04-28%2020.02.35.gif)

## Code

I wanted to highlight this code snippet because it shows a helper function in action, and helper functions can ber very useful. Helper functions offer many benefits, such as improved code reusability, organization, error handling, and testing. By encapsulating a file reading logic in a helper function, the same code can be reused across multiple routes. This separation duties simplifies debugging and maintenance. Centralizing file reading logic enables consistent error handling, and any changes made will affect all parts of the application using the helper function. Here I have an example of using a helper function ( readFromFile) inside the delete note route, but I use this same function else wher in the code.

```JavaScript
// DELETE Route for a specific note
notes.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;
  console.log(noteId);

  // Use the helper function to read from the file
  readFromFile(dbPath)
    .then((data) => JSON.parse(data))
    .then((json) => {
      // Make a new array of all notes except the one with the ID provided in the URL
      const result = json.filter((note) => note.id !== noteId);

      // Save that array to the filesystem using the helper function
      writeToFile(dbPath, result);

      // Respond to the DELETE request
      res.json(`Item ${noteId} has been deleted `);
    });
});

```

## Learning

- Learned how to create an app on Heroku
- Learned how to utilize route specific files and helper function files
- learned how to use Express.js and Node.js
- Learned how use middleware and port listeners
- Furthered knowledge of destructuring objects

## Author

Matthew Gibson

- [Portfolio](https://github.com/ohSweetWampum)
- [LinkedIn](https://www.linkedin.com/in/matthew-gibson-6b9b12237/)
- [Github](https://github.com/ohSweetWampum)

## Credits

[www.geeksforgeeks.org](https://www.geeksforgeeks.org/what-are-the-helper-functions/)
(Helper Functions)

[www.itsolutionstuff.com](https://www.itsolutionstuff.com/post/how-to-create-separate-routes-file-in-node-jsexample.html)
(route files)

[expressjs.com](https://expressjs.com/en/guide/using-middleware.html)
(Middleware)

## Contributing

If you would like to contribute, please contact me at [mtgibson888@gmail.com](mailto:mtgibson888@gmail.com)

## Questions

If you have any questions about this application, please contact me at [mtgibson888@gmail.com](mailto:mtgibson888@gmail.com) or check out my [GitHub Profile](https://github.com/ohSweetWampum)

## License

This application is covered by the MIT license

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

```

```
