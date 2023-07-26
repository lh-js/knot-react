import React, { ReactNode } from 'react';
import RowContext from './RowContext';

type RowParam = {
  /**
   * @description 布局内容
   */
  children?: ReactNode | string;
  /**
   * @description 栅格占位格数，为 0 时相当于 display: none（24格数占100%）
   */
  span: number;
  /**
   * @description 栅格左侧的间隔格数，间隔内不可以有栅格
   */
  offset?: number;
};

export default ({ children, span, offset = 0 }: RowParam) => {
  const { gutters } = React.useContext(RowContext);
  return (
    <div
      className="row"
      children={children}
      style={{
        //@ts-ignore
        '--span': `${(span / 24) * 100}%`,
        '--gutterH': `${gutters && gutters[0]}px`,
        '--offset': `${(offset / 24) * 100}%`,
      }}
    ></div>
  );
};
