import './Todoitems.css'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const Todoitems = ({no,task,display,setTodos}) => {

  const showmydisplay = (no) =>{
    let data = JSON.parse(localStorage.getItem("todos"));
    if (data[no].display==="") {
      data[no].display = "done";
  } else {
      data[no].display = "";
  }
    setTodos(data);

  }
  const deletetask = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((item,index) => {
        return index!== no
    });
    setTodos(data);
    


  }
  return (
    <div className='todoitem'>
        
        <div className="item-container" >
        <div onClick={()=>{showmydisplay(no)}} className='item-check'>{display===""? <button className='check-btn'>Check</button>:<IoMdCheckmarkCircleOutline size={26}/>
        }</div>
        <div className={`item-task`}>{task}</div>
        </div>
        <div className='item-btns'>
        <div className="item-delete" onClick={() => {deletetask(no)}}>Delete</div>

        </div>

    </div>
  )
}


export default Todoitems
