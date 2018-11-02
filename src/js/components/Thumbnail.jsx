import React, { Component } from 'react';

export class Thumbnail extends Component {
  constructor(props){
    super(props);

    this.state = {


    }
  }

  render(){
    const { thumbs } = this.props.thumbnail;
    let width = 12 / thumbs.length;

    return (
      <div className="row">
        {thumbs.map((thumbnail,i)=>(
          (<div key={i} className={`col-12 col-sm-${width}`}>
            <Thumb
              thumb={thumbnail}
            />
          </div>)
        ))}
      </div>

    );
  }
}

export const Thumb = (props) => {
  return (
    <div className="thumbnail">
      <a href={props.thumb.url} className="top-paragraph link" target="_blank">
        <div className="img-container">
          <img className="img-zoom" src={props.thumb.img} alt=""/>
        </div>
        <div className="caption">

          {props.thumb.heading &&
            <div className="caption-title">
              <span>{props.thumb.heading}</span>
            </div>
          }

          {props.thumb.caption &&
            props.thumb.caption
          }

        </div>
      </a>
    </div>
  );
}

export default Thumbnail;
