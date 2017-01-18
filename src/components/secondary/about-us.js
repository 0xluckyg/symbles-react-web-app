import React from 'react';
import styles from '../../styles/about-us.css';
import backgroundImage from '../../styles/resources/city1.jpg';

const PointDiv = ({head, content}) => {
    return (
        <div className={styles.points}>
            <h3>{head}</h3>
            <p>{content}</p>
            <hr/>
        </div>
    );
}

const AboutPage = () => {

    const backgroundImageStyle = {
        backgroundImage:'url(' + backgroundImage + ')'
    }

    const pointsList = [
        {
            head:"1. TYPE OF THE PURCHASE",
            content:"Shares bought in behalf of a trust or awarded from the company can be less"
                    +"significant than shares bought from the insider’s personal savings."
        },
        {
            head:"2. CREDIBILITY OF THE INSIDER",
            content:"If the insider hasn’t made any big moves in the past, it’s a good indicator"
                    +"that there is something is going on."
        },
        {
            head:"3. AMOUNT OF THE PURCHASE",
            content:"Ofcourse, bigger purchases = more significant"
        },
        {
            head:"4. TYPE OF THE COMPANY",
            content:"Companies in sectors such as pharma or technology are more dependent"
                    +"on innnovative products or news compared to other types of firms."
        },
        {
            head:"5. HISTORY OF THE COMPANY",
            content:"We take volatility, failure rate in the past, volume, and market capital"
                    +"into account when judging the significance and risk"
        }
    ]

    return (
        <div className={styles.aboutWrapper}>
            <div className={styles.section1Background} style={backgroundImageStyle}>
                <div className={styles.shade}>
                    <h1 className={styles.section1Text}>
                        WE PROVIDE YOU WITH <br/>
                        INSIDER PURCHASE DATA <br/>
                        FOR YOUR SMARTER <br/>
                        INVESTMENT DECISIONS
                    </h1>
                </div>
            </div>
            <div className={styles.infoTextDiv}>
                <h1>
                    FIRST OF ALL, WHY INSIDER PURCHASES?
                </h1>
                <h3>
                    Insiders in a company have more access to their company’s
                    information than the outsiders do.
                </h3>
                <h3>
                    Thus, a significant insider purchase is a strong indicator of a
                    positive growth of the firm in the future.
                </h3>

                <hr/>

                <h1>
                    WHAT INFORMATION CAN I GET?
                </h1>
                {pointsList.map(point => {
                    return <PointDiv key={point['head']} head={point['head']} content={point['content']}/>
                })}
            </div>

            <div className={styles.footerBackground} style={backgroundImageStyle}>
                <div className={styles.subscribeShade}>
                    <div className={styles.subscribeBox}>
                        <h3>SUBSCRIBE NOW FOR REALTIME UPDATES WITH TEXT NOTIFICATIONS</h3>
                        <p>$9.99 per month</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutPage;
