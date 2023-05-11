const check_in = document.querySelector('#check-in').value;
const check_out = document.querySelector('#check-out').value;
const branch = document.querySelector('#branch').value;
const roomType = document.querySelecto('#room-type').value;
const numGuest = document.querySelector('#num-guest').value;
const check_available= document.querySelector('#check-avail').value;


async function reservationSubmission(event) {
    event.preventDefault();

    if(check_in && check_out && branch && roomType && numGuest ) {
        const response = fetch('api/booknow',{
        method: 'Post',
        body: JSON.stringify({check_in, check_out,branch,roomType,numGuest}),
        headers: {
            'Content-Type': 'application/json',
        },
    });
   
    

    if (response.ok) {
        document.location.replace('/dashboard');
    } else{
        alert('Failed to process request');
    } 
}
};

document
.querySelector('#book-now').addEventListener('click',reservationSubmission);