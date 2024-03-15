import { Link } from 'react-router-dom'

const CNavbar = () => {

    return (
        <header>
            <div className='navcont'>
                <Link to='/'>
                    <h1>Header</h1>
                </Link>
            </div>
        </header>
    )
}

export default CNavbar