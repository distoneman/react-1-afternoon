import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: [
                {
                    name: 'Jimmy Joe',
                    title: 'Hacker',
                    age: 12,
                },
                {
                    name: 'Jeremy Schrader',
                    age: 24,
                    hairColor: 'brown'
                },
                {
                    name: 'Carly Armstrong',
                    title: 'CEO',
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        console.log(val)
        this.setState({
            userInput: val
        })
    }

    filterArray(input) {
        console.log('filter array method')
        let workingArray = []
        for(let i = 0; i < this.state.unFilteredArray.length;i++) {
            // console.log('for loop')
            // console.log('user input ' + this.state.userInput)
            // console.log('array ' + this.state.unFilteredArray[i])
            if(this.state.unFilteredArray[i].hasOwnProperty(this.state.userInput)){
                // console.log('has prop')
                workingArray.push(this.state.unFilteredArray[i])
            }
        }
        // console.log('working ' + workingArray)
        this.setState({
            filteredArray: workingArray
        })
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter an Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine"
                    onChange={(evt) => this.handleChange(evt.target.value)}>
                </input>
                <button className="confirmationButton"
                    onClick={() => this.filterArray(this.state.userInput)}>Filter
                </button>
                <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject