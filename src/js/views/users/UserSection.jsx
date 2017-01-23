// @flow

import React from 'react';

type Props = {
  params: {
    userId: string,
  },
};

const UserSection = (props: Props) => (
  <div>
    <p>User Id Selected: {props.params.userId}</p>
  </div>
);

export default UserSection;
