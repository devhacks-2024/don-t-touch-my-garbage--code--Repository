import React from "react";
import '../styles/profile.css';

function Profile() {
    // Sample user data
    const user = {
        name: "John Doe",
        gender: "Male",
        bio: `👋 Hey there! I'm a software engineer by day, coding wizard by night, and hopeless romantic all the time. 💻❤️ I spend my days crafting lines of code that are more reliable than my dating history. 😄 When I'm not debugging, you'll find me debugging my love life, desperately trying to find the perfect match algorithm. 🤓 If you're into nerdy jokes, spontaneous adventures, and late-night coding sessions followed by Netflix marathons, then swipe right! Let's debug life's glitches together and create some unforgettable memories. 🚀💕`,
        interests: ["Hiking", "Reading", "Traveling"]
    };

    return (
        <div className="profile">
            <h2>Profile</h2>
            <div className="profile-info">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Gender:</strong> {user.gender}</p>
                <p><strong>Bio:</strong> {user.bio}</p>
                <p><strong>Interests:</strong></p>
                <ul>
                    {user.interests.map((interest, index) => (
                        <li key={index}>{interest}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Profile;
