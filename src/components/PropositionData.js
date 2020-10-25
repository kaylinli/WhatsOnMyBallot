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
        if (this.props.selectedState) {
            var stateSlug = this.props.selectedState.replace(" ","_")
            const url = `https://ballotpedia.org/${stateSlug}_2020_ballot_measures`;
            const response = await fetch(url);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const data = await response.text();
            this.setState({
                propositionData: data[data.length-1]
            });
            // console.log(data)
        }
    }

    render() {
        if (!this.state.propositionData) {
            return null;
        }
        
        return (
            <div>
                <h3>{this.props.selectedState}</h3>
                <p>Propositions</p>
                <p>{this.state.propositionData[3]}</p>
            </div>    
          );
    }
}
export default PropositionData;