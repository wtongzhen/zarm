import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class PanelHeader extends PureComponent {
  render() {
    const { prefixCls, className, children, ...others } = this.props;

    const cls = classnames({
      [`${prefixCls}`]: true,
      [className]: !!className,
    });

    return <div {...others} className={cls}>{children}</div>;
  }
}

PanelHeader.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
};

PanelHeader.defaultProps = {
  prefixCls: 'za-panel-header',
  className: null,
};

export default PanelHeader;
