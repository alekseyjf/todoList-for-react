import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getTasks} from "../../redux/actions";
import TodoListItem from "../../components/todo-list-item";

import json from '../../services/tasks.json';

const STATUS_ACTIVE = 'active';

const TodoList = (props) => {
  const {tasks, getTasks} = props;
  useEffect(()=>{
    if(tasks.length == 0) {
      getTasks(json)
    }
  },[]);

  const todoList = tasks.reduce((accum, item) => {
    if (item.obj_status === STATUS_ACTIVE) {
      const importantClass = item.is_high_priority ? 'important' : null
      accum.push(
        <tr key={item.id} className={importantClass}>
          <TodoListItem item={item} />
        </tr>,
      );
    }
    return accum
  }, [])


  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>Tags</th>
          <th>Name</th>
          <th>working hours</th>
          <th>estimated time to work</th>
          <th>time to work end</th>
        </tr>
        </thead>
        <tbody>{todoList}</tbody>
      </table>
    </div>
  )
}

const mapStateToProps = ({tasks}) => ({tasks})

const mapDispatchToProps = {
  getTasks
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)