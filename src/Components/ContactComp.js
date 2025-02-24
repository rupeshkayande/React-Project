import React from 'react';

const ContactComp = () => {
  return (
    <div>
      

      <h2>Our Address</h2>
      <p> Cuffe Parade,<br /> BKC Mumbai, India</p>

      <h2>Phone</h2>
      <p>+91 7517962233</p>

      <h2>Email</h2>
      <p>jewel@godaddy.com</p>

      <h2>Send Us a Message</h2>
      <form action="submit_form.php" method="POST">
        <label htmlFor="name">Your Name:</label><br />
        <input type="text" id="name" name="name" required /><br /><br />

        <label htmlFor="email">Your Email:</label><br />
        <input type="email" id="email" name="email" required /><br /><br />

        <label htmlFor="message">Your Message:</label><br />
        <textarea id="message" name="message" rows="5" required></textarea><br /><br />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactComp;
