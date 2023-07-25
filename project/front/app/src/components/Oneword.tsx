import { MDBCard } from "mdb-react-ui-kit";
import { forwardRef, useEffect, useRef, useState } from "react";
import { TouchEvent } from "react";

export interface Word {
  name: string,
    etymologie: string,
    definition: string,
    otherwords: string,
    type:number

}


function Oneword(liste: Word[]) {

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [yCoord, setYCoord] = useState(0);

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (event: any) => {
    if (isMouseDown && containerRef.current) {
      const containerBounds = containerRef.current.getBoundingClientRect();
      const mouseY = event.clientY - containerBounds.top;
      setYCoord(mouseY);
    }
  };
    
    return (

        <div ref={containerRef} style={{width: '100%', height: '100%'}}
        onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleMouseMove}
        >
            <MDBCard  style={{width: '70vw', justifyContent: 'center', alignItems: 'center', height: '70vh', top: '10vh', display: 'flex', flexDirection: 'column', backgroundImage: 'url(https://s2.qwant.com/thumbr/474x323/7/5/15e7a9bcd784af960fb05e85addd943f5f08a5259bb5803b58a1b3f39473cc/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.jytUH6XTOQ7pXAgURy6LYQHaFD%26pid%3DApi&q=0&b=1&p=0&a=0)', backgroundSize: 'cover'}}>
            <h2 style={{fontSize:'40px'}}>
                <p style={{fontWeight: 'bold', fontStyle: 'italic', fontFamily: 'serif'}}> {liste[index].name} </p>
                

            </h2>
            </MDBCard>
            
        </div>

    )

}

export default Oneword;