import styles from "../../styles/Banner.module.css"
import ReactCountryFlag from "react-country-flag"
import { db } from "../../firebase";
import { collection, addDoc } from "@firebase/firestore"; 

function Banner() {

    return (
        <div className={styles._container} style={{ backgroundImage: 'url("https://images.pexels.com/photos/1306791/pexels-photo-1306791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")', filter: 'none' }}>
            <div className={styles._zero}>

                <div className={styles._zeroA} style={{ backgroundImage: 'url("https://images.pexels.com/photos/1097470/pexels-photo-1097470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")', filter: 'none', backgroundPositionX: '-60px' }} />
                <div className={styles._zeroB}>
                    @LwaziNF • 28 <ReactCountryFlag countryCode="ZA" svg style={{ marginLeft: '5px' }} />
                </div>
                <div className={styles._zeroC}>
                    Lwazi Ndlovu, seasoned drummer.
                </div>

            </div>
        </div>
    );
}

export default Banner;

// =================================

