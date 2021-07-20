import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [postList, setPostList] = useState([])

  // in the scope of the component
  async function fetchPostList(){
    const response = await fetch("http://localhost:3004/posts")
    const data = await response.json()
    setPostList(data) // update our state
  }

  useEffect(() => {
    fetchPostList() // will be called when user land on the page
  }, []) // it will execute only on component did mount

  return (
    <div className="App">
      {postList.map(post => {
        return <div>
          <p>{post.title}</p>
        </div>
      } )}
    </div>
  );
}

export default App;
