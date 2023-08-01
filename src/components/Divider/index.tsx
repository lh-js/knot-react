import React, { ReactNode } from 'react';

type Param = {
  /**
   * @description 布局内容
   */
  children?: ReactNode | string;
};
export default ({ children }: Param) => {
  return (
    <div className="divider">
      <span className="divider-children">{children}</span>
    </div>
  );
};
