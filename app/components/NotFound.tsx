import { useLanguage } from '~/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function NotFound() {
  const { language } = useLanguage();

  useEffect(() => {
    const arrayColor = ["#FF6600", "#FF0000", "#880000", "#FF9933", "#FF3300", "#FF3366"];
    
    const createStar = () => {
      const right = Math.floor(Math.random() * 500);
      const top = Math.floor(Math.random() * window.screen.height);
      const star = document.createElement("div");
      star.classList.add("star");
      document.body.appendChild(star);

      star.style.top = top + "px";
      star.style.background = arrayColor[Math.floor(Math.random() * 6)];
      
      let currentRight = right;
      const runStar = setInterval(() => {
        if (currentRight >= window.screen.width) {
          star.remove();
          clearInterval(runStar);
        }
        currentRight += 2;
        star.style.right = currentRight + "px";
      }, 15);

      setTimeout(() => {
        star.remove();
      }, 15000);
    };

    const starInterval = setInterval(createStar, 100);
    return () => clearInterval(starInterval);
  }, []);

  return (
    <div className="not-found-container">
      <div className="stars-container"></div>
      
      <div className="content">
        <h1>404!</h1>
        <p>
          {language === 'tr' 
            ? 'Aradığınız Sayfa Bulunamadı.'
            : 'The Page You\'re Looking For Was Not Found.'}
        </p>
        <Link to="/" className="back-button">
          {language === 'tr' ? 'Geri Dön!' : 'Go back!'}
        </Link>
      </div>

      <div className="superman-container">
        <img 
          src="/images/superman.png"
          alt="Superman"
          className="superman"
        />
      </div>

      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          overflow: hidden;
          height: 100%;
          width: 100%;
        }

        .not-found-container {
          min-height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: fixed;
          top: 0;
          left: 0;
          background-color: #000C2C;
          font-family: 'Merriweather', serif;
          overflow: hidden;
        }

        .stars-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 1;
        }

        .content {
          text-align: center;
          z-index: 3;
          position: relative;
          transform: translateY(-25%);
          padding-bottom: 4rem;
        }
        .content h1 {
          color: white;
          font-size: 130px;
          margin-bottom: 20px;
          line-height: 1;
        }

        .content p {
          color: white;
          font-size: 22px;
          margin-bottom: 30px;
        }

        .back-button {
          display: inline-block;
          padding: 12px 30px;
          background-color: #880000;
          color: white;
          font-size: 18px;
          letter-spacing: 2px;
          border-radius: 10px;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .back-button:hover {
          background-color: #660000;
        }

        .back-button:active {
          transform: translate(-5px, 5px);
        }

        .superman-container {
          position: fixed;
          bottom: 25%;
          left: 0;
          width: 100vw;
          height: 100px;
          overflow: visible;
          pointer-events: none;
          z-index: 4;
        }

        .superman {
          width: 150px;
          position: absolute;
          transform: rotate(45deg);
          animation: superman 12s infinite linear;
        }

        .star {
          position: fixed;
          width: 2px;
          height: 2px;
          right: 0;
          animation: animationStar 3s infinite linear;
          z-index: 1;
        }

        @keyframes superman {
          0% {
            left: -40px;
            bottom: 20px;
          }
          10% { bottom: 30px; }
          20% { bottom: 10px; }
          30% { bottom: 30px; }
          40% { bottom: 10px; }
          50% { bottom: 30px; }
          60% { bottom: 10px; }
          70% { bottom: 30px; }
          80% { bottom: 10px; }
          90% { bottom: 30px; }
          100% {
            left: calc(100% + 40px);
            bottom: 20px;
          }
        }

        @keyframes animationStar {
          0%, 40%, 80% { box-shadow: 0px 0px 3px #fff; }
          20%, 60%, 100% { box-shadow: 0px 0px 15px #fff; }
        }

        @media (max-width: 768px) {
          .content h1 {
            font-size: 100px;
          }
          
          .content p {
            font-size: 18px;
          }
          
          .superman {
            width: 30px;
          }
        }

        @media (max-height: 600px) {
          .content {
            transform: translateY(-15%);
          }
          
          .superman-container {
            bottom: 20%;
          }
        }
      `}</style>
    </div>
  );
}
