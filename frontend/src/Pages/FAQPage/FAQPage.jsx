import React from 'react';
import Container from 'react-bootstrap/Container';
import { Accordion, AccordionItem } from 'react-sanfona';

const faqs = [
  {
    title: 'What is a HackRPI?',
    content:
      'Our hackathon is an exciting 24 hour coding event where hackers will work in teams of 1 to 4 people to create projects based around the theme to win epic prizes thanks to our sponsors!'
  },
  {
    title: 'Do I need experience?',
    content:
      'Anyone with any skill level! Whether you\'re an experienced hackathon veteran, or if you\'ve never coded before, our hackathon is for you! With our team of mentors ready to assist you with whatever direction you\'re taking your project, HackRPI is the place you should go to grow and test your technical skills!'
  },
  {
    title: 'Who can participate?',
    content:
      'You don\'t have to be an RPI student to participate! Students from other colleges are welcome and any recent college graduates!'
  },
  {
    title: 'Is it free to attend?',
    content:
      'Yes! Thanks to our many wonderful sponsors, HackRPI is free, as is all the swag, food, and snacks you\'re going to get!'
  },
  {
    title: 'When is the hackathon?',
    content:
      'November 4th-5th 2023, is the date for our 10th annual HackRPI. We\'re really excited to celebrate the 10th year of our incredible event with YOU! Save the date!'
  },
  {
    title: 'How do I sign up?',
    content:
      'The registration form will be up by the start of the Fall semester. Join our email list below to get updates on when registration opens, and about our pre-HackRPI mini events.'
  },
  {
    title: 'Where is it happening?',
    content:
      'HackRPI will take place in the Darrin Communications Center (DCC) on the RPI Campus in Troy, NY. Exact directions can be found <a href="https://www.google.com/maps/place/Darrin+Communications+Center/@42.7293552,-73.6821407,17z/data=!3m1!4b1!4m6!3m5!1s0x89de0f0a7e6fd845:0xb802c916a2bdf3c3!8m2!3d42.7293552!4d-73.6795658!16s%2Fg%2F1tg7s_yx">here</a>.'
  }
];


const FAQPage = () => {
  return (
    <Container fluid style={{ backgroundColor: "#8B0000", minHeight: "100vh" }}>
      <h2 id="faq" style={{ paddingTop: "1rem", textAlign: "center", color: "white" }}>FAQ</h2>

      <div>
      <h1 style={{
          fontFamily: "Orbitron, sans-serif", 
          fontWeight: "400",
          color: "white", 
          textAlign: "center", 
          fontSize: "1.5rem",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)"
        }}>FAQ</h1>

      <Accordion>
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            title={faq.title}
            expanded={index === 0} 
          >
            <p>{faq.content}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </div>

    </Container>
  );
};

export default FAQPage;

