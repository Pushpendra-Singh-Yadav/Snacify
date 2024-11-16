document.addEventListener("DOMContentLoaded", () => {
    // Select the form using its ID
    const form = document.getElementById("contact-form");

    // Add an event listener to handle form submission
    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevents the default form submission (reloading the page)
        
        // Collect form data from each input field
        const formData = {
            "company-name": document.getElementById("company-name").value,
            "contact-person": document.getElementById("contact-person").value,
            "email": document.getElementById("email").value,
            "phone": document.getElementById("phone").value,
            "message": document.getElementById("message").value,
        };

        try {
            // Send the form data to the Netlify function endpoint
            const response = await fetch("/.netlify/functions/submit-contact", {
                method: "POST", // Specify HTTP method as POST
                headers: {
                    "Content-Type": "application/json", // Specify content type as JSON
                },
                body: JSON.stringify(formData), // Convert formData object to JSON string
            });

            // Handle the response from the server
            const result = await response.json();
            if (response.ok) {
                alert(result.message); // Show success message from the server
                form.reset(); // Clear the form fields
            } else {
                alert("Error: " + result.message); // Show error message
            }
        } catch (error) {
            alert("There was an error submitting the form. Please try again."); // Show error message
            console.error("Submission error:", error);
        }
    });
});