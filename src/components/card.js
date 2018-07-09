import React, {Component} from 'react';

import Input from './input';
import Content from './content';

const INITIAL_STATE = {
    worstEnemy: '',
    region: '',
    color: '',
    pluralNoun: '',
    exclamation: '',
    nonLethal: '',
    noun: '',
    bodyPart: '',
    superhero: '',
    celeb: '',
    adjective: '',
    mood: '',
    contentVisible: false

}

class Card extends Component {

    constructor() {
        super()

        this.state = INITIAL_STATE

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event) {
        //console.log('this is the value', event.target.value);
        this.setState({ [event.target.name]: event.target.value})
        console.alert(this.state);
    }

    handleFormSubmit(event) {
        console.log("Attempting submitting process...");
        event.preventDefault()

        if(this.state.contentVisible) {
            this.setState(INITIAL_STATE)

            console.log("Content has been successfully cleared.")
        } else {
            console.log("Content has been successfully submited")
        }

        this.setState({ contentVisible: !this.state.contentVisible })
    }


    render() {

        const inputData = [
            {title: 'Arch Nemesis', state: this.state.worstEnemy, name: 'worstEnemy'},
            {title: 'Region', state: this.state.region, name: 'region'},
            {title: 'Color', state: this.state.color, name: 'color'},
            {title: 'Plural Noun', state: this.state.pluralNoun, name: 'pluralNoun'},
            {title: 'Exclamation', state: this.state.exclamation, name: 'exclamation'},
            {title: 'Non-Lethal Weapon', state: this.state.nonLethal, name: 'nonLethal'},
            {title: 'Noun', state: this.state.noun, name: 'noun'},
            {title: 'Body Organ', state: this.state.bodyPart, name: 'bodyPart'},
            {title: 'Superhero', state: this.state.superhero, name: 'superhero'},
            {title: 'Celebrity', state: this.state.celeb, name: 'celeb'},
            {title: 'Adjective', state: this.state.adjective, name: 'adjective'},
            {title: 'Mood', state: this.state.mood, name: 'mood'},
        
        ]

        return (
            <form onSubmit={this.handleFormSubmit} className="card">
                <div className="card__inputs">
                {
                    //inputData.map(data => Input(data.title, data.state, this.handleInputChange, data.name))
                    inputData.map((data, index) => {
                        return Input( (data), this.handleInputChange, index)
                    })
                }
                </div>
                <button className={`card__${!this.state.contentVisible ? 'generate' : 'clear'}`} type="submit">{!this.state.contentVisible ? 'Show MadLib' : 'Clear MadLib'}</button>
                {
                    this.state.contentVisible ? <Content data={this.state}/> : ''
                    
                }

                {/*

                    inputData.map((data, index )=> {
                        return <div key={index}>{data.title}</div>
                    })

                */}

                {/*{ Input('Arch Nemesis', this.state.worstEnemy, this.handleInputChange, 'worstEnemy')}
                { Input('Region', this.state.region, this.handleInputChange, 'region')}
                { Input('Color', this.state.color, this.handleInputChange, 'color')}
                { Input('Plural Noun', this.state.pluralNoun, this.handleInputChange, 'pluralNoun')}
                { Input('Exclamation', this.state.exclamation, this.handleInputChange, 'exclamation')}
                { Input('Non-Lethal Weapon', this.state.nonLethal   , this.handleInputChange, 'nonLethal')}
                { Input('Noun', this.state.noun, this.handleInputChange, 'noun')}
                { Input('Body Organ', this.state.bodyPart, this.handleInputChange, 'bodyPart')}
                { Input('Superhero', this.state.superhero, this.handleInputChange, 'superhero')}
                { Input('Celebrity', this.state.celeb, this.handleInputChange, 'celeb')}
                { Input('Adjective', this.state.adjective, this.handleInputChange, 'adjective')}
                { Input('Mood', this.state.mood, this.handleInputChange, 'mood')}*/}
            
            </form>
        )
    }
}

export default Card;