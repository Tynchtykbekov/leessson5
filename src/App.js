 
import './App.css';
import Comments from './components/Comments';
const user = {
  date: new Date(),
  author: {
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUvlKO9-z4LoleYkD5yU3a69m2vqs0iGXiiQ&s',
    name: 'Kitty'
  },
  text: "learning react is awesome"

}
function App() {
  return (
    <div className="App">
 <Comments 
 dat={user.date} 
 author={user.author} 
 
  text={user.text}/>
    </div>
  );
}

export default App;
