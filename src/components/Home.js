import React, { Component } from 'react';
//import axios from 'axios';   //Not needed since using redux
import { Link } from 'react-router-dom';
import PokeBall from '../pokeball.png'
//Fetch data using axios 
//Use lifecycle hook componentDidMount
//Functional Components cannot use Lifecycle Hooks. SO we must convert it into a Class based Component
//const Home  = () => {
//If not using <Switch> in App.js use <Link to= {'/posts/'+post.id}> 

//To connect this component to redux store, we need a higher order component (imported from react-redux library)
//Step 10:
import { connect } from 'react-redux'; // connect is a function invoked to bring back a hoc

class Home extends Component{
    //Since we are using redux, we don't need this anymore
    // state = {
    //     posts: []
    // }
    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts') //Asynchronous request i.e. takes time. It returns a promise//get request for 100 posts
    //         .then(res => { //res is response from the get request
    //             //console.log(res);
    //             this.setState({
    //                 posts: res.data.slice(0,10) //to get first 10 posts
    //             })
    //         })
    // }
    render(){
        //const { posts } = this.state; //destructuring // State no longer exists in Home.js since we are using redux
        //console.log(this.props);
        const { posts } = this.props;
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

//Step 12: map data from store to the props of our component
const mapStateToProps = (state) => { //Note this is state of store
    return { //this obj represents different propertis we want to add to props
        posts: state.posts
    }
}

//Step 11:
//export default connect()(Home); //NOT connect(Home) bcuz connect() returns a higher order component which wraps Home 

//Step 13: Pass mapStateToProps so when we connect to redux, it knows what data we want to grab from redux (state.posts) and the property we want to create on our props obj to apply that data to (posts)
export default connect(mapStateToProps)(Home);
