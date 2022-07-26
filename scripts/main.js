import PrimaryHeader from './primary-header.js';
import ContactForm from './contact-form.js';

// Init Header Component 
const headerElement = document.querySelector('.js-primary-header');
new PrimaryHeader(headerElement);

// Init Contact Form componenet
const contactFormElement = document.querySelector('.js-contact-form');
if (contactFormElement != null && contactFormElement != undefined)
    new ContactForm(contactFormElement);