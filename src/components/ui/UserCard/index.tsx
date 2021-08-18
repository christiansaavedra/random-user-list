import React, { useState } from "react";
import EditModal from "components/ui/EditModal";
import UserType from "types";
import styles from "./UserCard.module.scss";
import { FaEdit } from "react-icons/fa";

interface UserCardProps {
  user: UserType;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [editMode, setEditMode] = useState(false);

  const { name, email, location, phone, picture } = user;

  const handleUserEdit = () => {
    setEditMode(!editMode);
  };

  return (
    <div className={styles.card}>
      {editMode && <EditModal user={user} setEditMode={setEditMode} />}
      <div className={styles.banner}>
        <FaEdit
          onClick={() => handleUserEdit()}
          className={styles.editButton}
        />
        <h2>
          {name.first} {name.last}
        </h2>

        <img
          src={picture.large}
          alt={`${name.first} ${name.last}`}
          className={styles.avatar}
        />
      </div>
      <div className={styles.cardBody}>
        <h2>{email}</h2>
        <h2>{phone}</h2>
        <h2>
          {location.state}, {location.country}
        </h2>
      </div>
    </div>
  );
};

export default UserCard;
