import React, { ReactNode } from 'react';

type Param = {
  /**
   * @description 布局栅格
   */
  children?: ReactNode;
  /**
   * @description 栅格间隔
   * @default 8
   */
  gutter?: number;
};

export default ({ children, gutter = 8 }: Param) => {
  return (
    <div
      className="col"
      children={children}
      style={{
        //@ts-ignore
        '--gutter': `${gutter}px`,
      }}
    ></div>
  );
};
