import './App.css';
import Articles from './Articles'
// import Content from './Content';
const ArticlesContent = {
  title: "Media",
  brief: "Website for post",
  content: "dyucdufhdjdsv dhvdnvorjvorvj"
}


function App() {
  return (
    <div className="App">
      <Articles {...ArticlesContent}  />
       
        
    </div>
  );
}

export default App;
