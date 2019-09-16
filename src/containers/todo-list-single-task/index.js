import React, { useState, useEffect } from "react";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {updateTasks, getSingleTask} from "../../redux/actions";

const api = async (url, body) =>  {
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: body
  });

  return res.json()
};

const SingleTask = (props) => {
  const {
    match: {
      params: { id },
    },
    getSingleTask,
    singleTask,
    singleTask: { name, description },
    updateTasks,
    loaded,
    tasks
  } = props;

  const [isEditable, setIsEditable] = useState(false);
  const [label, editLabel] = useState('');

  useEffect(()=>{
    if(description && !label ) {
      editLabel(description)
    }
  }, [description]);
  useEffect(() => {
    getSingleTask(id)
  }, []);

  const deskEdit = (e) => {
    editLabel(e.target.value)
  };
  const submitDesk = (e) => {
    e.preventDefault();
    setIsEditable(!isEditable)

    const idx = tasks.findIndex((el) => el.id === +id);
    const copyElem = {...singleTask, description: label};

    const newTasks = [
      ...tasks.slice(0, idx),
      copyElem,
      ...tasks.slice(idx + 1)
    ];

    updateTasks(newTasks)
    api('http://some-url', newTasks)
  };

  const deskEditable = !isEditable ?
    (<p onClick={()=>{setIsEditable(!isEditable)}}>{label}</p>)
    : (<form onSubmit={submitDesk}><input autoFocus type="text" onChange={deskEdit} defaultValue={label}/></form>);

  return (
    <div className="container">
      {loaded ? (
        <>
          <Link to="/">Back</Link>
          <div>{name}</div>
          {deskEditable}
        </>
      ) : (
        <>
          <Link to="/">Back</Link>
          <h2>ЗАГРУЗКА</h2>
        </>
      )}
    </div>
  )
};

const mapStateToProps = ({tasks, singleTask, loaded}) => ({tasks, singleTask, loaded });
const mapDispatchToProps = {
  getSingleTask,
  updateTasks
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleTask))