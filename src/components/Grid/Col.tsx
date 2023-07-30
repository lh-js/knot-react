import React, { ReactNode } from 'react';
import RowContext from './RowContext';

type RowParam = {
  /**
   * @description 布局内容
   */
  children?: ReactNode | string;
  /**
   * @description 栅格占位格数
   */
  span: number | 'auto';
  /**
   * @description 栅格左侧的间隔格数，间隔内不可以有栅格
   * @default 0
   */
  offset?: number;
  /**
   * @description 是否填满剩下空间
   * @default false
   */
  fill?: boolean;
};

export default ({ children, span, offset = 0, fill = false }: RowParam) => {
  const { gutters, columns } = React.useContext(RowContext);

  const getSpan = (span: number | string) => {
    console.log(typeof span);
    if (typeof span === 'number') {
      return `${(span / columns) * 100}%`;
    } else {
      return 'auto';
    }
  };
  return (
    <div
      className="row"
      children={children}
      style={{
        //@ts-ignore
        '--span': getSpan(span),
        '--gutterH': `${gutters && gutters[0]}px`,
        '--offset': `${(offset / columns) * 100}%`,
      }}
    ></div>
  );
};
