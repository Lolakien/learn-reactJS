import React from 'react';
import PropTypes from 'prop-types';
import TodoLst from './Components/TodoLst';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const todolst = [{
        id: 1,
        title: 'Eat'
    },
    {
        id: 2,
        title: 'Sleep'
    },
    {
        id: 3,
        title: 'Code'
    }
    ]


    return (
        <div>
            <h3>Todo List</h3>
            <TodoLst todoLst={todolst} />
        </div>
    );
}

export default TodoFeature;