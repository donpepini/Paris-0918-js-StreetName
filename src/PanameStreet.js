import React from 'react'


class PanameStreet extends React.Component{
    render(){
        if (this.props.error)
        return(<div> <br/>Pas de correspondance trouvé.</div>)
        else 
        return(
            <div>
               { this.props.streetstory &&  <div><h1> ORIGIN STORY TIME : </h1> <h6> {this.props.streetstory} </h6> </div>}
        {this.props.streetname && <div> Nom de la rue : <h1>{this.props.streetname}</h1> </div> }
            </div>
        );
    }
}
export default PanameStreet;