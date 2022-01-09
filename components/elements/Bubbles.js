import styles from '../../styles/Bubbles.module.css'

function Bubbles() {
    return (
        <div className={styles._container}>
            <div className={styles._zero}>
                
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />

            </div>
        </div>
    );
}

export default Bubbles;

// =======================

function Component() {
    return ( 
        <div className={styles._zeroA} style={{ backgroundImage: 'url("https://images.pexels.com/photos/2350325/pexels-photo-2350325.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")', backgroundPositionY: 'center' }} />
     );
}