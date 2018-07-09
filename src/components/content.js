import React, { Component } from 'react';

class Content extends Component {

   constructor(){
       super()
       this.count = 1;
   }

   componentDidUpdate() {
       this.count = 1;
   }
    
    renderLabel(data){
        return [
            <div className="card__content__label">{this.count++}</div>,
            <b>{data}</b>
        ]
    }

    render() {
        console.log(this.props.data);
        const data = this.props.data;

        //<span>{data.indexOf(data.color)}</span>
        return (
            <div className="card__content">
                <p>
                     <b>{this.renderLabel(data.worstEnemy)}</b> has done it again. He's attempting to take over <b>{this.renderLabel(data.region)}}</b> by using an army of <b>{this.renderLabel(data.color)}</b> <b>{this.renderLabel(data.pluralNoun)}</b>, oh boy! He's also done goofed, for he has disturbed <b>{this.renderLabel(data.superhero)}'s</b> humble stroll around the country side, and now <b>{this.renderLabel(data.superhero)}'s</b> punt kicking <b>{this.renderLabel(data.worstEnemy)}'s</b> entire army of <b>{this.renderLabel(data.pluralNoun)}</b>. <b>{this.renderLabel(data.superhero)}</b> now sees the fool and shouts <b>"{this.renderLabel(data.exclamation)}"</b> as <b>{this.renderLabel(data.superhero)}</b> charges and proceeds to utterly smack the living fecal matter out of <b>{this.renderLabel(data.worstEnemy)}</b> with a <b>{this.renderLabel(data.nonLethal)}</b> for a good 5 minutes. During which, <b>{this.renderLabel(data.worstEnemy)}</b> was flailing his arms all over the place while screaming as if <b>{this.renderLabel(data.celeb)}</b> was singing opera while coughing up a hairball. <b>{this.renderLabel(data.worstEnemy)}</b> was taken into custody while suffering severe <b>{this.renderLabel(data.bodyPart)}</b> damage. Back at <b>{this.renderLabel(data.region)}'s</b> capital, a ceremony was held where <b>{this.renderLabel(data.superhero)}</b> recieved the <b>{this.renderLabel(data.adjective)}</b> <b>{this.renderLabel(data.noun)}</b> reward. Overall, it was a very <b>{this.renderLabel(data.mood)}</b> experience.
                </p>
            </div>
        )
    }
}

export default Content;