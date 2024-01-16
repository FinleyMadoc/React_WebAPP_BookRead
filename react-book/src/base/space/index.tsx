import React from 'react';
import cx from 'classnames';

import './styles/index.scss';

export interface SpaceProps {
    // 间距方向
    direction?: 'horizontal' | 'vertical';
    // 交叉轴对齐方向
    align?: 'start' | 'end' | 'center' | 'baseline';
    // 主轴对齐方向
    justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
    // 是否自动换行, 仅在horizontal的时候有效
    wrap?: boolean;
    // 是否渲染为块级元素
    block?: boolean;
    // 间距大小
    gap?: number | string | [number | string, number | string];
    // 元素点击事件
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    children?: React.ReactNode;
}

const classPrefix = `ygm-space`;

const Space: React.FC<SpaceProps> = (props) => {
    return <div></div>
}

Space.defaultProps = {
    direction: 'horizontal',
    block: true,
}

Space.displayName = 'Space';
export default Space;