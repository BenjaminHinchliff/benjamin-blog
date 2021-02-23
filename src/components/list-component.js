import * as React from 'react';

const ListComponent = ({children}) => {
  return children.map((child, i) => {
    return (
      <>
        {child}
        {i !== children.length - 1 && <hr />}
      </>
    );
  });
};

export default ListComponent;
