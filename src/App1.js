import './App.css';
import Articles from './Articles'
// import Content from './Content';
import Reuse from './Reuse'
const ArticlesContent = {
  title: "Media",
  brief: "Website for post",
  // content: "dyucdufhdjdsv dhvdnvorjvorvj"
  // content:<Reuse/>
  content:Reuse
}


function App() {
  return (
    <div className="App">
      <Articles {...ArticlesContent}  />
       
        
    </div>
  );
}

export default App;
