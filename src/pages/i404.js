import React , {Component} from 'react'; 
import {NavLink}  from 'react-router-dom';
import '../assets/scss/style.css'; 

class I404 extends Component {
    render(){
       
        return( 
            <div className='mp b-r '>
                  404 
                    <p>لا توجد صحفة بهذا الاسم او تم اعادة تسميته
                    </p><br/>
            <NavLink to='/' className=' mp b-r sh'> الرجوع الى الصفحة الرئيسية</NavLink>
            <br/> 
             </div>
        )
    }
}
 
export default I404
