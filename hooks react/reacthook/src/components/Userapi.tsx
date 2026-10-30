// import { useEffect, useState } from "react";

// interface User {
// id: number;
// firstName: string;
// lastName: string;
// email: string;
// }

// const Userapi = () => {


// const [users, setUsers] = useState<User[]>([]);
// const [loading, setLoading] = useState<boolean>(true);
// const [error, setError] = useState<string | null>(null);

// useEffect(() => {

//     const fetchUsers = async () => {
//         try {
//             setLoading(true);
//             setError(null);

//             const response = await fetch("https://dummyjson.com/users");

//             if (!response.ok) {
//                 throw new Error("failed");
//             }

//             const data = await response.json();
//             setUsers(data.users);

//         } catch (err: unknown) {

//             const message = err instanceof Error  //class use cheythhtt error handling cheyyan  veandii use cheyunath instance
//                 ? err.message
//                 : "something wrong";

//             setError(message);

//         } finally {
//             setLoading(false);
//         }
//     };

//     fetchUsers();

// }, []);

// if (loading) {
//     return <p>loading user...</p>;
// }

// if (error) {
//     return <p>Error: {error}</p>;
// }

// return (
//     <div>
//         <h2>User Details</h2>

//         {users.map((user) => (
//             <div key={user.id}>
//                 <h3>{user.firstName} {user.lastName}</h3>
//                 <p>{user.email}</p>
//             </div>
//         ))}
//     </div>
// );


// };

// export default Userapi;

import { useEffect, useState } from "react";

interface User {
id: number;
firstName: string;
lastName: string;
email: string;
}

const Userapi = () => {

const [users, setUsers] = useState<User[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

const fetchUsers = async () => {
    try {
        const response = await fetch("https://dummyjson.com/users");

        const data = await response.json();

        setUsers(data.users);
    }
    catch {
        setError("Something went wrong");
    }
    finally {
        setLoading(false);
    }
};

useEffect(() => {
    fetchUsers();
}, []);

if (loading) {
    return <p>Loading...</p>;
}

if (error) {
    return <p>{error}</p>;
}

return (
    <div>
        <h2>User Details</h2>

        {users.map((user) => (
            <div key={user.id}>
                <h3>{user.firstName} {user.lastName}</h3>
                <p>{user.email}</p>
            </div>
        ))}
    </div>
);

};

export default Userapi;

