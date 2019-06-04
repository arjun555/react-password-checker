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
            case 1:
                message = 'is that it.'
                break
            case 2:
                message = 'be more creative!'
                break
            case 3:
                message = 'kinda average'
                break
            case 4:
                message = 'thats better'
                break
            case 5:
                message = 'almost perfect...'
                break
            case 6:
                message = 'that is the chuck norris of passwords'
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

    updateBarColor = (score) => {
        switch(score){
            case 0:
            case 1:
            case 2:
                return '#acbed8'
            case 3: 
                return '#f2d398'
            case 4:
            case 5:
                return '#d78521'
            case 6:
                return '#de1a1a'
            default: 
                return ''
        }
    }

    render(){
        const password = this.state.password
        const message = this.state.input.textContent
        const pwScorePercent = (Number(this.state.strength.score/this.state.strength.maxScore)*100).toString()
        const color = this.updateBarColor(this.state.strength.score)
        return(
            <div className="password">
                <input onChange={this.handlePasswordChange}
                        type="password" 
                        value={password}
                        placeholder="Enter Password"></input>
                <div className="progress">
                    <div className="bar" 
                            style={{width: pwScorePercent+'%', backgroundColor: color}}></div>
                </div>
                <label className="input-label"
                        style={{visibility: message ? 'visible' : 'hidden'}}>{message}</label>
            </div>
        )
    }
}