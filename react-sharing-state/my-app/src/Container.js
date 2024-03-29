import React from 'react';
import {useState} from 'react';
/**
 * A container of items.
 * One item is displayed at a time, with buttons to flip through them:
 * - Next and Prev scroll forward and backward one item
 * - An array of buttons scroll to a specific item
 * TODO: The buttons don't work!
 */
export default function Container({ items }) {

  let [index, setIndex] = useState(0);

  function handleButtonNext() {
    setIndex((index + 1) % items.length)
  };

  function handleButtonPrev() {
    setIndex((index - 1 + items.length) % items.length)
  };

  function handleSelect(select){
    setIndex(select)
  };


  return (
    <div>
      <div>{items[index]}</div>
      <div>
        <CustomButton onCustomClick={handleButtonPrev} text="Prev" />
        <Indicators count={items.length} index={index} onSelect={handleSelect}/>
        <CustomButton onCustomClick={handleButtonNext} text="Next" />
      </div>
    </div>
  )
}

/**
 * A component that wraps a DOM button.
 * Props:
 *   text: The button's text
 *
 * TODO: Make the background color a prop, default white.
 * TODO: When clicked, the parent needs to be notified.
 */
function CustomButton({ text, bgColor = 'white', onCustomClick }) {
  return <button onClick={onCustomClick} style={{backgroundColor: bgColor}}>{text}</button>;
}

/**
 * An array of indicators (buttons).
 * Props:
 *   count: The number of indicators to display
 *
 * TODO: When an indicator is selected, the active item in the Container
 *       should switch to the index of the selected indicator.
 *       To avoid confusion, use `onSelect` for the event prop name.
 * TODO: Highlight the active indicator lightblue.
 */
function Indicators({ count,index, onSelect }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(<CustomButton key={i} text={i} onCustomClick={() => onSelect(i)} bgColor={index === i ? "lightblue" : undefined} />);
  }
  return <div>{buttons}</div>;
}
