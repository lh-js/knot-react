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
   * @description 按钮类型
   * @default default
   */
  type?:
    | 'default'
    | 'dashed'
    | 'text'
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger';
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 是否显示波纹特效
   * @default true
   */
  isWave?: boolean;
  /**
   * @description 点击回调函数
   */
  onClick?: () => void;
};
export default ({
  children = 'Default',
  width = 74,
  height = 34,
  type = 'default',
  disabled = false,
  isWave = true,
  onClick,
}: Param) => {
  const buttonClick = () => {
    if (disabled) return;
    onClick && onClick();
  };

  return (
    <OutWave
      //@ts-ignore
      type={type}
      disabled={disabled || !isWave}
    >
      <button
        children={children}
        className={`button ${disabled ? 'disabled' : ''} ${type}`}
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
