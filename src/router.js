//引入react jsx写法的必须
import React from 'react';
//引入需要用到的页面组件 
import GameIndex from './pages/game-index/game-index';
import GameCenter from './pages/game-center/game-center';
//引入一些模块
import { HashRouter as Router, Route } from "react-router-dom";

function router() {
    return (
        <Router>
            <Route exact path="/" component={GameIndex} />
            <Route exact path="/center" component={GameCenter} />
        </Router>);
}

export default router;