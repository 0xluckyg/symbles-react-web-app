import * as keys from '../utilities/constants';
import axios from 'axios';
import xml2js from 'xml2js';
import cheerio from 'cheerio';
import _ from 'lodash';
const xmlParser = xml2js.Parser({explicitArray : false});

function makeNewsUrl(ticker) {
    const base = `https://www.google.com/finance/company_news?q=${ticker}&output=rss`
    return base;
}

function parseXML(body, ticker, callback) {
    function parseDescription(description) {        
        const $ = cheerio.load(description);        
        const source = $('div span').eq(0).text();
        const date = $('div span').eq(1).text();
        const content = $('div div').text();        
        return {source, date, content}
    }

    xmlParser.parseString(body, (err, result) => {                      
        const news = result.rss.channel;
        let firstNews = {};
        if (news.item !== undefined && news.item.constructor === Array) {
            firstNews = news.item[0];
        } else {
            firstNews = news.item
        }                
        firstNews.ticker = ticker;                             
        let summary = Object.assign(firstNews, parseDescription(firstNews.description));
        summary = _.pick(summary, ['title', 'content', 'date', 'link', 'source', 'ticker'])
        
        callback(summary);
    });
}

export const getNews = (ticker) => {    
    return dispatch => {
        axios.get(makeNewsUrl(ticker))
            .then(res => {
                parseXML(res.data, ticker, (summary) => {
                    dispatch(resolveGetNews(summary));
                })
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export const resolveGetNews = (summary) => {    
    return {
        type: keys.GET_NEWS,
        payload: summary
    }
}

