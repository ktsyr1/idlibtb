import React from 'react';   
import './App.css'; 
import { BrowserRouter , Route ,Switch} from 'react-router-dom'; 

import I404 from './pages/i404';
import Home from './pages/home'; 
 import Post from './Component/post/post';
import Nav from './Component/nav/nav';
import Post1 from './Component/post/post1';
import Post2 from './Component/post/post2';
import Post3 from './Component/post/post3';
import About from './pages/about';

  function App() {  
    
  return (
    <BrowserRouter >
        <div className="App"> 
            <Nav />
           
        <Switch >  
        <Route exact path="/"  component={Home}/>  
        <Route path="/post" component={Post} />
        <Route path="/post1" component={Post1} />
        <Route path="/post2" component={Post2} />
        <Route path="/post3" component={Post3} />
        <Route path="/about" component={About} />

          <Route component={I404} />
          </Switch>
     
         </div>
    </BrowserRouter >
  );
}

export default App;
