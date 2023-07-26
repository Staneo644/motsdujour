import {useEffect, useRef, useState } from "react";
import { metaCard } from "./card";

export interface Word {
  name: string,
    etymologie: string,
    definition: string,
    otherwords: string,
    type:number

}

function Oneword(liste: Word[]) {
  const containerRefMiddle = useRef<HTMLDivElement | null>(null);
  let cardIndex = 0;
  let wordIndex = 0;

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [yMouseDown, setYMouseDown] = useState(0);
  const [listCard, setListCard] = useState<metaCard[]>([new metaCard({word:liste[0], refPosition:'50%', transition:'0'}),new metaCard({word:liste[1], refPosition:'150%', transition:'0'})]);
  //const [newPositionMiddle, setNewPositionMiddle] = useState('50%');
  //const [newPositionLeft, setNewPositionLeft] = useState('-150%');
  //const [newPositionRight, setNewPositionRight] = useState('calc(150%)');

  const addElementAtEnd = (element: metaCard) => {
    setListCard([...listCard, element]);
  };

  const addElementAtStart = (element: metaCard) => {
    setListCard([element, ...listCard]);
  };

  const removeElementAtEnd = () => {
    const newList = [...listCard];
    newList.pop();
    setListCard(newList);
  };

  const removeElementAtStart = () => {
    const newList = [...listCard];
    newList.shift();
    setListCard(newList);
  };

  const handleMouseDown = (event: any) => {
    listCard.forEach((metacard: any) => {
      metacard.setTransition('0s');
    })
    setYMouseDown(event.clientX);
    console.log('mouse down');
    setIsMouseDown(true);
  };

  const handleMouseUp = (event: any) => {
    console.log('mouse up');
    listCard.forEach((metacard: any) => {
      metacard.setPosition(0);
      metacard.setTransition('1.5s');
    })
    const px = event.clientX - yMouseDown;
    // if (hasMove !== 0) {
    //   if (cardIndex === 2) {
    //     removeElementAtStart()
    //     setCardIndex(cardIndex - 1);
    //   }
    //   else if (cardIndex === 0 && listCard.length === 3){
    //     removeElementAtEnd();
    //     setCardIndex(cardIndex + 1);
    //   }
    
    //   setHasMove(0);
    // }
    if (px > 30 && wordIndex > 0) {
      console.log('mouse up up');
      if (wordIndex !== liste.length - 1) {
        removeElementAtEnd();
      }
      wordIndex = (wordIndex - 1);
      if (wordIndex === 0) {
        cardIndex = (cardIndex - 1);
      }
      else {
        addElementAtStart(new metaCard({word:liste[wordIndex - 1], refPosition:'-150%', transition:'0.5s'}));
      }
    }
    else if (px < 30 && wordIndex < liste.length - 1) {
      if (wordIndex === 0) {
        cardIndex = (cardIndex + 1);
        console.log('aaa')
      }
      else {
        removeElementAtStart();
      }
      wordIndex =(wordIndex + 1);
      if (wordIndex !== liste.length - 1) {
        addElementAtEnd(new metaCard({word:liste[wordIndex + 1], refPosition:'150%', transition:'0.5s'}));
      }
      console.log('mouse up down ' + wordIndex + ' ' + cardIndex);
    }
    listCard[cardIndex].setRefPosition('50%');
    if (cardIndex < listCard.length - 1) {
      listCard[cardIndex + 1].setRefPosition('150%');
    }
    if (cardIndex > 0) {
      listCard[cardIndex - 1].setRefPosition('-150%');
    }
    
    setIsMouseDown(false);
  };

  const handleMouseMove = (event: any) => {
    if (isMouseDown && containerRefMiddle.current) {
      console.log('mouse move');
      const px = event.clientX - yMouseDown;
      // if (px < -100 && wordIndex < liste.length - 1) {
      //   if (hasMove === 0) {

      //     setCardIndex(cardIndex + 1);
      //     addElementAtEnd(new metaCard({word:liste[wordIndex + 1], refPosition:'150%', transition:'0.5s'}));
      //     setWordIndex(wordIndex + 1);
      //     setHasMove(1);
      //   }
      //   else if hasMove === -1 {
      //     setHasMove(0);
      //     setCardIndex(cardIndex + 1);
      //     setWordIndex(wordIndex + 1);
      // }
      // else if hasMove === 1 {
      //   setHasMove(0);
      // }
      // if (px < -100 && wordIndex < liste.length - 1 && hasMove === 0) {
      //   setCardIndex(cardIndex + 1);
      //   addElementAtEnd(new metaCard({word:liste[wordIndex + 1], refPosition:'150%', transition:'0.5s'}));
      //   setWordIndex(wordIndex + 1);
      //   setHasMove(1);
      //  }
      // else if (hasMove === 1) {
      //   setHasMove(0);
      // }
      listCard.forEach((metacard: any) => {
        metacard.setPosition(px);
      })
    }
  };

  useEffect(() => {
    
    // addElementAtStart(new metaCard(liste[cardIndex], '50%', '0.5s'));
    // if (cardIndex < liste.length - 1) {
    //   addElementAtEnd(new metaCard(liste[cardIndex + 1], '150%', '0.5s'));
    // }

  }, []
  )


  const _exposeCard = () => {
    return (
      <>
      
      </>
      )}

 
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