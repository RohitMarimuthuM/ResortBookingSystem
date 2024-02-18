import React, { Component } from "react";
import Title from "../Title/Title";
import "./Services.css";
export default class Services extends Component {
  state = {
    services: [
      {
        image: "https://natureresorts.in/wp-content/uploads/2020/02/kurumba-tree-top-370x315.jpg",
        title: "Tree Top Dinning",
        info:
          "Enjoy a lavish 7-course spice plantation menu infused with spices found in our own plantation… all natural and organic.",
      },
      {
        image: "https://natureresorts.in/wp-content/uploads/2020/02/kurumba-ayursala-370x315.jpg",
        title: "Ayurshala",
        info:
          "Balance your doshas and re-tool your chakras at Ayurshala, which literally means the school of Ayurveda.",
      },
      {
        image: "https://natureresorts.in/wp-content/uploads/2020/01/Hammock-370x315.jpg",
        title: "Hammock",
        info:
          "Kick-start the evening with sundowners served to you by your own butler as you laze in a hammock. Great to relax in the hammock.",
      },
      {
        image: "https://natureresorts.in/wp-content/uploads/2020/02/kurumba-cave-dining-370x315.jpg",
        title: "Cave Dinning",
        info:
          "Indulge the caveman lurking deep within you… dine in a proper cave under a rocky ledge within the property.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <img src={item.image} alt={item.title} />
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
