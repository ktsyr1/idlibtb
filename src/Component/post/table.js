import React , {Component} from 'react';
import '../../assets/scss/style.css';
import '../../assets/css/id.css';
import './post.css';
class Table extends Component {
  state = {
      name1 : 'الاوراق الثبوتية',
      name2 : 'الجنسية',
      name3 : 'الهاتف',
      name4 : 'دعم الامم المتحدة',
      name5 : ' العنوان'
  }
    render(){
       
        return(  
                    <table className="table table-striped   ">
                        <tbody>
                            <tr>
                                <td> {this.state.name1}</td>
                                <td >ملف الامم المتحدة</td>
                            </tr>
                            <tr>
                                <td>{this.state.name2}</td>
                                <td>سوري / لبناني /فلسطيني</td>
                            </tr>
                            <tr>
                                <td>{this.state.name3}</td>
                                <td>
                                    <a className="p2" href="tel:+96170123456">70123456</a>
                                </td>
                            </tr>
                            <tr>
                                <td>{this.state.name4}</td>
                                <td>لا يوجد</td>
                            </tr>
                            <tr>
                                <td>{this.state.name5}</td> 
                                <td>برلياس /جانب مبنى البلدية القديم</td>
                            </tr>
                        </tbody>
                    </table> 
        )}}
 
export default Table