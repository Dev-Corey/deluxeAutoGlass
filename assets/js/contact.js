const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const phoneInput = document.querySelector("#user_phone");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

const publicKey = "dFqKj0Bd6U9xTr5-2";
const serviceID = "service_gfi9boj";
const templateID = "template_cgnlwoc";

emailjs.init(publicKey);

contactForm.addEventListener("submit", (e) => {
	e.preventDefault();
	submitBtn.innerText = "One Moment...";

	const inputFields = {
		name: nameInput.value,
		phone: phoneInput.value,
		email: emailInput.value,
		message: messageInput.value,
	};

	emailjs.send(serviceID, templateID, inputFields).then(
		() => {
			submitBtn.innerText = "Message Sent!";
			nameInput.value = "";
			phoneInput.value = "";
			emailInput.value = "";
			messageInput.value = "";
		},
		(error) => {
			console.log(error);
			submitBtn.innerText = "Something went wrong";
		}
	);
});
