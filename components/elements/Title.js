import Image from "next/image"
import styles from "../../styles/Title.module.css"

function Title() {
  return (
    <div className={styles._container}>
      <div className={styles._zero} style={{ opacity: '0.6', marginTop: '5px', marginRight: '10px' }}>
        <Image height={30} width={30} alt={''} src={'/assets/images/icons/people.png'} />
      </div>
      <div className={styles._one}>
        Featured Artists
      </div>
      <div className={styles._two}>
        <div className={styles._twoA}>
          Popular
        </div>
        <div className={styles._twoB}>
          <Image height={14} width={14} alt={''} src={'/assets/images/icons/down_arrow.png'} />
        </div>
      </div>
    </div>
  );
}

export default Title;