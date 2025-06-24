import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'plain';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  iconName?: string;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  pop?: boolean;
}

interface ButtonAsButton extends BaseButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  href?: never;
  target?: never;
  rel?: never;
}

interface ButtonAsLink extends BaseButtonProps {
  href: string;
  target?: string;
  rel?: string;
  onClick?: never;
  type?: never;
}

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className,
  icon,
  iconName,
  iconPosition = 'left',
  fullWidth = false,
  pop = false,
  ...props
}) => {
  const baseClasses = clsx(
    styles.button,
    styles[variant],
    styles[size],
    {
      [styles.disabled]: disabled,
      [styles.fullWidth]: fullWidth,
      [styles.withIcon]: !!icon,
      [styles.pop]: pop,
    },
    className
  );

  let iconElement = icon && (
    <span className={clsx(styles.icon, styles[`icon-${iconPosition}`])}>{icon}</span>
  );

  if (iconName) {
    iconElement = (
      <i
        className={clsx(styles.icon, styles[`icon-${iconPosition}`], `codicon codicon-${iconName}`)}
      />
    );
  }

  const content = (
    <>
      {iconPosition === 'left' && iconElement}
      <span className={styles.content}>{children}</span>
      {iconPosition === 'right' && iconElement}
    </>
  );

  if ('href' in props && props.href) {
    const { href, target, rel, ...linkProps } = props;
    return (
      <a href={href} target={target} rel={rel} className={baseClasses} {...linkProps}>
        {content}
      </a>
    );
  }

  const { onClick, type = 'button', ...buttonProps } = props as ButtonAsButton;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...buttonProps}
    >
      {content}
    </button>
  );
};

export default Button;
