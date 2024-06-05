import { useEffect, useState } from "react";
import RecipeReviewCard from "./RecipeReviewCard";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const getUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res.data);
    setUsers(res.data);
  };

  const getUser = (e) => {
    e.preventDefault();
    console.log(search);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="flex min-h-screen h-full flex-col bg-gradient-to-br from-blue-800 to-violet-600 gap-20 p-10 items-center">
      <form
        onSubmit={getUser}
        className="abg-white relative mt-8 w-full max-w-sm space-y-2 overflow-hidden rounded-lg px-4 sm:mx-auto sm:space-y-0"
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-md px-5 py-2 text-center text-black outline-none sm:text-left"
          type="text"
          placeholder="Search for a user"
          required
        />
        <button
          type="submit"
          className="right-0 w-full rounded-md bg-black px-8 py-2 text-white sm:absolute sm:w-auto sm:rounded-none"
        >
          Search
        </button>
      </form>
      <div className="flex gap-20 flex-wrap justify-center items-center">
        {users
          .filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((user) => (
            <RecipeReviewCard
              key={user.id}
              name={user.name}
              email={user.email}
              content={user.company?.catchPhrase}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
