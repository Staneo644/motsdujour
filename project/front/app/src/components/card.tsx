import { HtmlHTMLAttributes } from "react";
import React from "react";
import { Word } from "./Oneword";
import { MDBCard } from "mdb-react-ui-kit";


export class metaCard extends React.Component {
    constructor(props : {word: Word, refPosition: string, transition: string}) {
        super(props);
      this.word = props.word;
      this.position = 0;
      this.transition = props.transition;
      this.refPosition = props.refPosition;
    }
    state = {
        word: "",
        position: 0,
        transition: "",
      };
    word: Word;
    card: any;
    position: number;
    transition: string;
    refPosition: string;
    
    public setPosition(position: number){
      this.position = position;
    }
    public setRefPosition(refPosition: string) {
      this.refPosition = refPosition;
    }
    public setTransition(transition: string) {
        this.transition = transition;
        //this.setState({transition: transition, word: this.word, refPosition: position});
    }
    getCard(): any {
      return (
        <MDBCard  style={{width: '70vw', justifyContent: 'center', alignItems: 'center', height: 'auto', top: 'calc(58px + 10vh)', backgroundImage: 'url(https://s2.qwant.com/thumbr/474x323/7/5/15e7a9bcd784af960fb05e85addd943f5f08a5259bb5803b58a1b3f39473cc/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.jytUH6XTOQ7pXAgURy6LYQHaFD%26pid%3DApi&q=0&b=1&p=0&a=0)', backgroundSize: 'cover'
          , left: 'calc(' + this.refPosition + ' + ' + this.position + 'px)', transform: 'translate(-50%)', borderRadius: '20px', boxShadow: '0px 0px 10px 0px black', overflow: 'scroll', position: 'fixed', transition: this.transition
          }}
          >
              <p style={{ marginTop: '10px', marginLeft: '15px', fontSize:'20px', fontStyle: 'italic', fontFamily: 'serif'}}> {this.word.etymologie} </p>
            <h2 style={{fontSize:'40px'}}>
              <p style={{fontWeight: 'bold', fontStyle: 'italic', fontFamily: 'serif'}}> {this.word.name} </p>
            </h2>
              <p style={{marginBottom: '10px', fontSize:'20px', fontStyle: 'italic', fontFamily: 'serif'}}> {this.word.definition} </p>
            </MDBCard>
            )
    }
}
