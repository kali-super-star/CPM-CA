import React from 'react'
import Helmet from 'react-helmet'

export default () => (
    <div>
        <Helmet>
            <html lang="en"/>
            <title>Immediate Help - Crisis Line</title>
            <meta name="description" content="If you are in crisis or danger, please use the following resources to get immediate help."/>
        </Helmet>
        <div>
            <div style={{maxWidth: 700, margin: 'auto', padding: '40px 15px'}}>
                <div style={{textAlign: 'center'}}>
                    <h1>Need Help?</h1>
                    <h3 style={{fontWeight: 300}}>If you are in crisis or danger, please use the following resources to get immediate help.</h3>
                </div>
                <div style={{padding: 20, boxShadow: '0 1px 4px 0 rgba(205,205,205,0.8'}}>
                    <h3>Canada</h3>
                    <p style={{color: '#e8006b'}}>911  <span style={{paddingLeft: 20}}>Emergency</span></p>
                    <p>+1 (888) 353-2273  <span style={{paddingLeft: 20}}>Hotline</span></p>

                    <p><a target="_blank" href="http://www.yourlifecounts.org/need-help/crisis-lines">YourLifeCounts.org</a></p>
                </div>
            </div>
        </div>

    </div>
)