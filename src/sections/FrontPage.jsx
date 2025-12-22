import * as ButtonElements from "../components/Button";
import "../styling.css";

const Button = ButtonElements.Button;
const ButtonGrid = ButtonElements.ButtonGrid;

const FrontPage = () => {
  return (
    <>
      <div className = "header-row">
        <ButtonGrid row={2} col={4}/>
      </div>
      <div className = "section-row">
        <h1>Welcome to my page!</h1>
        <h2>Note: under construction</h2>
      </div>
      <Button/>
    </>
  );
}

export default FrontPage