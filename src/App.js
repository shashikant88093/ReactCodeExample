import './App.css';
import Articles from './Articles'
// import Content from './Content';
// const ArticlesContent = {
//   title: "Media",
//   brief: "Website for post",
//   content: "dyucdufhdjdsv dhvdnvorjvorvj"
// }


function App() {
  return (
    <div className="App">
      <Articles title="header" brief="brief"  >
        <p>hello world</p>
        <p>how are you</p>
        
      </Articles>
    </div>
  );
}

export default App;
