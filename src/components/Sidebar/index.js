import React from "react";
import PropTypes from "prop-types";
import { Sidebar as SUIRSidebar , SidebarPushable, SidebarPusher} from "@infinitecsolutions/semantic-ui-react";

const Sidebar = props => {
  return <SUIRSidebar {...props} />;
};

Sidebar.Pusher = SidebarPusher;
Sidebar.Pushable = SidebarPushable;

Sidebar.propTypes = {

  /** Animation style. */
  animation: PropTypes.oneOf([
    'overlay',
    'push',
    'scale down',
    'uncover',
    'slide out',
    'slide along',
  ]),

  /** Additional classes. */
  className: PropTypes.string,

  /** Initial value of visible. */
  defaultVisible: PropTypes.bool,

  /** Direction the sidebar should appear on. */
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /** Controls whether or not the sidebar is visible on the page. */
  visible: PropTypes.bool,

  /** Sidebar width. */
  width: PropTypes.oneOf(['very thin', 'thin', 'wide', 'very wide']),
}

Sidebar.displayName = 'Sidebar';

export default Sidebar;
