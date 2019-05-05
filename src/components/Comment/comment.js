import React, { Component } from 'react'
import { Comment, Icon } from 'semantic-ui-react'
import Axios from 'axios';

class comment extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            username: '',
            date: '',
            comment: ''
        }
        this.handleCommentDelete = this.handleCommentDelete.bind(this);
    }
    
    handleCommentDelete() {
        // console.log("committed");
        // var url = `https://backendvaradk2.herokuapp.com/comments/${this.props.comment.CommentID}`;
        var url = `http://localhost:4000/comments/${this.props.comment.CommentID}`;
        if(this.props.comment.UserID === this.props.curr_user) {
            Axios.delete(url)
            .then(res => {
                window.location.reload();

                // window.location.href = process.env.PUBLIC_URL+"/startups/"+this.state.id + '/' + this.props.match.params.uid;
            })
            .catch(err => {
                throw err;
            })
        }
        else {
            window.alert("Not your comment!");
        }
    }
    render() {
        // console.log(this.props);
        return(
            <Comment.Group>
                <Comment>
                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
                <Comment.Content>
                    <Comment.Author>{this.props.comment.Name}</Comment.Author>
                    <Comment.Metadata>
                    <div>{this.props.comment.Date}</div>
                    </Comment.Metadata>
                    <Comment.Text>
                    {this.props.comment.Comment}
                    </Comment.Text>
                    <Comment.Actions>
                        <Comment.Action
                            onClick = {this.handleCommentDelete}
                        >Delete</Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
                </Comment>
            </Comment.Group>
        )}
}

export default comment