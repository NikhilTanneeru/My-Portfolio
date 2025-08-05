import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import '../css/Featured.css';

const cards = [
  {
    title: 'Offer Letter',
    desc: 'Received my offer letter from Ewarn System',
    altdesc: '**Full Description** with more info about the project or certificate. Supports *formatting* and links.\nSecond line here.',
    img: "Offer.png",
    link: 'https://drive.google.com/file/d/18T7YVE_ftfHKD6ZSAv18YcTjQIR-aRdU/view?usp=sharing'
  },
  {
    title: 'Featured 2',
    desc: 'Short description 2',
    altdesc: 'Another **long description** about project 2 or something else.\nWith line breaks and a credential link.',
    img: 'https://via.placeholder.com/300',
    link: 'https://example.com/certificate2'
  },
  {
    title: 'Featured 3',
    desc: 'Short description 3',
    altdesc: 'A third **longer** description with no link.',
    img: 'surveillance.png',
    link: ''
  }
];

const getAlertWidth = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 500) return '90%';
  if (screenWidth < 768) return '70%';
  return '600px';
};

export default function Featured() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }, 3000);
    }
    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  const handleButtonClick = (card) => {
    Swal.fire({
      title: card.title,
      text: card.altdesc,
      imageUrl: card.img,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Featured image',
      width: getAlertWidth(),
      customClass: {
        popup: 'custom-swal-background'
      },
      html: `
        <p>${card.altdesc
          .replace(/\n/g, '<br/>')
          .replace(/(\*\*[^*]+\*\*)/g, '<b>$1</b>')
          .replace(/\*\*/g, '')}</p>
        ${card.link ? 
          `<a href="${card.link}" target="_blank" style="display: block; margin-top: 10px; color: #007bff; text-decoration: none;">
             View Link <i class="fa fa-external-link" aria-hidden="true" style="margin-left: 5px;"></i>
           </a>` 
          : ''}`
    });
  };

  return (
    <div className="featured-carousel-container">
      <h2 className="featured-title">🌟 Featured Highlights</h2>
      <div
        className="carousel-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="carousel-inner" style={{ transform: `translateX(-${index * 100}%)` }}>
          {cards.map((card, i) => (
            <div key={i} className="carousel-card">
              <img src={card.img} alt={card.title} />
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
              <div className="card-overlay">
                <button
                  className="view-more-btn"
                  onClick={() => handleButtonClick(card)}
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="carousel-dots">
          {cards.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
