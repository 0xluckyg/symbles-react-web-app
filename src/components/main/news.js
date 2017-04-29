import React, { Component } from 'react';
import {connect} from 'react-redux';
import styles from '../../styles/news.css';

class News extends Component {

    constructor(props){
        super(props)
    }

    render() {        
        return (
            <div className={styles.mainDiv}>
                <NewsCard summary={this.props.news}/>
            </div>
        );
    }
}

const NewsCard = ({summary}) => {
    return (
        <div>

        </div>
    );
}

function mapStateToProps({news}){
    return {news};
}

export default connect(mapStateToProps)(News);
