import styles from "../../styles/Options.module.css"
import Image from "next/image"

function Options() {
  return (
    <div className={styles._container}>
      
      <Component />
      
    </div>
  );
}

export default Options;

// =======================

function Component() {
  return ( 
    <div className={styles._zero}>
        <div className={styles._zeroA} style={{ backgroundImage: 'url("https://images.pexels.com/photos/1362371/pexels-photo-1362371.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")' }}>
          <div className={styles._zeroB} />
        </div>
        <div className={styles._zeroC}>
          <div className={styles._zeroC_base}>
            <Image height={25} width={25} alt={''} src={'/assets/images/icons/play.png'} />
          </div>
          <div className={styles._zeroC_player}>
            <div className={styles._zeroC_dot} />
          </div>
          <div className={styles._zeroC_base}>
            <Image height={25} width={25} alt={''} src={'/assets/images/icons/location.png'} />
          </div>
          <div className={styles._zeroC_base}>
            <Image height={30} width={30} alt={''} src={'/assets/images/icons/cloud.png'} />
          </div>
        </div>
      </div>
   );
}