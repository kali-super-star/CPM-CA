import React, { Component } from 'react'

import classes from './ToolTip.module.css'

export default class extends Component {
    state = {
        visible: false
    }
    render() {
        return (
            <span style={{display: 'inline-block', position: 'relative'}}>
                {this.state.visible
                ? <span className={classes.PopUp} style={{fontSize: `${this.props.fontSize ? this.props.fontSize : '0.7rem'}`,}}>
                        <span className={classes.Tip} />
                        {this.props.text ? this.props.text : "If you cancel or reschedule your first appointment with less than 48 hours notice, or if you do not show up, you will be charged the full amount of the consultation."}
                    </span>
                : null
                }

                <span style={{display: 'inline-block'}}
                     onMouseEnter={()=> this.setState({visible: true})}
                     onMouseLeave={()=> this.setState({visible: false})}
                >{ this.props.children }</span>
            </span>
        )
    }
}