import * as React from 'react';

const ListComponent = ({children}) => {
  return children.map((child, i) => {
    return (
      <div key={child.key}>
        {child}
        {i !== children.length - 1 && <hr />}
      </div>
    );
  });
};

export default ListComponent;
