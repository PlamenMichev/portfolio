import { useEffect, useState } from "react"

export default function ExperienceDetails({companyName, position, startDate, endDate, responsibilities, websiteUrl}) {
    const [triggerAnimation, setTriggerAnimation] = useState(0);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        // We do this so we can trigger the transition property on every content change

        // 1. We trigger rerendering of the component by changin the state (in this case the key of the main div)
        setTriggerAnimation(triggerAnimation + 1)

        // 2. We set the opacity to 0
        setOpacity(0)

        // 3. We use set timeout so the func goes to the bottom of the event loop
        // and when it is triggered the opacity goes from 0 to 1, activating the transition property in the css
        setTimeout(() => setOpacity(1), 100)
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [companyName])


    console.log(opacity)
    return (
        <div className="experienceDetails" style={{opacity: opacity}} key={triggerAnimation}>
            <h3 className="experience-title">{position} <a href={websiteUrl} target="_blank" className="experience-accent" rel="noreferrer">@{companyName}</a></h3>
            <p className="experience-range">{startDate} - {endDate ? endDate : 'Present'}</p>

            <ul>
                {responsibilities.map(responsibility => 
                    <li key={responsibility}>{responsibility}</li>)}
            </ul>
        </div>
    )
}