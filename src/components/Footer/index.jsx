import './index.css'
import LinkedInIcon from '../../icons/LinkedInIcon'
import GithubIcon from '../../icons/GithubIcon'
import FacebookIcon from '../../icons/FacebookIcon'
import EmailIcon from '../../icons/EmailIcon'
import PhoneIcon from '../../icons/PhoneIcon'

export default function Footer() {
    return (
        <footer>
            <div className='social-media'>
                <a href='https://www.linkedin.com/in/plamen-michev-38731317a/' target="_blank" className='sm' rel="noreferrer">
                    <LinkedInIcon />
                    LinkedIn
                </a>

                <a href='https://github.com/PlamenMichev' target="_blank" className='sm' rel="noreferrer">
                    <GithubIcon />
                    Github
                </a>

                <a href='https://www.facebook.com/plamen.michev.56' target="_blank" className='sm' rel="noreferrer">
                    <FacebookIcon />
                    Facebook
                </a>
            </div>
            <img src="/logo.png" alt="logo" className='logo' />
            <div className='social-media'>
                <a href='mailto:plamenmichev15@gmail.com' target="_blank" className='sm' rel="noreferrer">
                    <EmailIcon />
                    plamenmichev15@gmail.com
                </a>

                <a href='tel:+4593833920' className='sm'>
                    <PhoneIcon />
                    +45 93 83 39 20
                </a>
            </div>
        </footer>
    )
}