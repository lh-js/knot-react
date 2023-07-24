import React, { ReactNode } from 'react';

type Param = {
  /**
   * @description 布局内容
   * @default
   */
  children: ReactNode | string;
  /**
   * @description 间距方向
   * @default horizontal
   */
  direction: 'horizontal' | 'vertical';
  /**
   * @description 间距大小
   * @default 8
   */
  spaceSize?: number;
  /**
   * @description 对齐方式
   * @default center
   */
  align: 'start' | 'end' | 'center' | 'baseline';
  /**
   * @description 是否自动换行，仅在 horizontal 时有效
   * @default false
   */
  wrap?: boolean;
};
export default ({
  children,
  direction = 'horizontal',
  spaceSize = 8,
  align = 'center',
  wrap = false,
}: Param) => {
  return (
    <div
      className={`space ${direction} ${align} ${wrap ? 'wrap' : ''}`}
      children={children}
      style={{
        //@ts-ignore
        '--spaceSize': `${spaceSize}px`,
      }}
    ></div>
  );
};
