import React, { Component } from 'react';

class FilterString extends Component{
    constructor(){
        super()

        this.state = {
            unFilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(uInput){
        // console.log('handleChange')
        // console.log(uInput)
        this.setState({
            userInput: uInput
        })
    }

    filterString(str){
        console.log(this.state.unFilteredArray)
        console.log(str)
        let workingArray = []
        for(let i=0;i<this.state.unFilteredArray.length;i++){
            console.log('for loop')
            if(this.state.unFilteredArray[i].startsWith(str)){
                console.log('true')
                workingArray.push(this.state.unFilteredArray[i])
            }
        }
        this.setState({
            filteredArray: workingArray
        })
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(evt)=>this.handleChange(evt.target.value)}></input>
                <button className="confirmationButton" 
                    onClick={()=>this.filterString(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray,null,10)}</span>
            </div>
        )
    }
}

export default FilterString