// Why do we need React Router?
// 1. Navigate between different components.
// 2. Avoid full-page browser reloads.
// 3. Create Single Page Applications (SPA).
// 4. Pass dynamic values through URLs.
// 5. Create nested layouts and routes.
// 6. Protect routes based on authentication.
//browserrouter 
//it is a router component thet enable routing functionality in a react application
//syntaxz

// syntax:
// import { BrowserRouter } from "react-router-dom";
// import App from "../App";

// function App() {
//     return(
//         <BrowserRouter>
//             {Application Components }
//         </BrowserRouter>
//     );
// }

// export default App;
// - BrowserRouter acts as the parent router.
// - It enables routing throughout the application.
// - All routing-related components should be inside it.
// - It allows navigation without refreshing the entire page.

//main.tsx
//import { browserrouter } from "react-router-dom";
//<strictmode>
//<app/ >
//</strictmode>

//route
//route define which component should be displayed for a particular url

//routes
//is a container that holds multiple route components and renders the best matching route

// Routes  =	Container for route definitions
// Route   =	Defines an individual route
// path    =	URL path
// element =	Component to display
//link
//is a component provided by react router thet allows user to navigate b/w routes without refreshing the browseer

//html anchor tag    ||   react link
// 1 uses <a>             <link>
// 2 uses href             to
// 3 may load the pages     does not load the pages

//usenavigate
// it is a react router hook used to navigate from one route to another programmatically

// Unlike Link, which is generally used for clickable navigation, useNavigate is useful when navigation should happen after an action.

// Real-world examples:
// - After successful login, navigate to Dashboard.
// - After submitting a form, navigate to the Home page.
// - After adding a product, navigate to the Cart page.
// - After logout, navigate to the Login page.
