import type { ReactNode } from "react"

interface CardProps{
  children: ReactNode;
}
const Card = ({children}:CardProps) => {
  return (
    <div>
      <div className="card">
        {children}
      </div>
    </div>
  );
};

export default Card