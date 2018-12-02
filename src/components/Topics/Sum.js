import React, { Component } from 'react';

class Sum extends Component{
    constructor(){
        super()

        this.state = ({
            num1: 0,
            num2: 0,
            sum: null
        })
    }

    handleChangeNum1(num){
        console.log(`num1 ${num}`)
        this.setState({
            num1: parseInt(num,10)
        })
    }

    handleChangeNum2(num){
        console.log(`num2 ${num}`)
        this.setState({
            num2: parseInt(num,10)
        })
    }

    sumNumbers(num1, num2){
        console.log(num1 + ' + ' + num2)
        let sum = num1 + num2
        this.setState({
            sum: sum
        })
    }

    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine"
                    onChange={(evt)=>this.handleChangeNum1(evt.target.value)}></input>
                <input className="inputLine"
                    onChange={(evt)=>this.handleChangeNum2(evt.target.value)}></input>
                <button className="confirmationButton"
                    onClick={()=>this.sumNumbers(this.state.num1, this.state.num2)}>Sum</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }

}

export default Sum