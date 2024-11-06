// /netlify/functions/submit-contact.js

const fetch = require("node-fetch");

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    // Validate form data (e.g., checking email, required fields)
    if (!data.email || !data["company-name"] || !data["contact-person"] || !data.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "All fields are required" }),
      };
    }

    // Send email or save to database (this example just logs it)
    console.log("Received data:", data);

    // Optionally, you can use a service like SendGrid here to send an email

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Form submitted successfully!" }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server error. Please try again later." }),
    };
  }
};
