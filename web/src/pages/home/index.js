import './style.css';
import Header from '../../components/header';

const Home = () =>{
    return(
        <div className="h-100">
            <Header hideCard/>
            <div className="container-fluid petshop-list-container">
                <div className="col-12 px-4 text-center">
                    <h5>Mais proximos de voce (5)</h5>
                </div>
                <ul className="col-12 petshop-list">
                    
                </ul>
            </div>
        </div>
    )
}

export default Home;