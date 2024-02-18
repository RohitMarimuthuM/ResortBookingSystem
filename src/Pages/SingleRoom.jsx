import React, { Component } from "react";
import { Link } from "react-router-dom";
import defaultBcg from "../assets/img/jpeg/room-1.jpeg";
import Banner from "../Components/Banner/Banner";
import { RoomContext } from "../Context/Context";
import StyledHero from "../Components/StyledHero/StyledHero";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found!</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      size,
      price,
      extras,
      images,
    } = room;

    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details:</h3>
              <p>{description}</p>
            </article>

            <article className="info">
              <h3>information:</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras:</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}> - {item}</li>;
            })}
          </ul>
        </section>
        <div className="book-now-button">
        <Link to={{
       pathname: "/book",
        state: {
         price: price,
           },
        }} className="btn">
  Book Now
</Link>
          </div>
          <br></br>
      </>
    );
  }
}
