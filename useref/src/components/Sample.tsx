import { useEffect, useRef } from "react"
//automatically focus an input field 
//scenrio : when the user opens a page ,the cursor should automatically appear inside the username innput field.
const Sample = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    useEffect(()=>{    //refresh cheyumboo focus aavann  veandiii useeffect useyuum
        usernameRef.current?.focus();

    },[]);
  return (
    <>
    <div>
        <h1>LOGIN FORM</h1>
        <input ref={usernameRef} type="text"
        placeholder="ENTER YOUR NAME"/>
        <br></br>
        <input  
        ref={usernameRef}
        type="password"
        placeholder="ENTER YOUR PASSWORD"/>
    </div>
    </>
  )
}

export default Sample