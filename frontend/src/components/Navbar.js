
import logoImg from '../img/logo.jpg';

const Navbar = () =>{
    return(<header>
        <div className="container">
            <img src={logoImg} alt='img'/>
            <h1>Workout Tracker</h1>
        </div>
    </header>);
    
}

export default Navbar