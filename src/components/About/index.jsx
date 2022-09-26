import './index.css'

export default function About() {
    return (
        <div className="about-wrapper" id="about">
            <h2>About Me</h2>
            <div className="about-content-wrapper">
                <div className='about-content-text'>
                    <p>Hi, I am Plamen and I am 20 years old. I started coding when I was 15 in high school and since then I have had multiple jobs and many projects. My experience is both in FrontEnd and BackEnd but my passion will always be .NET. Technologies that I am comfortable with are - .NET Core, ReactJS and NodeJS.</p>
                    <p>In my spare time, I like playing the guitar and hang out with friends. I am studying in Denmark but I am originally from Bulgaria, so I spent a lot of time learning the Danish language. I love travelling and would like to have the possition of a Tech Lead one day.</p>
                </div>
                <div className="about-image-wrapper">
                    <img src="https://uploads-ssl.webflow.com/61518db3938b51e42d38caa4/624ae3ab57c613415a9cd899_Plamen%20Michev.webp" alt="Plamen Michev" />
                </div>
            </div>
        </div>
    )
}