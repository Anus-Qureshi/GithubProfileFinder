import './Footer.css'
const Footer = () => {
    return(
        <div id="footer">
            <footer className="site-footer">
               <div className="container">
        
        <div class="row">
           <div class="col-sm-12 col-md-6">
                   <h6>This web Application Designed by Muhammad Nadeem Qureshi</h6>
               </div>
               <div class="col-xs-6 col-md-3">
                   <h6>Contact</h6>
                   <ul class="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
               </div>
               </div>
               </div>
            </footer>
        </div>
    );
}

export default Footer;