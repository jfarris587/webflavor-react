import React, { Component } from 'react';
import {TweenMax, CSSPlugin, TimelineMax} from "gsap/all";

export class FlipCard extends Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();

    this.state = {
      cards: this.props.flipcard.card
    }
  }

  componentDidMount(){
    const node = this.myRef.current;
    var height = 0;

    var cards = node.getElementsByClassName('cardCont');
    var front = node.getElementsByClassName('cardFront');
    var back = node.getElementsByClassName('cardBack');

    for(let i = 0; i < cards.length; i++){
      let frontHeight = parseInt(cards[i].getElementsByClassName('cardFront')[0].offsetHeight,10);
      let backHeight = parseInt(cards[i].getElementsByClassName('cardBack')[0].offsetHeight,10);

      height = Math.max(frontHeight, backHeight, height);
    }

    CSSPlugin.defaultTransformPerspective = 1000;

    for(let i = 0; i < cards.length; i++) {
      cards[i].style.height = height+"px";
      front[i].style.height = height+"px";
      back[i].style.height = height+"px";

      TweenMax.set(back[i], {rotationY:-180});
      var tl = new TimelineMax({paused:true});
      tl
        .to(front[i], 1, {rotationY:180})
        .to(back[i], 1, {rotationY:0},0)
        .to(cards[i], .5, {z:50},0)
        .to(cards[i], .5, {z:0},.5);

      cards[i].animation = tl;
    }
  }

  showBack = (evt) => {
    var card = evt.target.closest('.cardCont');
    card.animation.play();
  }

  showFront = (evt) => {
    var card = evt.target.closest('.cardCont');
    card.animation.reverse();
  }

  render(){
    let width = 12 / this.state.cards.length;
    const { cards } = this.state;

    return (
      <div className="row" ref={this.myRef}>
        {cards.map((card,i)=>(
          (<div key={i} className={`col-12 col-sm-12 mx-auto col-lg-${width} margin-below`}>
            <Card
              card={card}
              showBack={this.showBack}
              showFront={this.showFront}
            />
          </div>)
        ))}
      </div>
    );
  }
}

export const Card = (props) =>{
  var frontStyle = {}
  const { front, back, background, minHeight } = props.card;

  if(background){
    frontStyle.background = `url(${background})`
  }
  if(minHeight){
    frontStyle.minHeight = `${minHeight}px`
  }

  return (
    <React.Fragment>
      <div className="cardCont">
        <div className="cardBack" onClick={(e)=>props.showFront(e)}>
          {back}
        </div>
        <div className="cardFront" style={frontStyle} onClick={(e)=>props.showBack(e)}>
          {front}
        </div>
      </div>
    </React.Fragment>
  );
}

export default FlipCard;
