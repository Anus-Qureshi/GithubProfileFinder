const DisplayTable = ({ data, repos }) => {
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Avatar</th>
          <th>Bio</th>
          <th>Location</th>
          <th>Repositories</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Name"><strong><h3>{data.login}</h3></strong></td>
          <td >
            {" "}
            {!data.avatar_url ? (
              " "
            ) : (
              <img
                className="ui small circular image"
                src={data.avatar_url}
                alt={data.avatar_url}
              />
            )}
            
          </td>
          <td data-label="Bio"><h3>{data.bio}</h3></td>
          <td data-label="Location">{data.location}</td>
          <td data-label="Repositories">
            {repos.map((repo) => (
              <div className="ui relaxed divided list" key={repo.name}>
                <div className="item">
                  <i className="large github middle aligned icon"></i>
                  <div className="content">
                    <a
                      href={repo.html_url}
                      className="header"
                      target="_blank"
                      rel="noreferrer"
                    >{repo.name}</a>
                  </div>
                </div>
              </div>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DisplayTable;
