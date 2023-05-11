<<<<<<< HEAD
const check_in = document.querySelector('#check-in').value;
const check_out = document.querySelector('#check-out').value;
const branch = document.querySelector('#branch').value;
const room_id = document.querySelecto('#room-type').value;
const num_guests = document.querySelector('#num-guest').value;
const check_available= document.querySelector('#check-avail').value;
const bookNow = document.querySelector('#book-now');


const reservationSubmission = async ()=> {
    preventDefault();

    if(check_in && check_out && branch && room_id && num_guests ) {
        const response = await fetch("api/users/:user_id/reservations",{
        method: 'Post',
        body: JSON.stringify({check_in, check_out,room_id,num_guests}),
        headers: {
            'Content-Type': 'application/json',
        },
    });
   console.log(response);
    

    if (response.ok) {
        document.location.replace('/dashboard');
    } else{
        alert('Failed to process request');
    } 
}
};
bookNow.addEventListener('click',reservationSubmission);
=======
const check_in = document.querySelector("#check-in");
const check_out = document.querySelector("#check-out");
const branch = document.querySelector("#branch");
const room_id = document.querySelector("#room-type");
const num_guests = document.querySelector("#num-guests");

const check_available = document.querySelector("#check-avail");
const bookNow = document.querySelector("#book-now");

const reservationSubmission = async (event) => {
  event.preventDefault();
  const user_id = sessionStorage.getItem("user_id");
  const check_in_value = check_in.value;
  const check_out_value = check_out.value;
  const branch_value = branch.value;
  const room_id_value = room_id.value;
  const num_guests_value = num_guests.value;

  if (
    check_in_value &&
    check_out_value &&
    branch_value &&
    room_id_value &&
    num_guests_value
  ) {
    const response = await fetch(`api/users/${user_id}/reservations`, {
      method: "Post",
      body: JSON.stringify({
        user_id,
        check_in: check_in_value,
        check_out: check_out_value,
        room_id: room_id_value,
        branch: branch_value,
        num_guests: num_guests_value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to process request");
    }
  }
};
bookNow.addEventListener("click", reservationSubmission);

// const check_in = document.querySelector("#check-in").value;
// const check_out = document.querySelector("#check-out").value;
// const branch = document.querySelector("#branch").value;
// const room_id = document.querySelecto("#room-type").value;
// const num_guests = document.querySelector("#num-guest").value;
// const check_available = document.querySelector("#check-avail").value;
// const bookNow = document.querySelector("#book-now");

// const reservationSubmission = async () => {
//   preventDefault();

//   if (check_in && check_out && branch && room_id && num_guests) {
//     const response = await fetch("api/users/:user_id/reservations", {
//       method: "Post",
//       body: JSON.stringify({
//         user_id,
//         check_in,
//         check_out,
//         room_id,
//         branch,
//         num_guests,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     console.log(response);

//     if (response.ok) {
//       document.location.replace("/dashboard");
//     } else {
//       alert("Failed to process request");
//     }
//   }
// };
// bookNow.addEventListener("click", reservationSubmission);
>>>>>>> main
