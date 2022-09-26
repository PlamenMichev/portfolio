import { useState } from "react"
import ExperienceDetails from "./ExperienceDetails"
import ExperiencePicker from "./ExperiencePicker"
import './index.css'

export default function Experience() {
    const [pickedPosition, setPickedPosition] = useState(0)

    return (
        <div className="experience-container">
            <h2>Where I've been?</h2>
            <div className="experience-wrapper" id="experience">
                <ExperiencePicker options={EXPERIENCE_ARRAY} currentSelection={pickedPosition} setCurrentSelection={(newValue) => setPickedPosition(newValue)} />
                <ExperienceDetails {...EXPERIENCE_ARRAY[pickedPosition]} />
            </div>
        </div>
    )
}

const EXPERIENCE_ARRAY = [
    {
        companyName: 'Vores Forening',
        position: 'Full-Stack Developer',
        startDate: "January 2022",
        responsibilities: ['Build features on the frontend and the backend', 'Work with CI/CD pipelines', 'Lead a small team of developers'],
        websiteUrl: 'https://www.voresforening.dk/',
    },
    {
        companyName: 'ATG Tickets',
        position: 'FrontEnd Developer',
        startDate: "April 2021",
        endDate: "August 2021",
        responsibilities: ['Developing the checkout part of the application', 'Work on UI features', 'Take active part in the planning and decision making'],
        websiteUrl: 'https://www.atgtickets.com/',
    },
    {
        companyName: 'Klevret',
        position: 'Full-Stack Developer',
        startDate: "July 2020",
        endDate: "April 2021",
        responsibilities: ['Work on big multiservice web and mobile app', 'Implement protocols such as SIP and HTTPS', 'Maintain old projects and start new ones from scatch'],
        websiteUrl: 'https://klevret.com/',
    },
]