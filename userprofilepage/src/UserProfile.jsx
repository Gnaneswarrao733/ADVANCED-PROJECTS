import React, { useState } from 'react';

const UserProfile = () => {
  
  const initialUserData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Lorem ipsum dolor sit amet.',
  };

  const [userData, setUserData] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = (e) => {
    e.preventDefault();
    
    console.log('User data saved:', userData);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <form onSubmit={handleSave}>
        <div>
          <label>Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
            />
          ) : (
            <p>{userData.name}</p>
          )}
        </div>
        <div>
          <label>Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          ) : (
            <p>{userData.email}</p>
          )}
        </div>
        <div>
          <label>Bio:</label>
          {isEditing ? (
            <textarea
              name="bio"
              value={userData.bio}
              onChange={handleChange}
            />
          ) : (
            <p>{userData.bio}</p>
          )}
        </div>
        <button type="button" onClick={handleEditToggle}>
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
        {isEditing && <button type="submit">Save</button>}
      </form>
    </div>
  );
};

export default UserProfile;
