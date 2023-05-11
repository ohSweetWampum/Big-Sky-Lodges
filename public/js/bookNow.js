document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("booking-form");
  const availableRoomsDiv = document.getElementById("available-rooms");

  bookingForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const checkIn = document.getElementById("check-in").value;
    const checkOut = document.getElementById("check-out").value;
    const roomType = document.getElementById("room-type").value;
    const numGuests = document.getElementById("num-guests").value;
    const branch = document.getElementById("branch").value;

    const requestData = {
      checkIn,
      checkOut,
      roomType,
      numGuests,
      branch,
    };

    try {
      const response = await fetch("/api/bookings/check-availability", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const availableRooms = await response.json();
        displayAvailableRooms(availableRooms);
      } else {
        throw new Error("Error checking availability");
      }
    } catch (error) {
      console.error(error);
      availableRoomsDiv.innerHTML =
        "<p>Error checking room availability. Please try again.</p>";
    }
  });

  function displayAvailableRooms(rooms) {
    if (rooms.length === 0) {
      availableRoomsDiv.innerHTML =
        "<p>No rooms available for the selected dates and criteria.</p>";
      return;
    }

    const roomElements = rooms.map((room) => {
      return `
          <div class="room">
            <h3>${room.name}</h3>
            <p>Price: $${room.price}</p>
            <p>Capacity: ${room.capacity}</p>
            <button data-room-id="${room.id}" class="book-room-btn">Book Now</button>
          </div>
        `;
    });

    availableRoomsDiv.innerHTML = roomElements.join("");
    attachBookNowEventListeners();
  }

  function attachBookNowEventListeners() {
    const bookRoomButtons = document.querySelectorAll(".book-room-btn");
    bookRoomButtons.forEach((button) => {
      button.addEventListener("click", async (e) => {
        const roomId = e.target.dataset.roomId;

        try {
          const response = await fetch(`/api/bookings/book-room/${roomId}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              checkIn: document.getElementById("check-in").value,
              checkOut: document.getElementById("check-out").value,
            }),
          });

          if (response.ok) {
            alert("Room booked successfully!");
          } else {
            throw new Error("Error booking room");
          }
        } catch (error) {
          console.error(error);
          alert("Error booking room. Please try again.");
        }
      });
    });
  }
});
