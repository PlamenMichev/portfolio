import ContactIcon from '../../icons/ContactIcon'
import './index.css'

export default function Contact() {
    return (
        <div className='contact-wrapper'>
            <h2>Does it look interesting?</h2>
            <p>I will be happy to talk about future collaboration!</p>

            <a className='contact-button' href={`mailto:plamenmichev15@gmail.com?subject=Hey Plamen, Let's work together`}><ContactIcon className="contact-icon" /> Contact Me</a>
        </div>
    )
}