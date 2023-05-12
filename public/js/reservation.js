const check_in = document.querySelector("#check-in");
const check_out = document.querySelector("#check-out");
const branch = document.querySelector("#branch");
const room_id = document.querySelector("#room-type");
const num_guests = document.querySelector("#num-guests");
const availabilityResponse = document.querySelector("#availability-response");
const check_available = document.querySelector("#check-avail");
const bookNow = document.querySelector("#book-now");

// This gets the initial value
let selectedBranchId = branch.value;
// This gets the value of branch when it changes
branch.addEventListener("change",async function() {
    selectedBranchId = branch.value;
    const response = await fetch(`/branches/${selectedBranchId}/rooms`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        const roomData = await response.json();

        for(let i=0; i<roomData.length; i++){
            console.log(roomData[i].room_type)
            room_id[i].value = roomData[i].id;
        }
    } else {
        alert("Error in connecting to the database");
    }
});

//---------This part check the availibility of the room 
function checkAvailablity(event){
  event.preventDefault();
  if(check_in.value == ""){
    alert("You have to enter check_in date!");
    return;
  }
  if(check_out.value == ""){
    alert("You have to enter check_out date!");
    return;
  }
  if (check_out.value < check_in.value){
    alert("Check_out date cannot be before check_in date!");
    return;
  }
  const check_in_value = dayjs(check_in.value).format('YYYY-MM-DD');
  const check_out_value = dayjs(check_out.value).format('YYYY-MM-DD');
  const branch_value = branch.value;
  const room_id_value = parseInt(room_id.value);
  console.log(room_id_value);
  const num_guests_value = num_guests.value;
  console.log(check_in_value, check_out_value)

    if(check_in_value &&
       check_out_value &&
       branch_value &&
       room_id_value &&
       num_guests_value){
            fetch(`/api/rooms/${room_id_value}/availability`, {
                method: "Post",
                body: JSON.stringify({
                    check_in_date: check_in_value.toString(),
                    check_out_date: check_out_value.toString()
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response)=>response.json())
            .then((responseData)=>{
                console.log(responseData
                    )
                if(responseData == 0){
                    availabilityResponse.textContent= "Room is Available.";
                    availabilityResponse.setAttribute("style", "color:green;");
                    bookNow.disabled = false;
                }else
                {
                    availabilityResponse.textContent= "Sorry!Room is not Available at this interval.";
                    availabilityResponse.setAttribute("style", "color:red;");
                    bookNow.disabled = true;
                }
            })
            .catch((err)=>{
                alert("Error to connect to server")
            })
    }
};
check_available.addEventListener("click", checkAvailablity);
//---------------------------------------------------------this 
const reservationSubmission = async (event) => {
  event.preventDefault();
  if(check_in.value == ""){
    alert("You have to enter check_in date!");
    return;
  }
  if(check_out.value == ""){
    alert("You have to enter check_out date!");
    return;
  }
  if (check_out.value < check_in.value){
    alert("Check_out date cannot be before check_in date!");
    return;
  }
  const user_id = bookNow.getAttribute("data-userId");
  const check_in_value = dayjs(check_in.value).format('YYYY-MM-DD');
  const check_out_value = dayjs(check_out.value).format('YYYY-MM-DD');
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
    const response = await fetch(`/api/users/${user_id}/reservations`, {
      method: "Post",
      body: JSON.stringify({
        user_id,
        check_in_date: check_in_value,
        check_out_date: check_out_value,
        num_guests: num_guests_value,
        room_id: room_id_value,
        user_id: user_id
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);

    if (response.ok) {
        alert("Congratulations! Room is reserved.")
        document.location.replace("/dashboard");
    } else {
      alert("The room is already reserved during the requested period");
    }
  }
};
bookNow.addEventListener("click", reservationSubmission);

