import './Contact.css'
import 'https://smtpjs.com/v3/smtp.js'

const Contact = () => {

    return (
        <div className="container-cnt">
            <form className='form-cnt'>
                <h3>GET IN TOUCH</h3>
                <input type="text" id='name-cnt' placeholder='Your Name' required />
                <input type="email" id='email-cnt' placeholder='Email ID' required />
                <input type="text" id='phone-cnt' placeholder='Phone Number' required />
                <textarea id="message" rows={4} placeholder='How can we help you?'></textarea>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    )
}

export default Contact;