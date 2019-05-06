import React, { Component } from 'react'
import { Card } from 'semantic-ui-react';
import {Image} from 'semantic-ui-react';
import {Icon} from 'semantic-ui-react';
import UpdateForm from '../../UpdateForm.js'
import mysu from './MySU.module.scss'

class MySU extends Component 
{
    constructor(props){
        super(props)
        this.state={
          elems : {},
          isEditing: false,
        }
    }
    View = () => {
        // console.log(this.state.elems)
        window.location.href = process.env.PUBLIC_URL+`/startups/${this.state.elems.StartupID}/${this.state.elems.UserID}`
    }
    handleEdit = () => {
        this.setState({isEditing: true})
    }

    componentWillMount = () =>{
        this.setState({elems: this.props.elems});
    }
    render() {
        if (this.state.isEditing) {
            return (
              <UpdateForm result = {this.state.elems}/>
            )
        }
        return(
            <div className={mysu.CardContainer}>
              <img onClick = {this.handleEdit} className = {mysu.edit} src = 'https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_mode_edit_48px-512.png'></img>
              <div className="ui centered card" onClick = {this.View}>
                <Card>
                  <Image src =  ''/>
                  <Card.Content>
                      <Card.Header>StartUp name: {this.state.elems.Name} </Card.Header>
                      <Card.Meta></Card.Meta>
                      <Card.Description></Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                      <p>
                      <Icon name='user' />
                        Category: {this.state.elems.Category} <br></br>
                        Launch date: {this.state.elems.Launch_date} <br></br>
                        Location: {this.state.elems.Location} <br></br>
                        Money raised: {this.state.elems.Money_raised} <br></br>
                      </p>
                  </Card.Content>
                </Card>
              </div>
            </div>
        )
    }
}

export default MySU



















