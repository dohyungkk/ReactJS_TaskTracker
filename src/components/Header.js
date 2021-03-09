import Button from './Button'

const Header = () => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
}

// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header
