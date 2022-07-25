export default function CallToActionForm(formElement) {
    const email = formElement.querySelector('#cta-form__email');

    formElement.addEventListener('submit', handleSubmit);

    function handleSubmit(e) {
        if (!formElement.checkValidity()) {
            showError();
            e.preventDefault();
        }
    }

    function showError() {
        let message = 'Oops! Please fill in your email address';
        if (email.validity.typeMismatch) {
            message = 'Oops! Please check your email address';
        }
        alert(message);
    }
}