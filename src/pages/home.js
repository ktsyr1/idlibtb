import React , {Component} from 'react';    
import Card from '../Component/card/card';
 
class Home extends Component {
   
    render(){
       
        return( 
            <section >
             
             <Card url='/post' name='مركز برلياس الصحي'   />
             <Card url='/post1' name='القرية الطبية العودة'  /> 
             <Card url='/post2' name='غراس الخير '   /> 
             <Card url='/post3' name='مستوصف الحريري'    /> 
             </section>
        )
    }
}
 
export default Home
