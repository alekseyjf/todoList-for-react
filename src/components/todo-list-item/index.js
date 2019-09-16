import React from "react";
import {Link} from "react-router-dom";

const getReadDate = (date) => {
  const newDate = new Date(date),
    year = newDate.getFullYear(),
    month =
      newDate.getMonth() + 1 < 10
        ? '0' + (newDate.getMonth() + 1)
        : newDate.getMonth() + 1,
    day = newDate.getDate(),
    hours =
      newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours(),
    minutes =
      newDate.getMinutes() < 10
        ? '0' + newDate.getMinutes()
        : newDate.getMinutes(),
    readDate = date
      ? `${year} : ${month} : ${day} | ${hours} : ${minutes}`
      : null
  return readDate
}

const TodoListItem = ({item}) => {
  const { tags, id, name, actual_effort, estimated_effort, due_date } = item,
        readDate = getReadDate(due_date);

  return (
    <>
      <td>{tags}</td>
      <td>
        <Link to={`task/${id}/`}>{name}</Link>
      </td>
      <td>{actual_effort}</td>
      <td>{estimated_effort}</td>
      <td>{readDate}</td>
    </>
  )
}

export default TodoListItem;