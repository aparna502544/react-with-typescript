import UseLocalStorage from "../hooks/UselocalStorage";

const Loclstorage = () => {
    const [name,setName]= UseLocalStorage<string>("username", "");

  return (
    <>

    <div>
        <h2>Username:{name || "Guest"}</h2>
        <input 
        type="text"
        value={name}
        placeholder="ENTER YOUR NAME"
        onChange={(e)=> setName(e.target.value)}
        />
    </div>
     </>
  )
}

export default Loclstorage