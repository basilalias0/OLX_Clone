import React, { useState } from 'react';
import {createContext} from 'react'

export const postContext = createContext(null)

function PostContext({children}) {

    const[postDetails, setPostDetails] = useState()
  return (
    <div>
      <postContext.Provider value={{postDetails,setPostDetails}}>
        {children}
      </postContext.Provider>
    </div>
  );
}

export default PostContext;
