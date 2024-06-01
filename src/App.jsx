import React from 'react';
import '../style.css';

const App = () => {
  return (
    <>
      <h1>IP Address Tracker</h1>

      <form>
        <label htmlFor="input"></label>
        <input type="text" placeholder="Search for any IP address or domain" />
      </form>

      <ul>
        <li>
          <h2>IP Address</h2>
        </li>
        <li>
          <h2>Location</h2>
        </li>
        <li>
          <h2>Timezone</h2>
          <p>UTC</p>
        </li>
        <li>
          <h2>ISP</h2>
        </li>
      </ul>

      {/* <!-- add offset value dynamically using the API --> */}
    </>
  );
};

export default App;
