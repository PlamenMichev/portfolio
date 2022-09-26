import { useEffect, useState } from "react"

export default function ExperienceDetails({companyName, position, startDate, endDate, responsibilities, websiteUrl}) {
    const [triggerAnimation, setTriggerAnimation] = useState(0);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setTriggerAnimation(triggerAnimation + 1)
        setOpacity(0)
        setTimeout(() => setOpacity(1), 100)
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