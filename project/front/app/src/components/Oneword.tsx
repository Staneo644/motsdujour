import {useEffect, useRef, useState } from "react";
import { metaCard } from "./card";

export interface Word {
  name: string,
    etymologie: string,
    definition: string,
    otherwords: string,
    type:number

}

var cardIndex = 0;
var wordIndex = 0;
function Oneword(liste: Word[]) {
  
  const [listCard, setListCard] = useState<metaCard[]>([new metaCard({word:liste[0], refPosition:'50%', transition:'0'}), new metaCard({word:liste[1], refPosition:'150%', transition:'0'})]);

  const containerRefMiddle = useRef<HTMLDivElement | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [yMouseDown, setYMouseDown] = useState(0);
  const [yCoord, setYCoord] = useState(0);
  const [transition, setTransition] = useState('0.5s');

  const addElementAtEnd = (element: metaCard) => {
    listCard.push(element);
  };

  const addElementAtStart = (element: metaCard) => {
    listCard.unshift(element);
  };

  const removeElementAtEnd = () => {
    listCard.pop();
  };

  const removeElementAtStart = () => {
    console.log(listCard)
    listCard.shift();
    console.log(listCard)
  };

  const handleMouseDown = (event: any) => {
    setTransition('0s');
    listCard.forEach((metacard: any) => {
      metacard.setTransition('0s');
    })
    setYMouseDown(event.clientX);
    console.log('mouse down');
    setIsMouseDown(true);
  };

  const handleMouseUp = (event: any) => {
    console.log('mouse up');
    listCard.forEach((metacard: metaCard) => {
      metacard.setTransition('1.5s');
      metacard.setPosition(0);
    })
    const px = event.clientX - yMouseDown;
    console.log(px + ' et ' + wordIndex)
    if (px > 150 && wordIndex > 0) {
      console.log('mouse up up');
      if (wordIndex !== liste.length - 1) {
        removeElementAtEnd();
      }
      wordIndex = (wordIndex - 1);
      if (wordIndex === 0) {
        cardIndex = (cardIndex - 1);
      }
      else {
        addElementAtStart(new metaCard({word:liste[wordIndex - 1], refPosition:'-50%', transition:'1.5s'}));
      }
    }
    else if (px < -150 && wordIndex < liste.length - 1) {
      if (wordIndex === 0) {
        cardIndex = (cardIndex + 1);
      }
      else {
        console.log('aaa')
        removeElementAtStart();
      }
      wordIndex =(wordIndex + 1);
      if (wordIndex !== liste.length - 1) {
        addElementAtEnd(new metaCard({word:liste[wordIndex + 1], refPosition:'150%', transition:'1.5s'}));
      }
      console.log('mouse up down ' + wordIndex + ' ' + cardIndex);
    }
    listCard[cardIndex].setRefPosition('50%');
    if (cardIndex < listCard.length - 1) {
      listCard[cardIndex + 1].setRefPosition('150%');
    }
    if (cardIndex > 0) {
      listCard[cardIndex - 1].setRefPosition('-50%');
    }
    
    setIsMouseDown(false);
  };

  const handleMouseMove = (event: any) => {
    if (isMouseDown && containerRefMiddle.current) {
      console.log('mouse move');
      const px = event.clientX - yMouseDown;
      listCard.forEach((metacard: any) => {
        metacard.setPosition(px);
      })
      setYCoord(yMouseDown + event.clientX);
    }
  };

    return (

        <div ref={containerRefMiddle} style={{width:'100vw', height: '100%'}}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleMouseMove}
        >
          {listCard.map((element, index) => {
         return (
          <div key={index}>
            {element.getCard()}
          </div>
        );
      })}

        </div>
    )
}

export default Oneword;