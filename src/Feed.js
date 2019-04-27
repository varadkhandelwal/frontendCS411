import React, { Component } from 'react'
import { Card } from 'semantic-ui-react';
import {Image} from 'semantic-ui-react';
import {Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import UpdateForm from './UpdateForm';
import Axios from 'axios';
// import 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min';


class Feed extends Component
{
  constructor(props){
    super(props)
    this.state={
      elems : {},
    }
  }
  componentWillMount = () =>{
    this.setState({elems: this.props.elems});
  }

  render() {
    return(
      <div className="CardContainer">
            <Link to={process.env.PUBLIC_URL+'/search'}><button className="ui button">Back To Search</button></Link>
            <div className="ui centered card">
                <p> startUp Name: {this.state.elems.Name}</p>
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
export default Feed