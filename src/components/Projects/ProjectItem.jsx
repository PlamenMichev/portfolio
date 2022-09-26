import './index.css'

export default function ProjectItem({name, imageUrl, link, description}) {
    
    return (
        <div className='project-item-wrapper'>
            <a href={link} target="_blank" className="project-item" rel="noreferrer" style={{backgroundImage: `url(${imageUrl})`}}>
            </a>
            
            <div className='project-text'>
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}