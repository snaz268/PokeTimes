///The main idea of redux is to have a central storage for data from where each component can reach out and grab data

//Step 1: In index.js, import { createStore } from 'redux';
//Step 2: const store = createStore(rootReducer); Define rootReducer in following steps 
//Step 3: import { Provider } from 'react-redux';
//Step 4: Wrap <App /> like this: 
// {/* <Provider store={store}> 
// <App />
// </Provider>   */}

//Step 5: Create a file called rootReducers in reducers folder
//Step 6: define initState
const initState = {
    posts:[
        {id:1, title:'Pikachuuuu!', body:'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'},
        {id:2, title:'A Helix Fossil Was Found', body:'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'},
        {id:3, title:'Charmander Laid An Egg', body:'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'},
        
    ]
}

//Step 7: define reducer. Note: reducer takes input state and action
const rootReducer = (state = initState, action) => {
    //console.log(action);
    if (action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id!= post.id
        })
        return{
            ...state,
            posts:newPosts
        }
    }
    return state;
}

//Step 8: export reducer
export default rootReducer;

//Step 9: In index.js import rootReducer from './reducers/rootReducer';

//Step 10 continues from Home.js