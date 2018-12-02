import React, { Component } from 'react';

class Palindrome extends Component{
    constructor(){
        super()
        
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(uInput){
        // console.log(uInput)
        this.setState({
            userInput: uInput
        })
    }

    checkPalindrome(str){
        console.log('checkPalindrome')
        let reversed = str.split("").reverse().join("")
        console.log('reversed =  ' + reversed)
        if(str===reversed){
            // console.log('pal true')
            this.setState({
                palindrome: 'True'
            })
        } else {
            // console.log('pal false')
            this.setState({
                palindrome: 'False'
            })
        }
        // console.log('palindrome = '+this.state.palindrome)
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine"
                    onChange={(evt)=>this.handleChange(evt.target.value)}>
                </input>
                <button className="confirmationButton"
                    onClick={()=>this.checkPalindrome(this.state.userInput)}>
                    Check
                    </button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;