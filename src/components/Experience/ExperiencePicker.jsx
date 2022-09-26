export default function ExperiencePicker({ options, currentSelection, setCurrentSelection }) {
    return (
        <div className="picker-wrapper">
            {options.map((option, index) => (
                <div key={option.companyName} className={currentSelection === index ? 'picked picker' : 'picker'} onClick={() => setCurrentSelection(index)}>
                    {option.companyName}
                </div>
            ))}
        </div>
    )
}