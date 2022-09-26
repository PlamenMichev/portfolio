export default function ExperiencePicker({ options, currentSelection, setCurrentSelection }) {
    return (
        <div className="picker-wrapper">
            {options.map((option, index) => (
                <div className={currentSelection === index ? 'picked picker' : 'picker'} key={option.key} onClick={() => setCurrentSelection(index)}>
                    {option.companyName}
                </div>
            ))}
        </div>
    )
}