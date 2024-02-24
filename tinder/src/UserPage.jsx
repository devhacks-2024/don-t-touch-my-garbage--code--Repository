import React from "react";
import "./styles/user_page.css";

import Photo from './userPageComponents/Photo.jsx';
import Profile from './userPageComponents/Profile.jsx';

function UserPage() {
    return (
        <div>
            <div className="container">
                <Photo/>
                <Profile/>
                <button type="submit" className="save-button">Save</button>
            </div>
        </div>
        // <div className="user-preferences">
        //     <h2>User Preferences</h2>
        //     <form id="preferences-form">
        //         <label htmlFor="name">Name:</label>
        //         <input type="text" id="name" name="name" />
        //         <label htmlFor="gender">Gender:</label>
        //         <select id="gender" name="gender">
        //             <option value="male">Male</option>
        //             <option value="female">Female</option>
        //             <option value="other">Other</option>
        //         </select>
        //         <label htmlFor="dark-mode">Dark Mode:</label>
        //         <input type="checkbox" id="dark-mode" name="dark-mode" />
        //         <label htmlFor="notifications">Notifications:</label>
        //         <input type="checkbox" id="notifications" name="notifications" />
        //         <label htmlFor="language">Language:</label>
        //         <select id="language" name="language">
        //             <option value="english">English</option>
        //             <option value="spanish">Spanish</option>
        //             <option value="french">French</option>
        //         </select>
        //         <button type="submit" className="save-button">Save</button>
        //     </form>
        // </div>
    );
}

export default UserPage;
