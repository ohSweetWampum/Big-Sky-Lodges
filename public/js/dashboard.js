const deleteBtns = document.querySelectorAll(".delete-reservation-btn");


const deleteReservationHandler = async (event)=>{
  const element = event.target;
  const reservationId = element.getAttribute('data-id');
  console.log(reservationId)
  try {
    const response = await fetch(`/api/reservations/${reservationId}`, {
      method: "DELETE",
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      location.reload();
    } else {
      console.error(`Error deleting reservation: ${response.statusText}`);
    }
  } catch (err) {
    console.error(`Error deleting reservation: ${err}`);
  }

}
for (let btn of deleteBtns) {
  btn.addEventListener("click", deleteReservationHandler);
}
