import React, { Component } from 'react'

export default class CatList extends Component {


  render(){

    return(
      <div>
        {this.props.catPics.map(pic => <img key={pic.id} src={pic.url}/>)}
      </div>
    )
  }
}