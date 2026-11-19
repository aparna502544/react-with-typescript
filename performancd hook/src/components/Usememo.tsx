
// // useMemo() Hook
// // useMemo() is a React hook used to memorize the result of an expensive calculation.
// // It stores the calculated value and reuses it during subsequent 
// // renders if its dependencies have not changed.

// // Syntax:
// // const memorizedValue = useMemo(() => {
// //   return calculation;
// // }, [dependencies]);

// // useMemo()	    React performance hook
// // () =>	        Callback function
// // return	        Returns the calculated value
// // [dependencies]	Values that determine when recalculation happens


// // We can use useMemo() to avoid recalculating the filtered list when unrelated state changes.






// import { useMemo, useState } from "react";

// // 1. Without useMemo()

// function WithoutUseMemo() {
//     const [count, setCount] = useState<number>(0);

//     const students = [80, 45, 90, 35, 75, 95];

//     const passedStudents = students.filter(
//         (mark) => mark >= 50
//     );

//     console.log("Filtering Students...");

//     return (
//         <div>
//             <h2>Without useMemo</h2>

//             {passedStudents.map((mark, index) => (
//                 <p key={index}>{mark}</p>
//             ))}

//             <h3>Counter: {count}</h3>

//             <button onClick={() => setCount(count + 1)}>
//                 Increase Counter
//             </button>
//         </div>
//     );
// }


// // // 2. With useMemo()

// // function WithUseMemo() {
// //     const [count, setCount] = useState<number>(0);

// //     const students = [80, 45, 90, 35, 75, 95];

// //     const passedStudents = useMemo(() => {
// //         console.log("Filtering Students...");

// //         return students.filter((mark) => mark >= 50);
// //     }, [students]);

// //     return (
// //         <div>
// //             <h2>With useMemo</h2>

// //             {passedStudents.map((mark, index) => (
// //                 <p key={index}>{mark}</p>
// //             ))}

// //             <h3>Counter: {count}</h3>

// //             <button onClick={() => setCount(count + 1)}>
// //                 Increase Counter
// //             </button>
// //         </div>
// //     );
// // }


// // // 3. With useMemo (Outside Array)

// // const students = [80, 45, 90, 35, 75, 95];

// // function StudentList() {
// //     const [count, setCount] = useState<number>(0);

// //     const passedStudents = useMemo(() => {
// //         console.log("Filtering Students...");

// //         return students.filter((mark) => mark >= 50);
// //     }, []);

// //     return (
// //         <div>
// //             <h2>With useMemo (Outside Array)</h2>

// //             {passedStudents.map((mark, index) => (
// //                 <p key={index}>{mark}</p>
// //             ))}

// //             <h3>Counter: {count}</h3>

// //             <button onClick={() => setCount(count + 1)}>
// //                 Increase Counter
// //             </button>
// //         </div>
// //     );
// // }


// // function UseMemoHook() {
// //     return (
// //         <>
// //             <WithoutUseMemo />
// //             <WithUseMemo />
// //             <StudentList />
// //         </>
// //     );
// // }// Without Use Memo 

// // // import { useMemo, useState } from "react";
// // const UseMemoHooks = () => {
// //     const [count, setCount] = useState<number>(0);
// //     const students = [80, 45, 90, 35, 75, 95];
// //     const passedStudents = students.filter(
// //         (mark) => mark >= 50
// //     );
// //     console.log("Filtering Students........");
// //     return(
// //         <div>
// //             <h2>Passed Students</h2>
// //             {passedStudents.map((mark, index) => (
// //                 <p key={index}>
// //                     {mark}
// //                 </p>
// //             ))}
// //             <h3>Counter: {count}</h3>
// //             <button onClick={() => setCount(count + 1)}>
// //                 Increase  Counter
// //             </button>
// //         </div>
// //     );
// // }
// // export default UseMemoHooks;



// // // useMemo() Hook
// // // useMemo() is a React hook used to memorize the result of an expensive calculation.
// // // It stores the calculated value and reuses it during subsequent 
// // // renders if its dependencies have not changed.

// // // Syntax:
// // // const memorizedValue = useMemo(() => {
// // //   return calculation;
// // // }, [dependencies]);

// // // useMemo()	    React performance hook
// // // () =>	        Callback function
// // // return	        Returns the calculated value
// // // [dependencies]	Values that determine when recalculation happens


// // // We can use useMemo() to avoid recalculating the filtered list when unrelated state changes.
// // // =====================================================================================================

// //     // with useMemo() 
// // // import { useMemo, useState } from "react";
// // function UseMemoHook() {
// //     const [count, setCount] = useState<number>(0);
// //     const students =[80, 45, 90, 35, 75, 95];
// //     const passedStudents = useMemo(() => {
// //         console.log("Filtering Students.........................");
// //         return students.filter((mark) => mark >= 50);
// //     },[students]);
// //     return(
// //         <div>
// //             <h2>Passed Students</h2>
// //             {passedStudents.map((mark, index) => (
// //                 <p key={index}>{mark}</p>
// //             ))}
// //             <h3>Counter:{count}</h3>
// //             <button onClick={() => setCount(count + 1)}>
// //                 Increase Counter
// //             </button>
// //         </div>
// //     );
// // }





// // import { useMemo, useState } from "react";
// // const students = [80, 45, 90, 35, 75, 95];

// // function StudentList() {
// //     const [count, setCount] = useState<number>(0);
// //     const passedStudents = useMemo(() => {
// //         console.log("Filtering Students.........................");
// //         return students.filter((mark) => mark >= 50);
// //     },[students]);
// //     return(
// //         <div>
// //             <h2>Passed Students</h2>
// //             {passedStudents.map((mark, index) => (
// //                 <p key={index}>{mark}</p>
// //             ))}
// //             <h3>Counter:{count}</h3>
// //             <button onClick={() => setCount(count + 1)}>
// //                 Increase Counter
// //             </button>
// //         </div>
// //     );
// // }


// // export default UseMemoHook;