import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const Div = ({children, ...rest}) => <div {...rest}>{children}</div>
//전달받은 값들이 rest안에 들어있음, JSX에서 ...을 사용하면 값을 props에 넣어줌

const Button = ({children, to, onClick, disabled, theme = 'default',}) => {
  //to 값이 존재하면 Link사용, 아니면 div 사용
  const Element = (to && !disabled) ? Link : Div;
  return(
    <Element
      to={to}
      className={cx('button', theme, {disabled})}
      onClick={disabled ? () => null : onClick}>
      {children}
    </Element>
  )
}

export default Button;