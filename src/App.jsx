import { useEffect, useState } from "react";
import RecipeReviewCard from "./RecipeReviewCard";
import axios from "axios";
import toast from "react-hot-toast";

function App() {
  // define the states for the search input and the users array

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch all users from the API and set them in the state
  const getUsers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle the form submission and call the getUser function
  const getUser = (e) => {
    try {
      e.preventDefault();
      const user = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()),
      );
      if (user.length < 1) {
        toast.error("User not found!");
      } else {
        toast.success(`User ${user[0].name} found!`);
      }
    } catch (error) {

      toast.error("Error fetching users");
    }
  };

  // useEffect to call the getUsers function when the component mounts and updates
  useEffect(() => {
    getUsers();
  }, []);

  return (
    // Main container with Tailwind CSS classes
    <div className="flex h-full min-h-screen flex-col items-center gap-20 bg-gradient-to-br from-blue-800 to-violet-600 p-10">
      {/* Form for searching users */}
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

      {/* Container for user cards */}
      <div className="flex flex-wrap items-center justify-center gap-20">
        {/* Displayed the user cards and filter them by the search input and mapped to the RecipeReviewCard component */}
        {users
          .filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase()),
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
