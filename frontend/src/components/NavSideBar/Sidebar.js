/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import Icon from "awesome-react-icons";
import React, { useState } from "react";


import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

function Sidebar() {
  const history = useHistory();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <React.Fragment>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >
        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={[
            {
              title: "Thông tin tài khoản",
              itemId: "/changeInfo",
              // Optional
              elemBefore: () => <Icon name="user" />
            },
            {
              title: "Danh sách đặt trước",
              itemId: "/orderPark",
              elemBefore: () => <Icon name="watch" />
            },
            {
              title: "Lịch sử đỗ xe",
              itemId: "/historyPark",
              elemBefore: () => <Icon name="x" />,
            },
            {
              title: "Bãi đỗ yêu thích",
              itemId: "/lovePark",
              elemBefore: () => <Icon name="heart" />,
            },
            {
              title: "Đăng xuất",
              itemId: "/logOut",
              elemBefore: () => <Icon name='log-out'/>,

            
            }
          ]}
        />
      </div>
    </React.Fragment>
  );
};
export default Sidebar;
