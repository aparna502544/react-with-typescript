// import UserDetails from "./UserDetails"
// interface Profileprops{
//     username: string,
// }

import { useContext } from "react"
import Context from "./context/Context"

// function Profile ({ username }:{ username: string}){
//   return (
//     <div>
//         <div>profile</div>
//         <UserDetails  username={username}/>
//     </div>
//   );
// }

// export default Profile


const Profile = () => {
    const username = useContext(Context);
  return (
    <>
    <h2>Profile</h2>
    <h3>profile setting</h3>
    </>
  )
}

export default Profile

