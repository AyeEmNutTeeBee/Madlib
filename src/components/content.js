import React, { Component } from 'react';

class Content extends Component {
    render() {
        console.log(this.props.data);
        const data = this.props.data;
        return (
            <p>
                    <b>{data.worstEnemy}</b> has done it again. He's attempting to take over <b>{data.region}</b> by using an army of <b>{data.color}</b> <b>{data.pluralNoun}</b>, oh boy! He's also done goofed, for he has disturbed <b>{data.superhero}'s</b> humble stroll around the country side, and now <b>{data.superhero}'s</b> is punt kicking <b>{data.worstEnemy}'s</b> entire army of <b>{data.pluralNoun}</b>. <b>{data.superhero}</b> now sees the fool and shouts <b>"{data.exclamation}"</b> as <b>{data.superhero}</b> charges him and proceeds to utterly smack the living fecal matter out of <b>{data.worstEnemy}</b> with a <b>{data.nonLethal}</b> for a good 5 minutes. During which, <b>{data.worstEnemy}</b> was flailing his arms all over the place while screaming as if <b>{data.celeb}</b> was singing opera while coughing up a hairball. <b>{data.worstEnemy}</b> was taken into custody while suffering severe <b>{data.bodyPart}</b> damage. Back at <b>{data.region}'s</b> capital, a ceremony was held where <b>{data.superhero}</b> recieved the <b>{data.adjective}</b> <b>{data.noun}</b> reward. Overall, it was a very <b>{data.mood}</b> experience.
            </p>
        )
    }
}

export default Content;