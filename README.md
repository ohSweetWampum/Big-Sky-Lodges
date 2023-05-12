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
- [Frontend](#frontend)
- [Page Responsiveness](#page-responsiveness)
- [Learning](#learning)
- [Authors](#authors)
- [Questions](#questions)
- [License](#license)

<br>

## Technology

---

| Technology Used                  |                                           Resource URL                                           |
| -------------------------------- | :----------------------------------------------------------------------------------------------: |
| HTML                             |              [Learn about HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)               |
| CSS                              |               [Learn about CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)                |
| Bootstrap                        |                        [Learn about Bootstrap](https://getbootstrap.com)                         |
| JavaScript                       |        [Learn about JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)         |
| Node.js                          |                           [Learn about Node.js](https://nodejs.org/en)                           |
| Express.js                       |                         [Learn about Express.js](https://expressjs.com/)                         |
| MySQL2                           |                    [Learn about MySQL2](https://www.npmjs.com/package/mysql2)                    |
| Sequelize Module                 |                         [Learn about Sequalize](https://sequelize.org/)                          |
| Dotenv Module                    |                    [Learn about Dotenv](https://www.npmjs.com/package/dotenv)                    |
| Handlebars Module                |                    [Learn about Handlebars](https://handlebarsjs.com/guide/)                     |
| Bcrypt Module                    |                    [Learn about Bcrypt](https://www.npmjs.com/package/bcrypt)                    |
| Express-handlebars Module        |        [Learn about Express-handlebars](https://www.npmjs.com/package/express-handlebars)        |
| Express-session                  |           [Learn about Express-session](https://www.npmjs.com/package/express-session)           |
| Connect-session-sequelize Module | [Learn about Connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) |
| Anime.js                         |                    [Learn about Anime.js](https://animejs.com/documentation/)                    |
| Day.js                           |                            [Learn about Day.js](https://day.js.org/)                             |
| Git                              |                             [Learn about Git](https://git-scm.com/)                              |

<br>

## User Stories

```
*All user stories are demonstrated in the gif below*


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

### Relationships Between our Models

- As you can see our user stories informed the relationships between the models

```JavaScript
//*********** The relation of User to Reservation is One-To-Many ****************
//Each user can have many reservations
User.hasMany(Reservation, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
//Each reservation belongs to one user
Reservation.belongsTo(User, {
  foreignKey: "user_id",
});

//*********** The relation of Room to Reservation is One-To-Many ****************
//Each room can have many reservations(in different date)
Room.hasMany(Reservation, {
  foreignKey: "room_id",
  onDelete: "CASCADE",
});
//Each reservation belongs to only one room
Reservation.belongsTo(Room, {
  foreignKey: "room_id",
});

//*********** The relation of Branch to Room is One-To-Many **********************
//Each branch can have many rooms
Branch.hasMany(Room, {
  foreignKey: "branch_id",
  onDelete: "CASCADE",
});
//Each room belongs to one branch
Room.belongsTo(Branch, {
  foreignKey: "branch_id",
});

```

<br>

## Frontend

---

We used bootstrap for the page layout. We added custom CSS as needed with our style.CSS. We utilized handlebars to dynamically generate HTML content with specific data associated with each user. We had a main.handlebars page which consisted of a navigation bar and inside this main.handlebars was nested every other handlebars file, so that the navigation bar was always present no matter which page of the app you visited. Below is our dashboard.handlebars file, it has placeholders for data that will be inserted inside the {{}}.

```JavaScript

<div class="dashboard-body is-flex is-flex-wrap-wrap is-justify-content-center">

    <h2 class="dashboard">Dashboard</h2>

    <div class="header-card custom-header-card">
        <h1>Welcome {{username}}</h1>
        <h4 id="booking-title">Recent Bookings</h4>
        <div class="row justify-content-center"> <div class="col-auto"></div>

        <div class="reservation-list">
            <div class="list1">
                <table class="table">
                    <thead>
                        <th>Reservation Id</th>
                        <th>Room type</th>
                        <th>Check-in Date</th>
                        <th>Check-out Date</th>
                        <th>Action</th>
                    </thead>
                    <tbody id="reservationDisplay">
                    {{#each reservations}}
                    <tr>
                        <td>{{this.id}}</td>
                        <td>{{this.room.room_type}}</td>
                        <td>{{this.check_in_date}} </td>
                        <td>{{this.check_out_date}} </td>
                        <td><button class="delete-btn delete-reservation-btn" data-id="{{this.id}}">delete</button></td>
                    </tr>
                    {{/each}}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  </div>
</div>

```

<br>

## Page Responsiveness

---

![Alt Text](/public/images/ezgif.com-gif-maker.gif)

<br>

## Learning

---

1. User Authetication to verify user identity
2. Encrypting password by using Bcrypt to ensure security
3. Further knowledge of restful routes
4. Handlebars
5. Sequelize OpTypes
6. How to implement models and make associations between them
7. How to utilized JAWSDB when deploying to Heroku
8. How to utilize session storage

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
- Eugene: [eogbeide2@gmail.com](eogbeide2@gmail.com)
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
