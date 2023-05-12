# Big Sky Lodges

Big Sky Lodges hotel booking site

<br>

## Website

---

[Click here to visit the deployed site](https://big-sky-lodges.herokuapp.com/)

<br>

## Description

---

This hotel booking app, built with Node.js, Express, Sequelize, MySQL, and session management, is a full-stack application which offers a secure and user-friendly interface for managing hotel reservations across multiple branches. It enables users to securely register, login, book rooms, view their reservations on a personalized dashboard, and cancel bookings as needed. The app uses bcrypt for password encryption, ensuring high security. It employs Sequelize for smooth database interaction, and sessions for maintaining user states, providing a seamless user experience. The system checks for booking conflicts, preventing double reservations and ensuring efficient room management.

<br>

## Table of Contents

---

- [Website](#website)
- [Description](#description)
- [Technology](#technology)
- [User Stories](#user-stories)
- [Demo](#demo)
- [Code Examples](#code-examples)
- [Authors](#authors)
- [Questions](#questions)
- [License](#license)

<br>

## Technology

---

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML     |   [Learn about HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) |
| CSS      |   [Learn about CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) |
| Bootstrap |  [Learn about Bootstrap](https://getbootstrap.com) |
| JavaScript | [Learn about JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
| Node.js  |   [Learn about Node.js](https://nodejs.org/en) |
| Express.js | [Learn about Express.js](https://expressjs.com/) |
| MySQL2   |   [Learn about MySQL2](https://www.npmjs.com/package/mysql2) |
| Sequelize Module                 | [Learn about Sequalize](https://sequelize.org/) |
| Dotenv Module                    | [Learn about Dotenv](https://www.npmjs.com/package/dotenv) |
| Handlebars Module                | [Learn about Handlebars](https://handlebarsjs.com/guide/) |
| Bcrypt Module                    | [Learn about Bcrypt](https://www.npmjs.com/package/bcrypt) |
| Express-handlebars Module        | [Learn about Express-handlebars](https://www.npmjs.com/package/express-handlebars) |
| Express-session                  | [Learn about Express-session](https://www.npmjs.com/package/express-session) |
| Connect-session-sequelize Module | [Learn about Connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) |
| Anime.js  | [Learn about Anime.js](https://animejs.com/documentation/) |
| Day.js  | [Learn about Day.js](https://day.js.org/) |
| Git      |   [Learn about Git](https://git-scm.com/)

<br>

## User Stories


```
1. As a user, 
  I want to choose the branch of the hotel I want to stay in.
  So that, I have the location of my choice.

2. As a user, 
  I want to see the information about each branch.
  So that, I have a better idea about them before choosing.

3. As a user,
  I want to check what types of rooms/suites/lodges each branch has.
  So that, I could reserve the room based on my preference.

4. As a user,
  I want to sign up for an account.
  So that, I can have a reservation set for my stay at the lodge.

5. As a user,
  I want to book a reservation for a room.
  So that, I can ensure that the room I want will be available to me upon arrival.

6. As a user,
  I want to sign in my account, and check on my reservations' info.
  So that, all my information is on my dashboard, and I can cancel my reservation if it is needed.
```

<br>

## Demo

---

![Alt Text](/public/images/Big-Sky-Lodges.gif)

<br>

## Code Examples

---

### Anime.js

```JavaScript
const hotelName = document.querySelector('.hotel-name');
anime({
  targets: hotelName,
  keyframes: [
    {translateY: -20},
    {translateX: 75},
    {translateY: 30},
    {translateX: 0},
    {translateY: 0}
  ],
  duration: 4000,
  easing: 'easeOutElastic(1, .8)',
});
```

### A router to post information

```JavaScript
// Check the availability of a specific room
router.post("/rooms/:id/availability", async (req, res) => {
  try {
    
  const { check_in_date, check_out_date } = req.body;
    // Check for conflicting reservations
    const conflictingReservations = await Reservation.count({
      where: {
        room_id: req.params.id,
        [Op.or]: [
          {
            check_in_date: {
              [Op.between]: [check_in_date, check_out_date],
            },
          },
          {
            check_out_date: {
              [Op.between]: [check_in_date, check_out_date],
            },
          },
        ],
      },
    });
    res.status(200).json(
      conflictingReservations
    );
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
```

### A router to render a page

```JavaScript
// Render room details page
router.get("/rooms/:id", async (req, res) => {
  try {
    const roomData = await Room.findByPk(req.params.id);

    if (!roomData) {
      res.status(404).json({ message: "No room found with that id!" });
      return;
    }

    const room = roomData.get({ plain: true });

    res.render("roomDetails", {
      room,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
```

### Using the Session Module

```JavaScript
// signup a new user
router.post("/users/signup", async (req, res) => {
  console.log("Signup route called");
  try {
    console.log("Request body:", req.body);
    const signupUser = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = signupUser.id;
      req.session.username = signupUser.username;
      req.session.loggedIn = true;

      res.status(200).json(signupUser);
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Sign-up failed.", error: err.message });
  }
});
```
<br>

<br>

## Authors

---
Bahareh hosseini

- GitHub Page: [https://github.com/Bhmerir](https://github.com/Bhmerir)

Eugene Ogbeide

- GitHub Page: [https://github.com/eogbeide424](https://github.com/eogbeide424)

Matthew Gibson

- GitHub Page: [https://github.com/ohSweetWampum](https://github.com/ohSweetWampum)

<br>

## Questions

---

If you have any questions about this application, please contact us at: 
- Bahareh: [bhmer.ir@gmail.com](mailto:bhmer.ir@gmail.com)
- Eugene:  [eogbeide2@gmail.com](eogbeide2@gmail.com)
- Matthew: [mtgibson888@gmail.com](mailto:mtgibson888@gmail.com)

## License

---

This application is covered by the MIT license

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) 2023 Bhmerir; eogbeide424; ohSweetWampum

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


---

© 2023 Confidential and Proprietary. All Rights Reserved.
