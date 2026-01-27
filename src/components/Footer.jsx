import { Button } from "./Button";

export default function Footer() {
    
    return (
        <div className="footer-row spaced-container">
            <div className="spaced-container"
                style={{fontSize: "1rem"}}>
                <Button/>
                <Button/>
                <Button/>
                <Button/>
            </div>
            
        </div>
    );
};