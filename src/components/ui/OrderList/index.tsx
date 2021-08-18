import { FC, useState, useContext, useEffect } from "react";
import { FaSort } from "react-icons/fa";
import styles from "./OrderList.module.scss";
import UsersContext from "context/UsersContext";
import UserType from "types";

const OrderList: FC = () => {
  const [sortByAscendingEmail, setSortByAscendingEmail] = useState(false);

  const { users, setUsers } = useContext(UsersContext);

  const handleSort = () => {
    if (users.length) {
      const sorted = users.sort((a: UserType, b: UserType) => {
        if (sortByAscendingEmail) {
          return a.email.localeCompare(b.email);
        }
        return b.email.localeCompare(a.email);
      });

      setSortByAscendingEmail(!sortByAscendingEmail);
      setUsers([...sorted]);
    }
  };

  return <FaSort className={styles.icon} onClick={() => handleSort()} />;
};

export default OrderList;
