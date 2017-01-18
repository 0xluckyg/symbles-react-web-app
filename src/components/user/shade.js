import React, {Component} from 'react';

import AuthView from './auth-view';
import styles from '../../styles/auth-view.css';
import Transition from 'react-addons-css-transition-group';

class Shade extends Component {
    render(){
        const transitionNames = {
            appear: styles.shadeAppear,
            appearActive: styles.shadeAppearActive,
            enter: styles.shadeEnter,
            enterActive: styles.shadeEnterActive,
            leave: styles.shadeLeave,
            leaveActive: styles.shadeLeaveActive
        }

        const transitionProperties = {
            transitionAppear:true,
            transitionAppearTimeout:500,
            transitionEnterTimeout:500,
            transitionLeaveTimeout:500
        }

        return(
            <Transition {...transitionProperties} transitionName={transitionNames}>
                <div className={styles.shade}>
                    <AuthView/>
                </div>
            </Transition>
        )
    }
}

export default Shade;
