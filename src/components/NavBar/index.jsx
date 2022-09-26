import './index.css'

export default function NavBar() {
    return (
    <nav>
        <img alt='P.M. initials' src="/logo.png" height={100} />

        <div className='nav-links'>
            <a href='#about' className='nav-link'>About Me</a>
            <a href='#experience' className='nav-link'>Experience</a>
            <a href='#projects' className='nav-link'>My Work</a>
            <a href='#contact' className='nav-link'>Contact Me</a>
        </div>
    </nav>)
}