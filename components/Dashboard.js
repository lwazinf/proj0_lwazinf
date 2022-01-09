import styles from '../styles/Dashboard.module.css'
import Banner from './elements/Banner'
import Bubbles from './elements/Bubbles'
import Title from './elements/Title'
import Options from './elements/Options'
import Plate from './elements/Plate'

function Dashboard() {

    return (
        <div className={styles._container}>
            <div className={styles._zero}>

                <Banner />
                <Bubbles />
                <Title />
                <Options />
                <Title />
                <Plate />

            </div>

            <div className={styles._one}>

                <div className={styles._oneA}>
                </div>
            </div>
        </div >
    );
}


export default Dashboard;