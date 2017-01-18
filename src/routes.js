import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app'
import FilingSummaryList from './components/main/filing-summary-list';
import About from './components/secondary/about-us';
import Subscribe from './components/secondary/subscribe';

export default (
<div>
    <Route path="/" component={App}>
        <IndexRoute component={FilingSummaryList}/>
        <Route path="/about" component={About}/>
        <Route path="/subscribe" component={Subscribe}/>
    </Route>
</div>
);
