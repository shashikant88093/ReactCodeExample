import './App.css';
import Articles from './Articles'
import Content from './Content';
import Header from './Header'
const ArticlesContent = {
  title: "Media",
  brief: "Website for post",
  content: "dyucdufhdjdsv dhvdnvorjvorvj"
}

const onChildFourClick=()=>{

}
function App() {
  return (
    <div className="App">
      <Articles  >
          <Header  title="header" brief="brief"/>
          <Content>
          <p>hello world</p>
        <p>how are you</p>
        <Child1>
            <Child2></Child2>
            <Child3>
                <Child4 onClick={onChildFourClick}>

                </Child4>
            </Child3>
        </Child1>
          </Content>
       
        
      </Articles>
    </div>
  );
}

export default App;
