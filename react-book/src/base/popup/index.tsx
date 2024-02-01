import React from "react";
import cx from 'classnames';
import {useSpring,animated} from '@react-spring/web';

// import { Mask } from "@taoyage/react-mobile-ui";
import Mask from "../mask";

import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import './styles/index.scss';

export interface PopupProps {
    // 指定弹出的位置
    position?: 'left' | 'top' | 'bottom' | 'right';
    // 内容区域style属性
    style?: React.CSSProperties;
    // 内容区域类名
    className?: string;
    // 是否可见
    visible: boolean;
    children?: React.ReactNode;
    // 是否展示蒙版
    mask?: boolean;
    // 点击蒙层回调
    onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    // 显示后回调
    afterShow?: () => void;
    // 关闭后回到
    afterClose?: () => void;
}

const classPrefix = 'ygm-popup';

const Popup: React.FC<PopupProps> = (props) => {
    const {percent} = useSpring({
        percent: props.visible ? 0 : 100,
        config: {
            precision: 0.1,
            mass: 0.4,
            tension: 300,
            friction: 30
        },
        onRest: () => {
            if(props.visible) {
                props.afterShow?.();
            }
        }
    });
    
    return <div className={classPrefix}>
        {props.mask && <Mask visible={props.visible} onMaskClick={props.onMaskClick} />}
        <animated.div className={cx(`${classPrefix}-body`, `${classPrefix}-${props.position}`, props.className)}
            style={{
                ...props.style,
                transform: percent.to((v) => {
                    if(props.position === 'left') {
                        return `translate(-${v}%, 0)`
                    }else if(props.position === 'bottom') {
                        return `translate(0, ${v}%)`
                    }else if(props.position === 'right') {
                        return `translate(${v}%, 0)`
                    } else if(props.position === 'top') {
                        return `translate(0, -${v}%)`
                    }
                    return `none`
                })
            }}
        >
            {props.children}
        </animated.div>
    </div>
}

Popup.defaultProps = {
    visible: false,
    position: 'left',
    mask: true
}

Popup.displayName = 'Popup';

export default Popup;