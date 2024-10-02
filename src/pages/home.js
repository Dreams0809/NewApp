import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'



export default function Home(){
    return(
        <div> 
            <h1> Home screen </h1>

            <h2> Search For Communtiy</h2>

            <h3> Flash Community Feed</h3>

            <Link to="/login" style={{textDecoration: 'none'}}>
                <button>To login page</button>
            </Link>
        </div>

       
    )
}