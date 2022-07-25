export default function ContactForm(formElement) {
    const fullName = formElement.querySelector('#contact-form__full-name');
    const email = formElement.querySelector('#contact-form__email');
    const companyName = formElement.querySelector('#contact-form__company-name');
    const title = formElement.querySelector('#contact-form__title');
    const message = formElement.querySelector('#contact-form__message');
    const formFields = [fullName, email, companyName, title, message];

    formElement.addEventListener('submit', handleSubmit);

    function handleSubmit(e) {
        if (!formElement.checkValidity()) {
            handleError();
            e.preventDefault();
        }
    }

    function handleError() {
        formFields.forEach((field) => {
            if (!field.validity.valid) {
                setErrorMessage(field);
            } else {
                clearErrorMessage(field);
            }
        });
    }

    function setErrorMessage(field) {
        let message = 'This field can\'t be empty';
        if (field === email && field.validity.typeMismatch) {
            message = 'Oops! Please check your email';
        }
        field.parentElement.setAttribute('data-error', message);
    }

    function clearErrorMessage(field) {
        field.parentElement.removeAttribute('data-error');
    }
}