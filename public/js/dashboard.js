document.addEventListener("DOMContentLoaded", () => {
  const updateReservationButtons = document.querySelectorAll(
    ".update-reservation-btn"
  );
  const deleteReservationButtons = document.querySelectorAll(
    ".delete-reservation-btn"
  );

  updateReservationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const reservationId = button.getAttribute("data-id");
      updateReservation(reservationId);
    });
  });

  deleteReservationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const reservationId = button.getAttribute("data-id");
      deleteReservation(reservationId);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const updateReservationButtons = document.querySelectorAll(
    ".update-reservation-btn"
  );
  const deleteReservationButtons = document.querySelectorAll(
    ".delete-reservation-btn"
  );

  updateReservationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const reservationId = button.getAttribute("data-id");
      updateReservation(reservationId);
    });
  });

  deleteReservationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const reservationId = button.getAttribute("data-id");
      deleteReservation(reservationId);
    });
  });
});

async function updateReservation(reservationId) {
  try {
    // Prepare the updated data for the reservation
    const updatedData = {
      check_in_date: "new-check-in-date",
      check_out_date: "new-check-out-date",
      room_id: "new-room-id",
    };

    // Send a PUT request to the server with the updated data
    const response = await fetch(`/reservations/${reservationId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      // Refresh the page or update the UI to reflect the changes
      location.reload();
    } else {
      console.error(`Error updating reservation: ${response.statusText}`);
    }
  } catch (err) {
    console.error(`Error updating reservation: ${err}`);
  }
}

async function deleteReservation(reservationId) {
  try {
    // Send a DELETE request to the server
    const response = await fetch(`/reservations/${reservationId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      // Refresh the page or update the UI to reflect the changes
      location.reload();
    } else {
      console.error(`Error deleting reservation: ${response.statusText}`);
    }
  } catch (err) {
    console.error(`Error deleting reservation: ${err}`);
  }
}
