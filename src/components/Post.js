import React, { Component } from 'react';
//import axios from 'axios'
//We need a id to to identify which route parameter to use to show which post

import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions'

class Post extends Component{
    //No longer needed bcuz of redux
    // state = {
    //     post: null
    // }
    // componentDidMount(){
    //     //console.log(this.props)
    //     let id = this.props.match.params.post_id; //id from route
    //     axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
    //     .then(res=>{
    //         this.setState({
    //             post: res.data
    //         })
    //         console.log(res)
    //     })
    // }
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    render(){
        //check if there is indeed a post
        //const post = this.state.post ? ( //state no longer exists bcuz we are using redux
        const post = this.props.post ? (  
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
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

const mapStateToProps = (state, ownProps) => { //ownProps is Posts component's own props b4 attaching additional props from redux store
    let id = ownProps.match.params.post_id; //post_id bcuz thats what we named it in App.js
    return{
        post: state.posts.find(post => post.id == id) //to find one particular post 
    }
}

const mapDispatchToProps = (dispatch) => { //dispatch is a function
    return{
        //map function
        //deletePost : (id) => { dispatch({type: 'DELETE_POST', id: id })} //we dispatch this action whenever we call fuction deletePost
        deletePost : (id) => { dispatch(deletePost(id))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);