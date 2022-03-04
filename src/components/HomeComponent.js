import React,{Component} from "react";
import {Card,CardText,CardGroup, CardLink, CardTitle} from 'reactstrap';

class Home extends Component{
   
    
     render(){
        
        return(
            <div className="container">
                 <div className="row">
                    <div className="col m-4 ">
                        <Card color="info" >
                            <CardTitle> Data Structure</CardTitle>
                        </Card>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                <CardGroup>
                   
                    <Card>
                        <CardLink href="#">Arrays</CardLink>
                      
                    </Card>
                    <Card>
                    <CardLink href="#">LinkedList</CardLink>
                       
                    </Card>
                    <Card>
                    <CardLink href="#">Stacks</CardLink>
                        
                    </Card>
                    <Card>
                    <CardLink href="#">Queues</CardLink>
                       
                    </Card>
                    </CardGroup>
                    <CardGroup>
                    <Card>
                    <CardLink href="#">HashTable</CardLink>
                       
                    </Card>
                    <Card>
                    <CardLink href="#">Trees</CardLink>
                        
                    </Card>
                    <Card>
                    <CardLink href="#">Heaps</CardLink>
                        
                    </Card>
                    <Card>
                    <CardLink href="#">Graphs</CardLink>
                        
                    </Card>
                </CardGroup>
                </div>
                </div>
                
                <div className="row">
                <div className="col-12 col-lg-4 mb-2 box">
         
        </div>
                </div>
                <div className="row">
                    <div className="col m-4 ">
                        <Card color="info" >
                            <CardTitle> Algorithms</CardTitle>
                        </Card>
                        
                    </div>
                </div>
                </div>
        );
     }
}

export default Home;