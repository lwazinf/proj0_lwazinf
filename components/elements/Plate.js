import Image from 'next/image'
import styles from '../../styles/Plate.module.css'
import ReactCountryFlag from "react-country-flag"

function Plate() {
  return (
    <div className={styles._container} >

      <Component /> 

    </div>
  );
}

export default Plate;

// =======================

function Component() {
  return ( 
    <div className={styles._zero} >
        <div className={styles._zeroA} style={{ backgroundImage: 'url("https://images.pexels.com/photos/1097470/pexels-photo-1097470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")' }} />
        <div className={styles._zeroB}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }} >
            @SoundByte • 25 <ReactCountryFlag countryCode="ES" svg style={{ marginLeft: '5px' }} />
          </div>
          <div className={styles._zeroC} style={{ fontFamily: "'Open Sans Condensed', sans-serif", fontWeight: '500', fontSize: '16px', color: 'grey' }} >
            My brothers love your drums, wanna collabo?
          </div>
        </div>
        <div className={styles._zeroD}>
          <Image height={20} width={20} alt={''} src={'/assets/images/icons/play.png'} />
        </div>
      </div>
   );
}