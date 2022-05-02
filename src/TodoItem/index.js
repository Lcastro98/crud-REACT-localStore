import React from 'react';
import './TodoItem.css';
import {DateTimePicker} from '@material-ui/pickers';

function TodoItem(props) {

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        ✔
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
			<label className='TodoDate'>Fecha y Hora
          <DateTimePicker value={selectedDate} onChange={setSelectedDate} />
      </label>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };
