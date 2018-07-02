import React, { Component } from 'react';

import Input from './input';

class Card extends Component {
    render() {
        return (
            <div className="card">
                { Input('Region') }
                { Input('Dumb Name')}
                { Input('Color') }
                { Input('Noun') }
                { Input('Handheld Item') }
                { Input('Verb ending with "ing"') }
                { Input('Body Part') }
                { Input('Friend Name') }
                { Input('')}
            </div>
        )
    }
}

export default Card;