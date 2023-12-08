import emailjs from '@emailjs/browser';
import { FormEvent, useRef } from 'react';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_nrsaumg', 'template_ersjlfe', form.current, 'lYQO_9AF7RV0XAyiZ')
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div className='contact-form'>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder='name'/>
        <input type="email" name="user_email" placeholder='email'/>
        <input type="ext" name="subject" placeholder='subject'/>
        <textarea name="message" placeholder='message'/>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;

