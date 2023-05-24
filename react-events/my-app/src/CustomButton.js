export default function CustomButton (props){
  const {text, color} = props;
  function handleClick(){
    window.alert(text);
  }
  return (
    <button onClick={handleClick} style={{backgroundColor: color}}>{text}</button>
  );
};
