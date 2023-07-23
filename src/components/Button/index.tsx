import { OutWave } from 'lh-ui-react';
import React, { ReactNode } from 'react';

type Param = {
  /**
   * @description 按钮内容
   * @default Default
   */
  children: ReactNode | string;
  /**
   * @description 宽度
   * @default 74
   */
  width?: number;
  /**
   * @description 高度
   * @default 34
   */
  height?: number;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 点击回调函数
   */
  onClick?: () => void;
};
export default ({
  children = 'Default',
  width = 74,
  height = 34,
  disabled = false,
  onClick,
}: Param) => {
  const buttonClick = () => {
    if (disabled) return;
    onClick && onClick();
  };

  return (
    <OutWave disabled={disabled}>
      <button
        children={children}
        className={`button ${disabled ? 'disabled' : ''}`}
        style={{
          //@ts-ignore
          '--width': `${width}px`,
          '--height': `${height}px`,
        }}
        onClick={buttonClick}
      ></button>
    </OutWave>
  );
};
