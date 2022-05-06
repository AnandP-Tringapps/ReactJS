import React from 'react'
import {useSelector, connect} from 'react-redux'
import {Update_details} from './Update_details'



function Content({updateValue}) {

  const elementValue = useSelector(state => state);
  function handleaddEvent(e){
    e.preventDefault();
    const event=document.querySelector('.input').value;
    updateValue(event);
  }

  return (
    <div id='input' class="content">
        <form className='form'>
        <label>React - Redux</label><br></br>
        <input type="text" placeholder='Add Something ....!!' className="input"/><br/><br/>
        <button onClick={handleaddEvent}>Submit</button>
        </form>
    </div>
  )
}

const mapStateToProps=(state)=>(
  {
     appState:state,
  }
  
  );
  
  const mapDispatchToProps=(dispatch)=>
  ({
    updateValue:(event)=>dispatch(Update_details(event)),
  });

  export default connect(mapStateToProps,mapDispatchToProps)(Content);



