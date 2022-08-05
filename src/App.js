import React from "react";
import Layout from "./components/layout";

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img source="" alt="Avatar of user" />
          <h1>Name User</h1>
          <h3>Username: </h3>
          <span>username</span>
          <div>
            <h4>Followers</h4>
            <span>quantity folloewers</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>quantity starreds</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>quantity folloewings</span>
          </div>
        </div>
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
