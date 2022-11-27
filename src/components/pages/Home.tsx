import React, { useContext } from "react";

import { AuthContext } from "App";

const Home: React.FC = () => {
  const { isSignedIn, currentUser } = useContext(AuthContext);

  return(
    <>
      {
        isSignedIn && currentUser ? (
        <>
          <h1>signed in successfully!</h1>
          <h1>email: {currentUser?.email}</h1>
          <h1>name: {currentUser?.email}</h1>
        </>
        ) : (
          <h1>not signed in</h1>
        )
      }
    </>
  )
}

export default Home