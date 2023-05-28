import {useState} from 'react';

export default function Accordian({topics}){
  const [openPanel, setOpenPanel] = useState(undefined);

  function handleOpenPanel(topic) {
    if (openPanel === topic) {
    setOpenPanel(undefined)
    } else {
    setOpenPanel(topic);
  }
}

  let renderTopics = [];
  for (let i = 0; i < topics.length; i++) {
    renderTopics.push(<RenderTopic onClick={()=>handleOpenPanel(topics[i])} isOpen={topics[i].id === openPanel?.id} topic={topics[i]} key={topics[i].id}></RenderTopic>)
  }
  return renderTopics;
}




function RenderTopic({topic, isOpen, onClick}){
return (

  <div>
    <h2 backgroundColor='lightgrey' onClick={onClick}>{topic.title}</h2>
    <div>{isOpen && <p>{topic.description}</p>}</div>
  </div>
);
};
