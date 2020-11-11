// write your CatList component here
import React, { Component } from 'react';

class   CatList extends Component {
  

   render(){
      const list=this.props.catPics.map( catpic =>{ return <img src={catpic.url} /> } )
   return ( 
      
       <div>{list}</div>
       )
       
   }
  
}
export default  CatList 




