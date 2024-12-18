import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Swal from "sweetalert2";
import "./Contact.css";

const Contact = ({ setShowContact }) => {
  const [result, setResult] = useState(""); // For showing status messages

  const notShowForm = () => {
    setShowContact(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setResult("Sending..."); // Set initial status

    // Collect form data and convert it to a 2D array
    const formData = [
      // Header row (optional, can be omitted)
      [
        event.target.name.value,
        event.target.email.value,
        event.target.phone.value,
        event.target.message.value,
      ],
    ];

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/amit21/google_sheets/OHhNIfWSumGfidtD?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Sending JSON data
          },
          body: JSON.stringify(formData), // Send the 2D array
        }
      );

      const data = await response.json(); // Parse the response
      console.log(data, "Response Data");

      if (response.ok) {
        Swal.fire({
          title: "Good job!",
          text: "Message sent successfully.",
          icon: "success",
        });
        setResult(""); // Reset result message
        setShowContact(false); // Close the form
      } else {
        Swal.fire({
          title: "Error!",
          text: data.info || "Failed to send message.",
          icon: "error",
        });
        setResult(data.info || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      Swal.fire({
        title: "Error!",
        text: "An unexpected error occurred. Please try again.",
        icon: "error",
      });
      setResult("Failed to send message.");
    }
  };

  return (
    <div className="Email-Form">
      <CloseIcon className="close-icon" onClick={notShowForm} />
      <h1>Contact Form</h1>
      <form className="Form" onSubmit={onSubmit}>
        <input name="name" type="text" placeholder="Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="phone" type="tel" placeholder="Mobile" required />
        <input name="message"type="text" placeholder="Message" required></input>
        <button type="submit">Continue</button>
      </form>
      {result && <p className="status-message">{result}</p>} {/* Display result messages */}
    </div>
  );
};

export default Contact;
