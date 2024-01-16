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
    // 是否自动换行
    wrap?: boolean
}