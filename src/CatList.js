// write your CatList component here
import React, { Component } from 'react';

export default class CatList extends Component {  
    
    renderCatPics = () => {
        return this.props.catPics.map(cat => {
            return <img src={cat.url} key={cat.id}/>
        })
    }
  
    render() {
      return (
        <div>
          {this.renderCatPics()}
        </div>
      );
    }
  }