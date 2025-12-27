import { useRef } from "react";

export function CustomGridHelper() {
    const gridRef = useRef();
    return(
        <gridHelper ref={gridRef} args={[10, 10]}/>
    );
}