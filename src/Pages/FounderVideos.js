// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

// const FounderVideos = () => {
//   return (
//     <div style={{ backgroundColor: '#fff0f5', padding: '60px 0' }}>
//       <Container>
//         <h2 className="text-center mb-5" style={{ color: '#6d1b7b' }}>
//           🎥 Meet Our Founder – Healing from the Heart
//         </h2>
//         <Row className="justify-content-center">
//           <Col xs={12} md={6} className="mb-4 d-flex justify-content-center">
//             <div>
//               <h5 className="text-center mb-3" style={{ color: '#8b005d' }}>💫 Reiki - Heal Yourself</h5>
//               <div style={{ position: 'relative', paddingBottom: '177.78%', height: 0, overflow: 'hidden' }}>
//                 <iframe
//                   src="https://www.youtube.com/embed/I2Os4tQ5m40"
//                   title="Reiki Video"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '100%',
//                     borderRadius: '12px',
//                     boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
//                   }}
//                 />
//               </div>
//             </div>
//           </Col>

//           <Col xs={12} md={6} className="mb-4 d-flex justify-content-center">
//             <div>
//               <h5 className="text-center mb-3" style={{ color: '#8b005d' }}>🔮 Tarot - Connect with the Universe</h5>
//               <div style={{ position: 'relative', paddingBottom: '177.78%', height: 0, overflow: 'hidden' }}>
//                 <iframe
//                   src="https://www.youtube.com/embed/I2Os4tQ5m40"
//                   title="Tarot Video"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '100%',
//                     borderRadius: '12px',
//                     boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
//                   }}
//                 />
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default FounderVideos;

// src/Pages/FounderVideos.js

// src/Pages/FounderVideos.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import reikiVideo from '../Videos/reiki_founder.mp4';
import tarotVideo from '../Videos/tarot_founder.mp4';

const FounderVideos = () => {
  return (
    <div style={{ backgroundColor: '#fff0f5', padding: '60px 0' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ color: '#6d1b7b' }}>
          🎥 Meet Our Founder – Healing from the Heart
        </h2>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="mb-4 d-flex justify-content-center">
            <div style={{ width: "100%", maxWidth: "400px" }}>
              <h5 className="text-center mb-3" style={{ color: '#8b005d' }}>💫 Reiki - Heal Yourself</h5>
              <video
              src={require('../Videos/reiki_founder.mp4')}
              controls
              // poster={require('../Images/reiki_cover.jpg')}
              style={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
              ></video>
            </div>
          </Col>

          <Col xs={12} md={6} className="mb-4 d-flex justify-content-center">
            <div style={{ width: "100%", maxWidth: "400px" }}>
              <h5 className="text-center mb-3" style={{ color: '#8b005d' }}>🔮 Tarot - Connect with the Universe</h5>
              <video
              src={require('../Videos/tarot_founder.mp4')}
              controls
              // poster={require('../Images/tarot_cover.jpg')}
              style={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
              ></video>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FounderVideos;
