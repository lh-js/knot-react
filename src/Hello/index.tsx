import React, { type FC } from 'react';

const Hello: FC<{ title: string }> = (props) => <h4>{props.title}</h4>;

export default Hello;
