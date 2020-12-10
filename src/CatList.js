import React, { Component } from 'react';

class CatList extends Component {
    renderCats = () => {
        return this.props.catPics.map(cat => <li><img src={cat.url} alt="cat"></img></li>)
    }
    
    render() {
        return (
            <div>
                <ul>
                    {console.log('hello')}
                    {console.log(this.props.catPics[0])}
                    {this.renderCats()}
                </ul>
            </div>
        );
    }
}

export default CatList;