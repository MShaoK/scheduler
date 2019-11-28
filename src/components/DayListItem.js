import React from "react";
import "components/DayListItem.scss";
import classNames from 'classnames/bind';


export default function DayListItem(props) {
  let dayClass = classNames("day-list__item",{
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
 })
  return (
    <li onClick={() => props.setDay(props.name)}>
      <h2 className={dayClass}>{props.name}
        <p>{formatSpots(props.spots)}</p>
      </h2> 
    </li>
  );
}

const formatSpots = function(spots) {
  let spotsLeft = " spots remaining";

  if (spots === 0) {
    spotsLeft = "no spots remaining";
  } else if (spots === 1) {
    spotsLeft = " 1 spot remaining";
  } else {
    spotsLeft = spots + " spots remaining";
  }

  return spotsLeft;
}