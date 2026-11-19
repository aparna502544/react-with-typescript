
import { EllipsisVertical, Clipboard } from "lucide-react";
import "./Card.css";

// Props interface
interface CardProps {
    title: string;
    period: string;
    assignment: string;
    instructor: string;
    color?: string;
}

// Card component
function Card({
    title,
    period,
    assignment,
    instructor,
    color
}: CardProps) {

    return (
        <div className="card">

            <div
                className="header"
                style={{ backgroundColor: color || "green" }}
            ></div>

            <button className="menu-btn">
                <EllipsisVertical />
            </button>

            <h2>{title}</h2>

            <p>{period}</p>

            <div className="card-content">

                <p className="action">NEXT ACTION</p>

                <span className="due">DUE FRIDAY</span>

                <h3>{assignment}</h3>

            </div>

            <div className="card-footer">

                <span>INSTRUCTOR: {instructor}</span>

                <span><Clipboard /></span>

            </div>

        </div>
    );
}

export default Card