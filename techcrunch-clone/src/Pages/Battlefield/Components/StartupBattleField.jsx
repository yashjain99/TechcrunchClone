import   styles  from './style.module.css'
import React from 'react'
import Banner from './Banner'
import Header from './Header'

const StartupBattleField = (props) => {
    return (
        <div style={{marginTop:10}}>
            <div>
            <Banner/>
            <Header/>
            </div>
        </div>
    )
}

export default StartupBattleField
