import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const updateFormData = throttle(() => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

const populateFormFields = () => {
  const savedFormData = localStorage.getItem('feedback-form-state');
  if (savedFormData) {
    const formData = JSON.parse(savedFormData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
};

const submitForm = event => {
  event.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log('Form Data:', formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
};

form.addEventListener('input', updateFormData);
window.addEventListener('DOMContentLoaded', populateFormFields);
form.addEventListener('submit', submitForm);
