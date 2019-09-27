import React , {Component} from 'react';
import '../../assets/scss/style.css';
import '../../assets/css/id.css';
import './post.css';
import Table from './table';
import bs from '../../assets/b1.png';
import Share from './Share';

class Post extends Component {
  state = {
      name1 : 'الاوراق الثبوتية',
      name2 : 'الجنسية',
      name3 : 'الهاتف',
      name4 : 'دعم الامم المتحدة',
      name5 : ' العنوان',
      name6 : ' العنوان على الخريطة',
  }
    render(){
       
        return( 
            <div >
            
             
            <div className ='sh  post b-r'>  
					<img src={bs} className="card-img-top b clip-1 b-r" alt='ivn'/>  
                    <p>مركز برلياس الصحي</p>
                 
                <Table />
                <div className='sh b-r'>
                    <p>{this.state.name6}</p>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d691.848867223282!2d35.901784043994255!3d33.77388914177241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ2JzI2LjAiTiAzNcKwNTQnMDQuNCJF!5e1!3m2!1sar!2slb!4v1567638136324!5m2!1sar!2slb" className='b-r'  ></iframe> */}
                   <br/> <a className='btn' href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d691.848867223282!2d35.901784043994255!3d33.77388914177241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ2JzI2LjAiTiAzNcKwNTQnMDQuNCJF!5e1!3m2!1sar!2slb!4v1567638136324!5m2!1sar!2slb'>بدون نت</a>
                </div> <br />	<Share />  
            </div>
            </div>
        )}}
 
export default Post