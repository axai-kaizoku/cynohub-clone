export const validateEmail = (email) => {
	let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$$/;
	return emailRegex.test(email);
};

export const validateNumber = (number) => {
	let numRegex = /^[6-9]\d{9}$/;
	return numRegex.test(number);
};
