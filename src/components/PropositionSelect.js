import React, {Component} from 'react';

class PropositionSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            states:['Alabama','Alaska','Arizona','Arkansas','California',
                    'Colorado','Connecticut','Delaware','Florida','Georgia',
                    'Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas',
                    'Kentucky','Louisiana','Maine','Maryland','Massachusetts',
                    'Michigan','Minnesota','Mississippi','Missouri','Montana',
                    'Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
                    'New York','North Carolina','North Dakota','Ohio','Oklahoma',
                    'Oregon','Pennsylvania','Rhode Island','South Carolina',
                    'South Dakota','Tennessee','Texas','Utah','Vermont',
                    'Virginia','Washington','Washington D.C.','West Virginia',
                    'Wisconsin','Wyoming'],
        }
    }
        
    render() {
        return (
            <div>
                <select onChange={this.props.changeState}>
                    <option>Select a state</option>
                    {this.state.states.map((state) => (
                        <option value={state} key={state}>{state}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default PropositionSelect;