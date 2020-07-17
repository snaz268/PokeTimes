import React, { Component } from 'react';
import axios from 'axios'
//We need a id to to identify which route parameter to use to show which post
class Post extends Component{
    state = {
        post: null
    }
    componentDidMount(){
        //console.log(this.props)
        let id = this.props.match.params.post_id; //id from route
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(res=>{
            this.setState({
                post: res.data
            })
            console.log(res)
        })
    }
    render(){
        //check if there is indeed a post
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div className="center">Loading Post...</div>
        )
        return(
            <div className="container">
                {post}
            </div>
        )
    }
}

export default Post