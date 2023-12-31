import logo from './logo.svg';
import './App.css';
import { API , Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  async function callapi(){
      const user = await Auth.currentAuthenticatedUser()
      const token = user.signInUserSession.idToken.jwtToken;
      const headers = {
     
            "authorizationtoken": "mycustomheader",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        
    };
      const data = API.get('restauthpoc','/test',headers)
      console.log({data})
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={callapi}>Test Call</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
