import Button from '../components/Button'
import Text from '../components/Text'
import { Data } from '../data/Data'
import './Navbar.sass'

export default function Navbar() {

    return (
        <div className='navbar-container'>
            <Text type='medium' text={Data.navbar.title}/>
            <Button variant='black' text={Data.navbar.contact}/>
        </div>
    )
}

