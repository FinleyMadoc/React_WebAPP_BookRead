import React from 'react';
import './styles/index.scss';

export interface NavBarProps {
  // 点击返回区域后的回调
  onBack?: () => void;
  // 右侧内容
  right?: React.ReactNode;
  // 中间内容
  children?: React.ReactNode;
  // 能否显示通用区域的箭头
  leftArrow?: boolean;
  // 返回区域文件
  leftText?: string;
  // 样式
  style?: React.CSSProperties & Partial<Record<'-nav-bar-height' | '-border-bottom', string>>;
}

const classPrefix = 'ygm-nav-bar';

const NavBar: React.FC<NavBarProps> = (props) => {
  return (
    <div className={classPrefix}>
      <div className={`${classPrefix}-left`} onClick={props.onBack}>
        {props.leftArrow && (
          <div className={`${classPrefix}-left-icon`}>
            <i className="icon-arrow-left2" />
          </div>
        )}

        <div className={`${classPrefix}-left-text`}>{props.leftText}</div>
      </div>
      <div className={`${classPrefix}-title`}>{props.children}</div>
      <div className={`${classPrefix}-right`}>{props.right}</div>
    </div>
  );
};

NavBar.defaultProps = {
  leftText: '',
  leftArrow: true,
};

NavBar.displayName = 'NavBar';
export default NavBar;