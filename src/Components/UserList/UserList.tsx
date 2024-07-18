import { FunctionComponent } from "react";

interface GithubUser {
  login: string;
  url: string;
}

interface Props {
  users: GithubUser[];
}

const UserList: FunctionComponent<Props> = ({ users }) => {
  return (
    <div>
      User List:
      <ul>
        {users.map((item) => (
          <li>
            <a href={item.url}>{item.login}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
