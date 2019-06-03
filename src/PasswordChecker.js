import React from 'react'
import {checkPassword} from './checkPassword'

export default class PasswordChecker extends React.Component {

    state = {
        password: '',
        strength: {}
    }

    handlePasswordChange = (event) => {
        const _password = event.target.value
        this.setState({
            password: _password,
            strength: checkPassword(_password)
        })

    }


    render(){
        const password = this.state.password
        const pwScorePercent = (Number(this.state.strength.score/this.state.strength.maxScore)*100).toString()
        console.log(pwScorePercent)
        return(
            <div className="password">
                <input onChange={this.handlePasswordChange} 
                        type="password" 
                        value={password}></input>
                <div className="progress">
                    <div className="bar" style={{width: pwScorePercent+'%'}}></div>
                </div>
            </div>
        )
    }
}