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
                        <span className={classes.Tip}/>
                        {this.props.text ? this.props.text : "Si vous annulez ou re-schedulez votre premier rendez-vous avec un préavis de moins de 48 heures, ou si vous ne vous présentez pas, vous serez facturé le montant total de la consultation."}
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