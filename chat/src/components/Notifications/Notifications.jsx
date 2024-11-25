import React from "react";
import "./Notifications.css";

function Notifications({ isNotificationsOpen, toggleNotifications }) {
    return (
        <div className={`notifications-container`} onClick={toggleNotifications}>
            <div className={`notifications-form`} onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={toggleNotifications}>
                    &times;
                </button>
                <h2>Notifications</h2>
                {/* <input type="text" placeholder="Search something..." /> */}
            </div>
        </div>
    );
}

export default Notifications;