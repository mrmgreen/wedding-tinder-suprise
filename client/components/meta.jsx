import React from 'react';

function meta(props) {
  return (
    <div>
      <div>
        { props.occupation }
      </div>
      <div>
        { props.name }
      </div>
      <div>
        { props.age }
      </div>
      <div>
        { props.bio }
      </div>
    </div>
  )
}

meta.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  bio: React.PropTypes.string,
  occupation: React.PropTypes.string,
}

export default meta;
