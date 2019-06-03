import React from 'react'
import {checkPassword} from './checkPassword'

export default class PasswordChecker extends React.Component {

    state = {
        password: '',
        strength: {},
        input: {
            textContent: ''
        }
    }

    handlePasswordChange = (event) => {
        const _password = event.target.value
        this.setState({
            password: _password,
            strength: checkPassword(_password)
        }, () => this.updateLabelMessage(this.state.strength))

        
    }

    updateLabelMessage = (strength) => {
        let message = ''
        switch(strength.score){
            case 0:
                message = 'password score is 0'
                break
            case 1:
                message = 'password score is 1'
                break
            case 2:
                message = 'password score is 2'
                break
            case 3:
                message = 'password score is 3'
                break
            case 4:
                message = 'password score is 4'
                break
            case 5:
                message = 'password score is 5'
                break
            case 6:
                message = 'password score is 6'
                break
            default:
                message = ''
                break
        }

        this.setState({
            input:{
                textContent: message
            }
        })
    }

    render(){
        const password = this.state.password
        const pwScorePercent = (Number(this.state.strength.score/this.state.strength.maxScore)*100).toString()
        return(
            <div className="password">
                <label className="input-label">{this.state.input.textContent}</label>
                <input onChange={this.handlePasswordChange} 
                        onFocus={this.handleInputFocus}
                        type="password" 
                        value={password}
                        placeholder="Enter Password"></input>
                <div className="progress">
                    <div className="bar" style={{width: pwScorePercent+'%'}}></div>
                </div>
            </div>
        )
    }
}