import './HotButton.css';
import {useState} from 'react';
export default function CustomHotButton(props){
  let [clickCount, setClickCount] = useState(0);

  function handleClickCount(){
    setClickCount(clickCount+1);
    console.log('Button is clicked');
  }

  const temp = clickCount < 3? 'cold' : clickCount < 6 ? 'cool' : clickCount < 9 ? 'tepid' : clickCount < 12 ? 'warm' : clickCount < 15 ? 'hot' : 'nuclear';


  return (
    <button onClick={handleClickCount} className={`hot-button ${temp}`}>Hot Button</button>
  )

}
