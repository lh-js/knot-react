import React, { ReactNode, useEffect, useRef, useState } from 'react';

type Param = {
  /**
   * @description 子组件
   */
  children: ReactNode;
  /**
   * @description 阴影宽度
   * @default 8
   */
  shadowWidth?: number;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
};
export default ({ children, shadowWidth = 8, disabled = false }: Param) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [divStyle, setDivStyle] = useState<CSSStyleDeclaration>();
  useEffect(() => {
    const style = getFirstChildElementStyle(parentRef.current);
    if (!style) return;
    setDivStyle(style);
  }, []);

  function getFirstChildElementStyle(parent: HTMLDivElement | null) {
    // 获取父元素的引用
    const parentElement: HTMLDivElement | null = parent;

    if (parentElement) {
      // 获取第一个子元素
      const firstChildElement = parentElement.firstElementChild;

      if (firstChildElement) {
        // 获取子元素的样式
        firstChildElement.setAttribute(
          'style',
          firstChildElement.getAttribute('style') + ';box-sizing: border-box',
        );
        return window.getComputedStyle(firstChildElement);
      }

      return;
    }
    return;
  }
  return (
    <div
      ref={parentRef}
      children={children}
      className={`out-wave ${disabled ? 'disabled' : ''}`}
      style={{
        //@ts-ignore
        '--width': divStyle?.width,
        '--height': divStyle?.height,
        '--radius': divStyle?.borderRadius,
        '--shadowWidth': `${shadowWidth}px`,
      }}
    ></div>
  );
};
