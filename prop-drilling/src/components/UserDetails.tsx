interface Userprops{
    username: string,
}

const UserDetails = ({username}:{username:string}) => {
  return (
    <>
    <div>
        <h2>User details component</h2>
        <h2>welcome, {username}</h2>
        
    </div>
    </>
  )
}

export default UserDetails