import React, { ReactNode } from 'react';

type Param = {
  /**
   * @description 布局内容
   */
  children?: ReactNode | string;
  /**
   * @description 间距方向
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * @description 主轴间距大小
   * @default 8
   */
  spaceSize?: number;
  /**
   * @description 垂直轴间距大小，换行后生效
   * @default 8
   */
  vSpaceSize?: number;
  /**
   * @description 对齐方式
   * @default center
   */
  align?: 'start' | 'end' | 'center' | 'baseline';
  /**
   * @description 是否自动换行，仅在 horizontal 时有效
   * @default false
   */
  wrap?: boolean;
  /**
   * @description 内容反转
   * @default false
   */
  reverse?: boolean;
};
export default ({
  children,
  direction = 'horizontal',
  spaceSize = 8,
  vSpaceSize = 8,
  align = 'center',
  wrap = false,
  reverse = false
}: Param) => {
  return (
    <div
      className={`space ${direction} ${align} ${wrap ? 'wrap' : ''} ${reverse ? 'reverse' : ''}`}
      children={children}
      style={{
        //@ts-ignore
        '--spaceSize': `${spaceSize}px`,
        '--vSpaceSize': `${vSpaceSize}px`,
      }}
    ></div>
  );
};
