import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaFacebookF,FaTwitter,FaPinterestP } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer class="footer section">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget">
              <h4 class="mb-4 text-capitalize">company</h4>
              <ul class="list-unstyled  footer-menu lh-35">
                <li><a>Terms & Conditions</a></li>
                <li><a>Privacy Policy</a></li>
                <li><a>Support</a></li>
                <li><a>FAQ</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget">
              <h4 class="mb-4 text-capitalize">Quick Links</h4>
              <ul class="list-unstyled  footer-menu lh-35">
                <li><a>About</a></li>
                <li><a>Services</a></li>
                <li><a>Blog</a></li>
                <li><a>Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 ">
            <div class="widget">
              <h4 class="mb-4 text-capitalize">Subscribe Us</h4>
              <p>Subscribe to get latest news <br></br>article and resources</p>
              <form class="sub-form">
                <input class="form-control mb-3" type='text' placeholder='Subscript now.. '></input>
                <button class="buuto">SUBSCRIBE</button>
              </form>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
              <div class="widget">
                <div class="logo mb-4">
                  <h3>Mega<span class='text-color-1'>kit.</span></h3>
                </div>
                <h6><a>Support@megakit.com</a></h6>
                <a><span class="text-color">+23-456-6578</span></a>
              </div>
          </div>
        </div>
        <div class="footer-btm pt-4">
          <div class="row justify-contant-spacebetwen">
            <div class="col-lg-6 ">
              <div class="copyright">Copyright © 2020, Designed & Developed by <span class="fot"> Themefisher</span></div>
            </div>
            <div class="col-lg-6 text-left text-lg-right">
              <ul class="list-inline footer-socials">
                <li class="list-inline-item"><a><i><FaFacebookF /></i>Facebook</a></li>
                <li class="list-inline-item"><a><i><FaTwitter /></i>Twitter</a></li>
                <li class="list-inline-item"><a><i><FaPinterestP /></i>Pinterest</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer> 
   
    </>
    
  )
}

export default Footer;