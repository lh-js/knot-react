import React, { ReactNode } from 'react';

type Param = {
  /**
   * @description 布局内容
   */
  children?: ReactNode | string;
  /**
   * @description 是否为虚线
   * @default false
   */
  dashed?: boolean;
  /**
   * @description 分割线标题的位置
   * @default center
   */
  orientation?: 'center' | 'right' | 'left';
  /**
   * @description 分割线标题离边缘的距离(百分比，仅orientation不为center时生效)
   * @default 5
   */
  textMargin?: number;
  /**
   * @description 分割线类型
   * @default horizontal
   */
  type?: 'vertical' | 'horizontal';
  /**
   * @description 分割线颜色
   * @default  rgba(0,0,0,0.1)
   */
  lineColor?: string;
};
export default ({
  children,
  dashed = false,
  orientation = 'center',
  textMargin = 5,
  type = 'horizontal',
  lineColor,
}: Param) => {
  return (
    <div
      className={`divider ${children ? 'has-child' : ''} ${
        dashed ? 'dashed' : ''
      } ${type === 'horizontal' ? orientation : ''} ${type} ${
        lineColor ? 'line-color' : ''
      }`}
      style={{
        //@ts-ignore
        '--textMargin': `${textMargin}%`,
        '--lineColor': lineColor,
      }}
    >
      {children ? <span className="divider-children">{children}</span> : null}
    </div>
  );
};
