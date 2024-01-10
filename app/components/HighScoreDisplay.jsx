const HighScoreDisplay = ({ users }) => {
  let currentIndex = 1;
  return (
    <div>
      <div className="flex flex-col h-full w-3/4 mx-auto mt-8 rounded-lg shadow-lg">
        <div className="overflow-x-auto h-52 table-pin-rows">
          <table className="table">
            <thead>
              <tr className="bg-base-300">
                <th></th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  user.score !== null && (
                    <tr
                      key={user.username}
                      className="font-poppins font-semibold"
                    >
                      <td>{currentIndex++}</td>
                      <td className="">{user.username}</td>
                      <td className="font-mono">{user.score}</td>
                    </tr>
                  )
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HighScoreDisplay;
