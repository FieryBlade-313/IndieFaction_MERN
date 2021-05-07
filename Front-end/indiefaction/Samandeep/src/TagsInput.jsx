import React from "react";
import ReactDOM from "react-dom";
const TagComponent = props => {
    return (
        <div className="tagComponent" >
          <div className="tagComponent__text" >{props.text}</div>
        <div className="tagComponent__close" onClick={()=>{props.cullTagFromTags(props.text)}}>X</div>
        </div>
    )
  }
  
  const TagsInput = props => {
    const [tags, setTags] = React.useState(['JavaScript', 'TypeScript'])
    const inputRef = React.useRef();
    const [inputValue, setInputValue] = React.useState('')
    
    const inputValueChangeHandler = inputChange => {
      setInputValue(inputChange);
      if (inputChange[inputChange.length - 1] === ',') {
        setTags([...tags, inputChange.slice(0, inputChange.length - 1)]);
        setInputValue('');
      } 
    }
    const cullTagFromTags = (tag) => {
      setTags([...tags.filter(element => element !== tag)])
    }
    
    return (
      <div className="tagArea"style={{paddingLeft: "350px", paddingTop: "20px"}}>
        <div className='tagArea__displayArea'>
          {tags.map(tag => <TagComponent text={tag} cullTagFromTags={cullTagFromTags}/>)}
        </div>
        <input type='text'  value={inputValue} onChange={event => inputValueChangeHandler(event.target.value)} placeholder='separated by commas'/>
      </div>
    )
  };
  const sample = () => {
    return (ReactDOM.render(
      <TagsInput  />,
      document.getElementById('root')
    ))
  }
  sample();
  export default TagsInput;
  
