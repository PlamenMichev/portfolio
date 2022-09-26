import './index.css'

export default function About() {
    return (
        <div className="about-wrapper" id="about">
            <h2>About Me</h2>
            <div className="about-content-wrapper">
                <div className='about-content-text'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos dolore optio, maiores eius corrupti aut officia eligendi asperiores sint non quae fuga! Ex nesciunt non, magni quas magnam natus!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos dolore optio, maiores eius corrupti aut officia eligendi asperiores sint non quae fuga! Ex nesciunt non, magni quas magnam natus!</p>
                </div>
                <div className="about-image-wrapper">
                    <img src="https://uploads-ssl.webflow.com/61518db3938b51e42d38caa4/624ae3ab57c613415a9cd899_Plamen%20Michev.webp" alt="Plamen Michev" />
                </div>
            </div>
        </div>
    )
}