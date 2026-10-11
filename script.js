// const form = document.getElementById("ticketForm");

// form.addEventListener("submit", async function (e) {
//     e.preventDefault();

//     const data = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         subject: document.getElementById("subject").value,
//         category: document.getElementById("category").value,
//         priority: document.getElementById("priority").value,
//         description: document.getElementById("description").value
//     };

//     const response = await fetch("http://localhost:3000/tickets", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     });

//     const result = await response.json();

//     alert(result.message);

//     form.reset();
// }); 


// document.getElementById("ticketForm").addEventListener("submit", async function(e) {
//     e.preventDefault();

//     const data = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         subject: document.getElementById("subject").value,
//         category: document.getElementById("category").value,
//         priority: document.getElementById("priority").value,
//         description: document.getElementById("description").value
//     };

//     const response = await fetch("http://localhost:3000/tickets", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     });

//     const result = await response.json();

//     alert(result.message);
// }); 


const form = document.getElementById("ticketForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        category: document.getElementById("category").value,
        priority: document.getElementById("priority").value,
        description: document.getElementById("description").value
    };

    try {
        const response = await fetch("http://localhost:3000/tickets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        alert(result.message);

        form.reset();

    } catch (error) {
        console.error(error);
        alert("Error submitting ticket");
    }
});