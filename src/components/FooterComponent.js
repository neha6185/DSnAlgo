import React  from "react";

function Footer(props){
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                <div className="col-4 col-sm-6 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Data Structure</a></li>
                            <li><a href="#">Algorithms</a></li>
                           
                        </ul>
                    </div>
                    <div className="col-4 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                    
                </div>
            </div>
        </footer>
    );
}
export default Footer;