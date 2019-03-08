import React from 'react';

const ListGroup = ({ items, textProperty, valueProperty, onItemSelect, selectedItem, allMovies }) => {
    return (
        <ul className="list-group">
            {items.map(item =>
                <li
                    key={item[valueProperty]}
                    onClick={() => onItemSelect(item)}
                    className={item === selectedItem
                        ? "list-group-item list-group-item-light list-group-item-dark d-flex justify-content-between align-items-center"
                        : "list-group-item list-group-item-light d-flex justify-content-between align-items-center"
                    }
                >
                    {item[textProperty]}
                    <span className="badge badge-secondary">
                        {allMovies.filter(m => m.genre.name === item.name).length}
                    </span>
                </li>
            )}
        </ul>
    )
}

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: "_id"
}

export default ListGroup;