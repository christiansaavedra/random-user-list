import { ChangeEvent, FC, useContext, useState, useEffect } from "react";
import Input from "components/elements/Input";
import UsersContext from "context/UsersContext";
import SearchUsersContext from "context/SearchUsersContext";

const SearchBar: FC = () => {
  const [emailSearched, setEmailSearched] = useState("");
  const { users } = useContext(UsersContext);
  const { setSearchedUsers } = useContext(SearchUsersContext);

  const handleFilterByEmail = ({ value }: any) => {
    setEmailSearched(value);
  };

  useEffect(() => {
    if (emailSearched) {
      const filterByEmail = users.filter((user) =>
        user.email.includes(emailSearched)
      );
      return setSearchedUsers(filterByEmail);
    }
    return setSearchedUsers([]);
  }, [emailSearched, users, setSearchedUsers]);

  return (
    <Input
      name="search"
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        handleFilterByEmail(e.target)
      }
      placeholder="Buscar por nombre..."
      value={emailSearched}
    />
  );
};

export default SearchBar;
