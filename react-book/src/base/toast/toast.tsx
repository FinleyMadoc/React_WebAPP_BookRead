import React from 'react';
import cx from 'classnames';
import { CheckOutline, CloseOutline } from 'antd-mobile-icons';

import SpinnerLoading from '@/base/spinner-loading';

import './styles/index.scss';

export interface ToastProps {
    // 提示持续时间
    duration?: number;
    // Toast文本内容
    content: React.ReactNode;
    // Toast关闭后的回调
    afterClose?: () => void;
    // 卸载当前Toast的DOM
    unmount?: () => void;
    // Toast图标
    icon?: 'success' | 'fail' | 'loading' | React.ReactNode;
}

const classPrefix = 'ygm-toast';

const Toast: React.FC<ToastProps> = (props) => {
    
}