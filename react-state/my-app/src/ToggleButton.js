import {useState} from 'react';

export default function ToggleButton(props){
  const {text, color} = props;
  const [isClicked, setIsClicked] = useState(false);
  console.log('isClicked returned by useState', isClicked);

  function handleClick(){
    console.log('valueof isClicked before', isClicked)
    setIsClicked(!isClicked);
    console.log('valueof isClicked after', isClicked)
  }

  const bgColor = isClicked ? color : color === 'white';

  return (
    <button onClick={handleClick} style={{backgroundColor: bgColor}}>{text}</button>
  )
}
