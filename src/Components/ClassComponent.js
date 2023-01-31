import React, { Component } from "react";

export class ClassComponent extends Component {
  constructor(props) {
    super();
    this.state = { moviesreview: [] };
  }
  
  url = 'https://api.nytimes.com/svc/movies/v2/reviews/picks.json?offset=20&order=by-opening-date&api-key=GlqiAryVVNmSxZApaDVJxJUSOFJ7inAN';

  fetchMovieReviews = async () => {
    try {
      const data = await fetch(this.url);
      const response = await data.json();
      this.setState({ moviesreview: response.results });
      console.log(this.state.moviesreview);
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchMovieReviews();
  }

  render() {
    return (
      <>
        {this.state.moviesreview.map((item, index) => {
          return (
            <div key={index}>
              <h3>byline:{item.byline}</h3>
              <p>critics pick:{item.critics_pick}</p>
              <p>title:{item.display_title}</p>
              <p>headline.{item.headline}</p>
              <img src={item.multimedia.src} alt="" />
              <hr />
            </div>
          );
        })}
      </>
    );
  }
}

export default ClassComponent;

