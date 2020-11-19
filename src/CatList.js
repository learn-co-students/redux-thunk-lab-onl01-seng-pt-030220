import React, { Component } from 'react';

export default class CatList extends Component {  

    renderCats  = () => {
        return this.props.catPics.map(cat => {
            return <img src={cat.url} key={cat.id} alt={'catPics'}/>
        })
    }

    render() {
        return (
            <div>
                {this.renderCats()}
            </div>
        )
    }
}