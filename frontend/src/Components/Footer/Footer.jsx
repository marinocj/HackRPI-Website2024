import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Footer = () => {
    return (
        <div>
            <style>{`

        .footer p{
            align-items: center;
            justify-content: center;  
            text-align: center;    
            padding-bottom: 20px;
        }
        .footer-banner {
            background-color: #910307;
            height: 25vh;
            align-items: center;
            justify-content: center;            
            font-family: Poppins Light;
            color: white;

            display: flex;
        }
            .footer-banner h3 {
                padding-right: 40px;
                padding-left: 10%;
            }
        
            .Btn {
                width: 45px;
                height: 45px;
                /* border: none; */
                border-radius: 50%;
                background-color: #910307;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                position: relative;
                transition-duration: .5s;
                box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.137);
                border: 2px solid #bbecff;
              }
              
              .logoIcon {
                fill: white;
              }
              
              .tooltip {
                position: absolute;
                top: -20px;
                opacity: 0;
                background-color: #910307;
                color: white;
                padding: 5px 10px;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition-duration: .2s;
                pointer-events: none;
                letter-spacing: 0.5px;
              }
              
              .tooltip::before {
                position: absolute;
                content: "";
                width: 10px;
                height: 10px;
                background-color: #910307;
                background-size: 1000%;
                background-position: center;
                transform: rotate(45deg);
                bottom: -20%;
                transition-duration: .3s;
              }
              
              .Btn:hover .tooltip {
                top: -45px;
                opacity: 1;
                transition-duration: .3s;
              }
              
              .Btn:hover {
                background-position: right;
                transition-duration: .5s;
              }
        
      `}</style>

            <div className='footer-banner'>
                <h3> Come join us this coming November 4-5, 2023 to hack, learn, and meet other poeple! </h3>

                <div style={{ paddingRight: "10%", width: "30%", alignItems: 'center', justifyContent: 'center' }}>
                    <Nav.Link href="https://organize.mlh.io/participants/events/9892-hackrpi">
                        <Button
                            variant="outline"
                            style={{ backgroundColor: 'white', color: '#910307' }}
                        >
                            Register Now!
                        </Button>
                    </Nav.Link>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 50, gap: 20 }}>
                <Nav.Link href='https://www.instagram.com/hack.rpi/?hl=en'>
                    <button className='Btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512" style={{ fill: 'white' }}> <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                        <span class="tooltip">@hack.rpi</span>
                    </button>
                </Nav.Link>

                <Nav.Link href='mailto:hackrpi@rpi.edu'>
                    <button className='Btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512" style={{ fill: 'white' }}><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg>
                        <span class="tooltip">hackrpi@rpi.edu</span>
                    </button>
                </Nav.Link>

                {/* <Nav.Link href='https://www.instagram.com/hack.rpi/?hl=en'> */}
                <button className='Btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 640 512" style={{ fill: "white" }}><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" /></svg>
                    <span class="tooltip">@username</span>
                </button>
                {/* </Nav.Link> */}

            </div>

            <div className='footer'>
                <p > @ 2023 Made by HackRPI team &lt;3 </p>
            </div>

        </div>
    );
};

export default Footer;
