import "../Home/Home.css";
import Navbar from "../Components/Navbar";
import Planning from "../Components/Planning";
import Search from "../Components/Search";

function Home() {
    return (
        <div>
            <Navbar />
            <div className="container-izquierdo">
                <Planning />
            </div>
            <div className="container-derecho">
                <Search />
            </div>
        </div>
    );
}

export default Home;