import React, { ReactNode, useMemo } from 'react';
import RowContext from './RowContext';
type Param = {
  /**
   * @description 布局栅格
   */
  children?: ReactNode;
  /**
   * @description 栅格间隔,数组分别为水平间隔和垂直间隔
   * @default [0,0]
   */
  gutters?: number[];
};

export default ({ children, gutters = [0, 0] }: Param) => {
  const [gutterH, gutterV] = gutters;
  const rowContext = useMemo(
    () => ({ gutters: [gutterH, gutterV] as [number, number] }),
    [gutterH, gutterV],
  );
  return (
    <RowContext.Provider value={rowContext}>
      <div
        className="col"
        children={children}
        style={{
          //@ts-ignore
          '--gutterH': `${gutters[0]}px`,
          '--gutterV': `${gutters[1]}px`,
        }}
      ></div>
    </RowContext.Provider>
  );
};
