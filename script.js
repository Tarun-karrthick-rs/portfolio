
emailjs.init("NcFefxl_dNwX3MzwN");

function sendEmail(e) {
  e.preventDefault();

  const form = document.getElementById("contactForm");
  const responseMessage = document.getElementById("responseMessage");

  emailjs.sendForm('service_znp2qql', 'template_9kgezvu', form)
    .then(() => {
      responseMessage.textContent = "Your message was sent successfully!";
      responseMessage.style.color = 'green';
    }, (error) => {
      responseMessage.textContent = "Failed to send message: " + error.text;
      responseMessage.style.color = 'red';
    });
}
