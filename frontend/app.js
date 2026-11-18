const modal = document.getElementById("registerModal");

function openRegister() {
    modal.style.display = "flex";
}

function closeRegister() {
    modal.style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeRegister();
    }
});

document.getElementById("registerForm").addEventListener("submit", async function(event) {

    event.preventDefault();

    const userData = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        role: document.getElementById("role").value,
        location: document.getElementById("location").value,
        skills: document.getElementById("skills").value
    };

    try {
        const response = await fetch("http://127.0.0.1:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Registration failed");
        }

        document.getElementById("message").innerText = result.message;

        document.getElementById("registerForm").reset();

    } catch(error) {

        document.getElementById("message").innerText =
            "Could not connect to server. Please start the backend.";

        console.error(error);
    }
});


function applyJob(jobName) {

    alert("You selected: " + jobName +
          "\nPlease register as a rural youth to apply.");
}