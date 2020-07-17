//This is a highr order component that will randomize the text color of other components.

import React from 'react';

const Rainbow = (WrappedComponent) => {
    const colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];
    const randomColor = colors[Math.floor(Math.random()*5)];
    const className = randomColor + '-text';

    return(props)=>{ //props of WrappedComponent. Simply pass them into WrappedComponent again.
        return(
            <div className={className}>
                <WrappedComponent {...props}/> 
            </div>
        )
    }
}

export default Rainbow;