import { FC, useState, useEffect, useContext } from "react";
import UserCard from "components/ui/UserCard";
import styles from "./List.module.scss";
import UsersContext from "context/UsersContext";
import SearchUsersContext from "context/SearchUsersContext";
import UserType from "types";

const List: FC = () => {
  const [displayedUsers, setDisplayedUsers] = useState<UserType[]>([]);
  const { users } = useContext(UsersContext);
  const { searchedUsers } = useContext(SearchUsersContext);

  useEffect(() => {
    if (searchedUsers.length) {
      return setDisplayedUsers(searchedUsers);
    }
    return setDisplayedUsers(users);
  }, [users, searchedUsers]);

  return (
    <div className={styles.container}>
      {displayedUsers.length &&
        displayedUsers.map((user: any) => <UserCard user={user} />)}
    </div>
  );
};

export default List;
