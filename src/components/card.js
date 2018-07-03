import React, { Component } from 'react';

import Input from './input';
import Content from './content';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            worstEnemy: '',
            region: '',
            color: 'BLUE',
            pluralNoun: '',
            exclamation: '',
            nonLethal: '',
            noun: '',
            bodyPart: '',
            superhero: '',
            celeb: '',
            adjective: '',
            mood: ''

        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        //console.log('this is the value', event.target.value);
        this.setState({ [event.target.name]: event.target.value})
        console.log(this.state);
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
            <div className="card">
                <h1>{this.state.color}</h1>
                {
                    //inputData.map(data => Input(data.title, data.state, this.handleInputChange, data.name))
                    inputData.map(data => Input( (data), this.handleInputChange ))
                }

                <Content data={this.state}/>
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
            
            </div>
        )
    }
}

export default Card;