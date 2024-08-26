import React from 'react';
import PropTypes from 'prop-types';


TodoLst.propTypes = {
    todoLst: PropTypes.array,
};
TodoLst.defaultProps = {
    todoLst: [],
};
function TodoLst({ todoLst }) {

    return (
        <ul>
            {todoLst.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoLst;