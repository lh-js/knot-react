import { OutWave } from 'knot-react';
import React, { useState } from 'react';
type Param = {
  /**
   * @description 开或关
   * @default false
   */
  isChecked?: boolean;
  /**
   * @description 大小
   * @default 1
   */
  size?: number;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 开启状态显示（文字最大长度为1）
   * @default
   */
  onText?: string;
  /**
   * @description 关闭状态显示（文字最大长度为1）
   */
  offText?: string;
  /**
   * @description 状态是否完全由父组件维护
   * @default false
   */
  controll?: boolean;
  /**
   * @description 状态改变回调函数
   */
  onChange?: (isChecked: boolean) => void;
};

export default ({
  isChecked = false,
  size = 1,
  disabled = false,
  onText = '',
  offText = '',
  controll = false,
  onChange,
}: Param) => {
  const [isOn, setIsOn] = useState(isChecked);

  const switchClick = () => {
    if (disabled) return;
    onChange && onChange(!getValue(controll));
    if (controll) return;
    setIsOn(!getValue(controll));
  };

  const getValue = (controll: boolean) => {
    return controll ? isChecked : isOn;
  };

  return (
    <OutWave disabled={disabled}>
      <div
        className={`switch ${disabled ? 'disabled' : ''} ${
          getValue(controll) ? 'on-color' : 'off-color'
        }`}
        style={{
          //定义css变量，忽略ts检查
          //@ts-ignore
          '--width': `${size * 44}px`, //按钮宽度
          '--height': `${size * 22}px`, //按钮高度
          '--circleWidth': `${size * (22 - 4)}px`, //圆形label直径
          '--circleRight': `${2 * size}px`, //圆形label到边缘距离
          '--translateX': getValue(controll) ? 0 : `${-22 * size}px`, //label移动距离
          '--textPadding': `${size * 8}px`, //文字距离边缘距离
          '--textSize': `${size * 12}px`, //文字大小
          '--onText': onText,
          '--offText': offText,
        }}
        onClick={switchClick}
      >
        <span className="off-text">
          {typeof offText == 'string' ? offText.slice(0, 1) : offText}
        </span>
        <div className={`switch-label`}>
          <span className="on-text">
            {typeof onText == 'string' ? onText.slice(0, 1) : onText}
          </span>
        </div>
      </div>
    </OutWave>
  );
};
