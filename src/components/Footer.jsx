import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FiLinkedin, FiTwitter } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {
  const pro1=()=>{
    const fbUrl = `https://www.facebook.com/profile.php?id=100007674497389`;
    window.location.href = fbUrl;
  };
  const pro2=()=>{
    const instagramUrl = `https://instagram.com/tushar.0172?igshid=OGQ5ZDc2ODk2ZA==`;
    window.location.href = instagramUrl;
  };
  const pro3=()=>{
    const liUrl = `https://www.linkedin.com/in/tushar-ab660126a/`;
    window.location.href = liUrl;
  };
  const pro4=()=>{
    const giUrl=`https://github.com/Tushardev0172`;
    window.location.href=giUrl;
  };
  return (
    <footer>
      <ToastContainer
        position="top-right"
        closeOnClick
        theme="colored"
        limit={1} 
      /> 
      <Container
        fluid
        style={{
          backgroundColor: '#ec1313',
          color: '#ffffff',
        }}>
        <Container>
          <Row>
            <Col md={4} sm={12} className="my-5">
              <h1 className='font_footer'>Tech Books</h1>
            </Col>
            <Col md={8} sm={12} className="my-5 text-sm-left">
              <Row>
                <Col md={6} sm={12} className="p-0">
                  <ul>
                    <h5 className="title">KEEP IN TOUCH</h5>
                    <li className="list-unstyled mb-2">
                      Feel Free to contact us any time. <br /> We are available
                      24/7.
                    </li>
                    <li className="list-unstyled mb-2">
                      <i className="fas fa-phone"></i> +91 9988998899
                    </li>
                    <li className="list-unstyled mb-2">
                      <span className="mr-3 text-white fs-3 p-2 bbttnn">
                      <button className='btn2' onClick={()=>pro1()}><FaFacebookF /></button>{' '}
                      </span>
                      
                      <span className="mr-3 text-white fs-3 p-2 bbttnn">
                      <button className='btn2' onClick={()=>pro2()}><BsInstagram /></button>{' '}
                      </span>
                      <span className="mr-3 text-white fs-3 p-2">
                      <button className='btn2' onClick={()=>pro4()}><FaGithub /></button>{' '}
                      </span>{' '}
                      <span className="mr-3 text-white fs-3 p-2 bbttnn">
                        
                      <button className='btn2' onClick={()=>pro3()}><FiLinkedin /></button>{' '} 
                      </span>
                    </li>
                  </ul>
                </Col>
                <Col md={6} sm={12} className="p-0"></Col>
              </Row>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm={12}>
              <p className="my-2 fs-5 justify-content-center d-flex">
                &copy; {new Date().getFullYear()} Tech Books. All rights
                reserved
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
}
