
import React ,{Component } from 'react'; 
import {  NavLink}  from 'react-router-dom'; 
import './card.css';  
 import bs from '../../assets/b.png';
class Card extends Component {
  state  ={
	 name : [],
	 url : []
  }
    
       render(){ 
           return( 
				<NavLink to={this.props.url}   className="  b-r sh card m-auto"name={this.props.name}>
						<div className=" b-r" >
							<img src={bs} className="card-img-top b clip-1 b-r" alt='ivn'/>  
							<div className='an2  '>
								<h3 className='appName'>{this.props.name}</h3>
							</div>
						</div>
				</NavLink> 
 )
}
} 
export default Card ;
