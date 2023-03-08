import { ReactNode, useEffect, useState } from "react";

import "./notification.css";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

function Notification(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div className="notification-model-overlay" onClick={props.toggle}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="notification-modal-box"
          >
            <div className="notification-form">
              <h1 className="notification-h1">Notification</h1>
              <div className="notification-container">
                <div>
                  <div className="notification-card">
                    <div className="notification-card-user">
                      <span className="notification-name">No notifications at this time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}

export default Notification;
