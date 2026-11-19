
import Card from "./component/Card";
import Navbar from "./component/Navbar";
import "./App.css";

function App() {
    return (
        <>
            <Navbar />

            <div className="card-container">

                <Card
                    title="AP Biology"
                    period="PERIOD 5"
                    assignment="Cell Structure Diagram"
                    instructor="DR.DARWIN"
                    color="green"
                />

                <Card
                    title="Calculus BC"
                    period="ADVANCED PLACEMENT"
                    assignment="Limits Practice Set"
                    instructor="Prof.GAUSSIS"
                    color="blue"
                />

                <Card
                    title="World History"
                    period="PERIOD 2"
                    assignment="Ancient Egypt Research"
                    instructor="PROF.CHURCHILL"
                    color="red"
                />

                <Card
                    title="Physics 101"
                    period="PERIOD 3"
                    assignment="Lab 01: Vector Analysis"
                    instructor="DR.ARIS"
                    color="darkgreen"
                />

            </div>
        </>
    );
}

export default App