import { useState } from "react";
import DisplayTable from "./DisplayTable";
import { Input } from 'semantic-ui-react'

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setusername] = useState("");
  const [repos, setrepos] = useState([]);

  const onChangeHandler = (e) => {
    setusername(e.target.value);
  };
  const submitHandler = async (e) => {
    //   e.preventDefualt();
    //call profile from the github Api
    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJSON = await profile.json();
    console.log(profileJSON);

    //calling repos from the github Api
    const repositories = await fetch(profileJSON.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (profileJSON) {
      setData(profileJSON);
      setrepos(repoJson);

    }
    
  };

   

  return (
    <div style={{ padding: 20 }}>
      <div className="ui search">
        <div className="ui icon input">
          <i className="search icon"></i>
          <Input
            className="prompt"
            type="text"
            icon='users' 
            iconPosition='left'
            placeholder="Search Username..."
            onChange={onChangeHandler}
            value={username}
          />
        </div>
      </div>

      <button
        className="ui primary button"
        type="submit"
        onClick={submitHandler}
      >
        <i className="github icon"></i>
        Search{" "}
      </button>
      <DisplayTable data={data} repos={repos}/>
    
    </div>
  );
};
export default Profile;
