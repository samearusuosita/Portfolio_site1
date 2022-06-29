import React, {useState} from 'react';

import { images } from '../../constants';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [isFormSubmitted, SetIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // disstucting formdata to pull value from formdata object
  const {name, email, message} = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    // using sanity client to upload data  ot the cms
    client.create(contact)
    .then(() =>{
      setLoading(false);
      SetIsFormSubmitted(true);
    })
  }
 



  return (
    <>
    <h2 className="head-text">Take a coffe & chat with me</h2>
    <div className="app__footer-cards">
      <div className="app__footer-card">
        <img src={images.email} alt="email" />
        <a href="mailto:samearusuosita@gmail.com" className='p-text'>samearusuosita@gmail.com</a>
      </div>
      <div className="app__footer-card">
        <img src={images.mobile} alt="mobile" />
        <a href="tel:07065434953" className='p-text'>07065434953</a>
      </div>
    </div>

  {/* wrap form data with a dianamic code to check submition */}
  {!isFormSubmitted ?
    <div className="app__footer-form app__flex">
      <div className="app__flex">
        <input type="text" className='p-text' placeholder='Your name' name='name' value={name} onChange={handleChangeInput} />
      </div>
      <div className="app__flex">
        <input type="email" className='p-text' placeholder='Your email' name='email' value={email} onChange={handleChangeInput} />
      </div>
      <div>
        <textarea 
          className="p-text" 
          placeholder='Your Message'
          value={message}
          name="message"
          onChange={handleChangeInput}>
        </textarea>
      </div>
      <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Messeage' }</button>
    </div>
    : <div>
        <h3 className="head-text">Thank you for getting in touch!</h3>
      </div>
    }
    </>
  )
}

export default AppWrap (
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
