function sendEmail() {
	Email.send({
		Host: "smtp.gmail.com",
		Username: "username",
		Password: "password",
		To: "them@website.com",
		From: document.getElementById("#email"),
		Subject: "New Website Inquiry",
		Body: "And this is the body",
	}).then((message) => alert(message));
}
