import './home.css'
import {Link} from 'react-router-dom';

const Home = () => {

    return (
        <div className="home">
            <h1>StarWarsFanSite</h1>
            <h4>The best online shop</h4>

            <img src="./images/home.gif" align="#"></img>

            <h1>You can find toys, clothes and much more!</h1>

            <img src="./images/hiper.gif" align="#"></img>

            <h4>Join the journey, if you can...</h4>

            <div>
            <Link className="btn btn-info btn-lg" to="/catalog">
                Go to the catalog!
            </Link>
            </div>

        </div>

        
    );
};

export default Home;

