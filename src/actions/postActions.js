export const deletePost = (id) => {
    //return obj that represents action we want to return
    return{
        type:'DELETE_POST',
        id //same as id : id
    }
}