import UseFetch from "../hooks/UseFetch"

interface User {
    id: number;
    name: string;
    email:string;
}
function Users (){
    const {data, loading, error}=
    UseFetch<User[]>("http://jsonplaceholder.typicode.com/users");
    if(loading){
        return <h2>loading users......</h2>
    }
    if (error){
        return <h2>{error}</h2>
    }
  return (
    <div>
        <h1>Users list</h1>
        {data?.map((user)=>(
            <div key ={user.id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                </div>
        ))}
    </div>
  )
}

export default Users