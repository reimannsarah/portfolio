import emailjs from '@emailjs/browser';
import { FormEvent, useRef, useState } from 'react';
// import imageUrls from '../../assets/imgs/imageURLs';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string>('');

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_nrsaumg', 'template_ersjlfe', form.current, 'lYQO_9AF7RV0XAyiZ')
        .then((result) => {
          console.log(result.text);
          setMessage('Message sent!');
          setTimeout(() => {
            form.current?.reset();
            setMessage('');
          }, 3000);
        })
        .catch((error) => {
          console.log(error.text);
          setMessage('Message failed to send. Pleas try again.');
        });
    }
  };

  return (
    <div className='contact-form'>
    {message ? (
      <h1>{message}</h1>
    ) : (
      <>
        <h1>Send me a message</h1>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder='name'/>
          <input type="email" name="user_email" placeholder='email'/>
          <input type="ext" name="subject" placeholder='subject'/>
          <textarea name="message" placeholder='message'/>
          <input type="submit" value="Send" id='submit'/>
        </form>
      </>
    )}
    </div>
  )
}

export default Contact;

