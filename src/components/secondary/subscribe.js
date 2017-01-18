import React, {Component} from 'react';
import styles from '../../styles/subscribe.css';
import backgroundImage from '../../styles/resources/city2.jpg';

class Subscribe extends Component {
    render(){
        const backgroundImageStyle = {
            backgroundImage:'url(' + backgroundImage + ')'
        }

        return(
            <div className={styles.section1Background} style={backgroundImageStyle}>
                <div className={styles.shade}>
                    <div>
                        <h1 className={styles.section1Text}>
                            BE FASTER THAN EVERYONE ELSE
                        </h1>

                        <div className={styles.subscribeShade}>
                            <div className={styles.subscribeBox}>
                                <h3>SUBSCRIBE NOW FOR REALTIME UPDATES WITH TEXT NOTIFICATIONS</h3>
                                <p>$9.99 per month</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Subscribe;
