import React, { ReactNode } from 'react';

type RowParam = {
  /**
   * @description 布局内容
   */
  children?: ReactNode | string;
  /**
   * @description 栅格占位格数，为 0 时相当于 display: none
   */
  span: number;
};

export default ({ children, span }: RowParam) => {
  return (
    <div
      className="row"
      children={children}
      style={{
        //@ts-ignore
        '--span': `${(span / 24) * 100}%`,
      }}
    ></div>
  );
};
