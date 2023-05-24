export default function CustomButton(props) {
  const {text, color} = props;
  return (
    <button style={{backgroundColor: color}}>{text}</button>
  );
}
