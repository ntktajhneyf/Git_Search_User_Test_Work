import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputUserName from "./Components/InputUserName/InputUserName";
import UserList from "./Components/UserList/UserList";
import MyComponent from "./Components/InputUserName/InputUser";
import Fetch from "./Components/InputUserName/Fetch";
import SearchInput from "./Components/SearchInput";
import TextInput from "./Components/TextInput";

const FAKE_DATA = [
  {
    login: "Kriska",
    node_id: "MDQ6VXNlcjEyOTkwMDYx",
    avatar_url: "https://avatars.githubusercontent.com/u/12990061?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/Kriska",
    html_url: "https://github.com/Kriska",
    followers_url: "https://api.github.com/users/Kriska/followers",
    following_url: "https://api.github.com/users/Kriska/following{/other_user}",
    gists_url: "https://api.github.com/users/Kriska/gists{/gist_id}",
    starred_url: "https://api.github.com/users/Kriska/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/Kriska/subscriptions",
    organizations_url: "https://api.github.com/users/Kriska/orgs",
    repos_url: "https://api.github.com/users/Kriska/repos",
    events_url: "https://api.github.com/users/Kriska/events{/privacy}",
    received_events_url: "https://api.github.com/users/Kriska/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "KrIsKa7a",
    id: 30660271,
    node_id: "MDQ6VXNlcjMwNjYwMjcx",
    avatar_url: "https://avatars.githubusercontent.com/u/30660271?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/KrIsKa7a",
    html_url: "https://github.com/KrIsKa7a",
    followers_url: "https://api.github.com/users/KrIsKa7a/followers",
    following_url:
      "https://api.github.com/users/KrIsKa7a/following{/other_user}",
    gists_url: "https://api.github.com/users/KrIsKa7a/gists{/gist_id}",
    starred_url: "https://api.github.com/users/KrIsKa7a/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/KrIsKa7a/subscriptions",
    organizations_url: "https://api.github.com/users/KrIsKa7a/orgs",
    repos_url: "https://api.github.com/users/KrIsKa7a/repos",
    events_url: "https://api.github.com/users/KrIsKa7a/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/KrIsKa7a/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "KrisKasprzak",
    id: 20391565,
    node_id: "MDQ6VXNlcjIwMzkxNTY1",
    avatar_url: "https://avatars.githubusercontent.com/u/20391565?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/KrisKasprzak",
    html_url: "https://github.com/KrisKasprzak",
    followers_url: "https://api.github.com/users/KrisKasprzak/followers",
    following_url:
      "https://api.github.com/users/KrisKasprzak/following{/other_user}",
    gists_url: "https://api.github.com/users/KrisKasprzak/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/KrisKasprzak/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/KrisKasprzak/subscriptions",
    organizations_url: "https://api.github.com/users/KrisKasprzak/orgs",
    repos_url: "https://api.github.com/users/KrisKasprzak/repos",
    events_url: "https://api.github.com/users/KrisKasprzak/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/KrisKasprzak/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "kriskanya",
    id: 7211212,
    node_id: "MDQ6VXNlcjcyMTEyMTI=",
    avatar_url: "https://avatars.githubusercontent.com/u/7211212?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/kriskanya",
    html_url: "https://github.com/kriskanya",
    followers_url: "https://api.github.com/users/kriskanya/followers",
    following_url:
      "https://api.github.com/users/kriskanya/following{/other_user}",
    gists_url: "https://api.github.com/users/kriskanya/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/kriskanya/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/kriskanya/subscriptions",
    organizations_url: "https://api.github.com/users/kriskanya/orgs",
    repos_url: "https://api.github.com/users/kriskanya/repos",
    events_url: "https://api.github.com/users/kriskanya/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/kriskanya/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
];

function App() {
  const [searchText, setSearchText] = useState("karpolan");

  const [users, setUsers] = useState([]);

  const onSearchTextChange = async (newText: string) => {
    setSearchText(newText);
    const response = await fetch(
      `https://api.github.com/search/users?q=${newText}`
    );
    const data = await response.json();
    setUsers(data.items);
  };

  return (
    <div>
      {/* <InputUserName /> */}

      {/* <MyComponent value={searchText} onChange={onSearchTextChange} /> */}
      <TextInput value={searchText} onChange={onSearchTextChange} />
      {/* <SearchInput value={searchText} onChange={onSearchTextChange} /> */}
      <UserList users={users} />

      {/* <Fetch /> */}
    </div>
  );
}
console.log(InputUserName);

export default App;
