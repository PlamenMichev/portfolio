export default function ExperienceDetails({companyName, position, startDate, endDate, responsibilities, websiteUrl}) {
    return (
        <div className="experienceDetails">
            <h3 className="experience-title">{position} <a href={websiteUrl} target="_blank" className="experience-accent" rel="noreferrer">@{companyName}</a></h3>
            <p className="experience-range">{startDate} - {endDate ? endDate : 'Present'}</p>

            <ul>
                {responsibilities.map(responsibility => 
                    <li key={responsibility}>{responsibility}</li>)}
            </ul>
        </div>
    )
}