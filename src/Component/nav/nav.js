import React ,{Component} from 'react'; 
 import './nav.css';
 import {  NavLink}  from 'react-router-dom';
 import icon from './icon.png';

  class Nav extends Component {
 render() { 
  return (
    <nav className="nav sh  b-r">  
         <ul>   
         <li><img src={icon} alt="icon li" className='logo'/></li>
            <li><NavLink className=' li' to='/'><div>الرئيسية</div> </NavLink> </li>
            <li><NavLink className=' li' to='/Connect'><div>اتصل بنا</div></NavLink></li> 
            <li><NavLink className='  li' to='/about'><div>من نحن</div>  </NavLink> </li> 
                
               </ul>
               
     </nav>
  );
}
} 
export default Nav ;
