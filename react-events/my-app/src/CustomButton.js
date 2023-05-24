export default function CustomButton (props){
  const {text, color, onCustomClick} = props;
  // function handleClick(){
  //   window.alert(text);
  // }

  return (
    <button onClick={()=>onCustomClick(text)} style={{backgroundColor: color}}>{text}</button>
  );
};
