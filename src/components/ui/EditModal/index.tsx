import React, { useState, useContext } from "react";
import Input from "components/elements/Input";
import Button from "components/elements/Button";
import UsersContext from "context/UsersContext";
import UserType from "types";
import styles from "./EditModal.module.scss";

interface EditModalProps {
  user: UserType;
  setEditMode: Function;
}

const EditModal: React.FC<EditModalProps> = ({ user, setEditMode }) => {
  const [userEditedData, setUserEditedData] = useState(user);
  const { users, setUsers } = useContext(UsersContext);

  const handleOnChange = ({ name, value }: { name: string; value: string }) => {
    setUserEditedData({ ...userEditedData, [name]: value });
  };

  const handleSubmit = () => {
    const findIndexOfEditedUser = users.findIndex(
      (u: UserType) => u.id.value === userEditedData.id.value
    );

    users[findIndexOfEditedUser] = userEditedData;

    setEditMode(false);
    setUsers([...users]);
  };

  return (
    <div className={styles.container}>
      <Input
        name={"email"}
        value={userEditedData.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleOnChange(e.target)
        }
        placeholder={"Email"}
      />

      <Button label="Save" onClick={handleSubmit} />
    </div>
  );
};

export default EditModal;
