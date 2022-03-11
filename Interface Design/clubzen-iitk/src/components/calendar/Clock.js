import React from "react";

import './Clock.css'

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  static pad(num, digit) {
    let zero = "";
    for (let i = 0; i < digit; ++i) zero += "0";
    return (zero + num).slice(-digit);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    let date = this.state.date;
    let h = Clock.pad(date.getHours(), 2);
    let m = Clock.pad(date.getMinutes(), 2);
    let s = Clock.pad(date.getSeconds(), 2);
    let d = `${days[date.getDay()]}, ${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;

    return (
        <div className="clock">
            <div>
            <p id="date">{d}</p>
            <hr />
            <h3 id="hours">{h}:</h3>
            <h3 id="minutes">{m}:</h3>
            <h3 id="seconds">{s}</h3></div>
      </div>
    );
  }
}
export default Clock;
