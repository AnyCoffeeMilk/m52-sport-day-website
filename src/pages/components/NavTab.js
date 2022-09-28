export default function NavTab({ tabType, tabText, curTab, onClick, Icon }) {
    const selectedColor = "#668dff"
    const nonSelectedColor = 'lightgray'

    const handleIconStyle = { color: curTab === tabType ? selectedColor : nonSelectedColor }
    const handleTextStyle = (curTab === tabType) ? { color: selectedColor } : {}

    return (
        <a className='grid items-center md:flex' href={'/#/' + tabType} onClick={() => onClick(tabType)}>
            <div style={handleIconStyle} className="text-center md:pr-1">
                { Icon }
            </div>
            <div style={handleTextStyle} className='text-xs md:text-base font-semibold text-center whitespace-nowrap'>
                { tabText }
            </div>
        </a>
    )
}