import React , {Component} from 'react'; 
import '../assets/scss/style.css';
 
class About extends Component {
 on = ()=> {
     console.log(this.props.id[1])
 }
    render(){
       
        return( 
            <article >
                <p> تصميم:<a href="https://t.me/ktsyr1"> قتيبة محمد </a> </p>
                <p>© 2019/8/30</p> 
                <p >beta 0.1.2 </p>
                <main>
                    <h1>سجل التغيرات</h1>
                </main>
            </article>
        )
    }
}
 
export default About
