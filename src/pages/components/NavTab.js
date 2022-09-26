export default function NavTab({ tabType, tabText, curTab, onClick, Icon }) {
    const selectedColor = "#668dff"
    const nonSelectedColor = 'lightgray'

    const handleIconStyle = { color: curTab === tabType ? selectedColor : nonSelectedColor }
    const handleTextStyle = (curTab === tabType) ? { color: selectedColor } : {}

    return (
        <a className='grid items-center' href={'/#/' + tabType} onClick={() => onClick(tabType)}>
            <div style={handleIconStyle} className="text-center">
                { Icon }
            </div>
            <div style={handleTextStyle} className='text-xs font-semibold text-center whitespace-nowrap'>
                { tabText }
            </div>
        </a>
    )
}