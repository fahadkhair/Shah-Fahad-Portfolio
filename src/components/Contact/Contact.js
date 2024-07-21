import './Contact.css';
import 'https://smtpjs.com/v3/smtp.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
    return (
        <div className="container-cnt">
            <div className="form-wrapper">
                <form className='form-cnt'>
                    <h3>Get in Touch</h3>
                    <div className="input-group">
                        <i className="fas fa-user"></i>
                        <input type="text" id='name-cnt' placeholder='Your Name' required />
                    </div>
                    <div className="input-group">
                        <i className="fas fa-envelope"></i>
                        <input type="email" id='email-cnt' placeholder='Email ID' required />
                    </div>
                    <div className="input-group">
                        <i className="fas fa-phone"></i>
                        <input type="text" id='phone-cnt' placeholder='Phone Number' required />
                    </div>
                    <div className="input-group">
                        <i className="fas fa-comment"></i>
                        <textarea id="message" rows={4} placeholder='How can we help you?' required></textarea>
                    </div>
                    <button type='submit'>Send Message</button>
                </form>
                <div className="info">
                    <h3>Contact Information</h3>
                    <p><strong>Shah Fahad</strong></p>
                    <p><i className="fas fa-mobile-alt"></i> +92-302-2342034</p>
                    <p><i className="fas fa-envelope"></i> fahadkhair21@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
