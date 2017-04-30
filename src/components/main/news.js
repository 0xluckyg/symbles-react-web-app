import React, { Component } from 'react';
import {connect} from 'react-redux';
import styles from '../../styles/news.css';

class News extends Component {

    constructor(props){
        super(props)

        this.renderNewsList = this.renderNewsList.bind(this);
    }

    renderNewsList() {
        console.log('News NOTYET', this.props.newsList);        
        this.props.newsList.map(news => {
            console.log('NEWS', news);
            return (
                    <NewsCard key={news.ticker} summary={news}/>
            )
        })
    }

    render() {        
        return (
            <div className={styles.mainDiv}>                          
                {this.props.newsList.map(news => {                        
                    return (
                        <NewsCard key={news.ticker} summary={news}/>
                    )
                })}
            </div>
        );
    }
}

const NewsCard = ({summary}) => {    
    return (
        <div className={styles.cardMainDiv}>
            <h3>{summary.ticker}</h3>
            <h3>{summary.title}</h3>
            <p className={styles.subInformation}>
                <span>{summary.source}</span>
                <span className={styles.date}>{summary.date}</span>
            </p>            
            <a href={summary.link} className={styles.link}>{summary.content}</a>
            <hr/>
        </div>
    );
}

function mapStateToProps({newsList}){
    return {newsList};
}

export default connect(mapStateToProps)(News);
