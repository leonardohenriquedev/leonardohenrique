import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmailMessage',
        'template_ky9hjn5',
        form.current,
        'user_8GPiUBlNVUkm0PmsMTOv6'
      )
      .then(
        (result) => {
          alert('Mensagem Enviada Com Sucesso! :)');
        },
        (error) => {
          alert(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="formularioContato">
      <label>NOME</label>
      <input type="text" name="user_name" />
      <label>EMAIL</label>
      <input type="email" name="user_email" />
      <label>MENSAGEM</label>
      <textarea name="message" />
      <input type="submit" value="Enviar" className="submit" />
    </form>
  );
};
