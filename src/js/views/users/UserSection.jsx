// @flow

import React from 'react';

type Props = {
  match: {
    params: {
      userId: string,
    },
  },
};

const UserSection = (props: Props) => (
  <div>
    <p>User Id Selected: {props.match.params.userId}</p>
  </div>
);

export default UserSection;
