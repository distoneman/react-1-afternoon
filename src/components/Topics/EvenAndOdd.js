import React, { Component } from 'react';

class EvenAndOdds extends Component {
    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    splitArray(userInput) {
        let evenNums = []
        let oddNums = []
        // console.log("split array method")
        var userInputArr = userInput.split(',')
        // console.log(userInputArr)
        for (let i = 0; i < userInputArr.length; i++) {
            if (userInputArr[i] % 2 === 0) {
                // console.log('even')
                evenNums.push(parseInt(userInputArr[i], 10))
                // console.log(evenNums)
            } else {
                // console.log('odd')
                oddNums.push(parseInt(userInputArr[i], 10))
                // console.log('oddNums = ' + oddNums)
            }
        }
        this.setState({
            evenArray: evenNums,
            oddArray: oddNums
        })
    }

    handleChange(val) {
        // console.log(val)
        this.setState({
            userInput: val
        })
    }

    // <button onClick={() => this.handleAddFriend()}>Add Friend</button>


    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine"
                    onChange={(evt) => this.handleChange(evt.target.value)}>

                </input>
                <button className="confirmationButton"
                    onClick={() => this.splitArray(this.state.userInput)}>
                    Split
                </button>
                <span className="resultsBox">
                    Evens:  { this.state.evenArray }
                </span>
                <span className="resultsBox">
                    Odds: { this.state.oddArray }
                </span>
            </div>
        )
    }
}

export default EvenAndOdds