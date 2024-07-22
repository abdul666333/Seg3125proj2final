import * as React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import "../styles/Faq.css";

function Faq() {
    return(

    <div className='faq'>
        <h2 className='faqheader'>Frequently Asked Questions</h2>
        <h2 className='sessionheader'>Practice Sessions</h2>
        
    <Accordion>
    
    <Accordion.Item eventKey="0">
      <Accordion.Header>How do I book a session?</Accordion.Header>
      <Accordion.Body>
        Booking a session can be simply done by navigating to the "Practice session" button on the navigation bar. There you can view our offered sessions which are the practice session and club tour.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Can I book multiple people at once?</Accordion.Header>
      <Accordion.Body>
        Unfortunatley, you must add one person at a time to ensure availability to all.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
      <Accordion.Header>What do I need to bring with me?</Accordion.Header>
      <Accordion.Body>
        All you need to bring is cleats, socks and water. We provide the uniforms, and other gear.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="3">
      <Accordion.Header>How long is each session?</Accordion.Header>
      <Accordion.Body>
        Session times vary. The practice session is approximately one hour long, where thr tour is only 30 minuutes.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="4">
      <Accordion.Header>Can I cancel a session?</Accordion.Header>
      <Accordion.Body>
        We strongly enourage you book a time that is suitable for you. If you would like to cancel, please contact us as soon as you can.
      </Accordion.Body>
    </Accordion.Item>
    




  </Accordion>

  <h2 className='programsheader'>Programs</h2>
  

  <Accordion>
    <Accordion.Item eventKey="0">
      <Accordion.Header>How do I enroll in a program?</Accordion.Header>
      <Accordion.Body>
        To enroll in a program, you can first take a look at the programs we offer and pick a suitable program. You can also contact us for more consulation in the "contact us" page.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Can I withdraw from a program?</Accordion.Header>
      <Accordion.Body>
        Withdrawals are only possible within 14 business days after registering in a program. You will not be refunded after the deadline has passed.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
      <Accordion.Header>Is there a unifrom?</Accordion.Header>
      <Accordion.Body>
        Yes, we provide uniforms. Our uniforms are required to be worn every game and practice session. If you lose your unifrom, please contact us.
      </Accordion.Body>
    </Accordion.Item>
    
    </Accordion>
  </div>
);
}
export default Faq;