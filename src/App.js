import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";

function App() {
    useEffect(() => {
        const token = "IGQVJXckszaF9seEZAXUXRUbTlmZAjJVejgxZA3NuY3hvbmZA2M0IxYk1MbXZA5Mm5YMS1WSGJJZAjlmdWQ3ZA0pJRHJVWGJGUWg0bUllekFkc09GUjl5bUx0UVRuV0hYOVU1RGV2ZAjYwZAGhKOEpaNnBZAME5uMwZDZD"
        var url = "https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url&&access_token=" + token;
        fetch(url).then(function (response) {
            return response.json();
        }).then(function (data) {
            if (data.hasOwnProperty('error')) {
                console.info('Error:', error);
            } else {
                console.info('SUCCESS:', data.data);
            }
        })["catch"](function (error) {
            console.info('Error:', error);
        });
    },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Halo Test Heroku
      </header>
    </div>
  );
}

export default App;
