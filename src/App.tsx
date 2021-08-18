import { useState, useEffect } from "react";
import "./styles.scss";
import List from "components/ui/List";
import SearchBar from "components/ui/SearchBar";
import OrderList from "components/ui/OrderList";
import UsersContext from "context/UsersContext";
import SearchUsersContext from "context/SearchUsersContext";

export default function App() {
  const [users, setUsers] = useState([]);
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setError("");

    const fetchUsers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        const json = await response.json();
        setUsers(json.results);
      } catch (error) {
        setError("Hubo un error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <SearchUsersContext.Provider value={{ searchedUsers, setSearchedUsers }}>
        <div className="App">
          {isLoading ? (
            <h1 className="information-text">Loading...</h1>
          ) : error ? (
            <h1 className="error">{error}</h1>
          ) : (
            <>
              <div className="navbar">
                <SearchBar />
                <OrderList />
              </div>
              <List />
            </>
          )}
        </div>
      </SearchUsersContext.Provider>
    </UsersContext.Provider>
  );
}
