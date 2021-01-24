import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props; // 여기서 props란 Detail을 Link로 호출한 컴포넌트가 주는 데이터이다.
    console.log(location); // 이게 Movie.js에서 넘어온 pathname과 state 객체가 들어있는 것
    console.log(history);
    if (location.state === undefined) {
      // 만약에 location이 없으면 (= 넘어온 데이터가 없으면, id가 없으면)
      history.push("/"); // 이 histroy는 도대체 뭐지?
      // history란 porps로 같이 넘어오는 정보인데 이 기능을 사용하면 쉽게 리다이렉션 할 수 있어서 사용했다.
    }
    // 정의되지 않은 id가 들어오면 home으로 돌려보냄, 리다이렉트 하는 것
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="about__container">
          <img
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          />
          <div className="movie__data">
            <h3 className="movie__title">{location.state.title}</h3>
            <h5 className="movie__year">{location.state.year}</h5>
            <ul className="movie__genres">
              {location.state.genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <p className="movie__summary">{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
