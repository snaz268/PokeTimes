import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PokeBall from '../pokeball.png'
//Fetch data using axios 
//Use lifecycle hook componentDidMount
//Functional Components cannot use Lifecycle Hooks. SO we must convert it into a Class based Component
//const Home  = () => {
//If not using <Switch> in App.js use <Link to= {'/posts/'+post.id}> 
class Home extends Component{
    state = {
        posts: []
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts') //Asynchronous request i.e. takes time. It returns a promise//get request for 100 posts
            .then(res => { //res is response from the get request
                //console.log(res);
                this.setState({
                    posts: res.data.slice(0,10) //to get first 10 posts
                })
            })
    }
    render(){
        const { posts } = this.state; //destructuring
        const postsList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card red-text" key={post.id}>
                        <img src={PokeBall} alt="PokeBall"/>
                        <div className="card-content">
                            <Link to= {'/'+post.id}> 
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        ) 
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postsList}
            </div>
        )
    }
}

export default Home;
