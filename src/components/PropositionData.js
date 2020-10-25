import React, {Component} from 'react';

class PropositionData extends Component{
    constructor(props){
        super(props);
        this.state = {
            propositionNum: null,
            propositionData: null
        }
    }

    async fetchPropositionDescriptions(){
        if (this.props.selectedProposition) {
            const url = `https://ballotpedia.org/California_2020_ballot_measures`;
            const response = await fetch(url);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const data = await response.text();
            // this.setState({
            //     propositionData: data[data.length-1]
            // });
            console.log(data.match(/(?<=\<h1>).*(?=\<\/h1>)/));
        }
    }

    render() {
        return (
            <div>
                <h3>Proposition {this.state.propositionNum}</h3>
                {/* <p>{this.state.propositionData[3]}</p> */}
            </div>    
          );
    }
}
export default PropositionData;