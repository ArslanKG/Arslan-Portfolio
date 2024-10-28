import { useLanguage } from '~/contexts/LanguageContext';
import { useState, useEffect, useMemo } from 'react';
import type { LinksFunction } from "@remix-run/node";
import animatedCloackStyles from "../../styles/AnimatedCloack.css?url";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: animatedCloackStyles
  },
];

export default function AnimatedCloackProject() {
  const { language } = useLanguage();
  const NUM_HEIGHT = 40;

  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval> | null>(null);
  const [now, setNow] = useState<Date | null>(null);
  const [nowHours, setNowHours] = useState<string | null>(null);
  const [nowMinutes, setNowMinutes] = useState<string | null>(null);
  const [nowSeconds, setNowSeconds] = useState<string | null>(null);

  const nowPrefix = (num: number) => (num < 10 ? "0" : "");

  useEffect(() => {
    update();
    const id = setInterval(update, 1000);
    setIntervalId(id);
    
    return () => {
      if (id) clearInterval(id);
    };
  }, []); 

  useEffect(() => {
    if (!now) return;

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    setNowHours(`${nowPrefix(hours)}${hours.toString()}`);
    setNowMinutes(`${nowPrefix(minutes)}${minutes.toString()}`);
    setNowSeconds(`${nowPrefix(seconds)}${seconds.toString()}`);
  }, [now]);

  const hoursOffsets = useMemo(() => {
    return [
      nowHours ? Number(nowHours.charAt(0)) * NUM_HEIGHT : 0,
      nowHours ? Number(nowHours.charAt(1)) * NUM_HEIGHT : 0
    ];
  }, [nowHours]);

  const minutesOffsets = useMemo(() => {
    return [
      nowMinutes ? Number(nowMinutes.charAt(0)) * NUM_HEIGHT : 0,
      nowMinutes ? Number(nowMinutes.charAt(1)) * NUM_HEIGHT : 0
    ];
  }, [nowMinutes]);

  const secondsOffsets = useMemo(() => {
    return [
      nowSeconds ? Number(nowSeconds.charAt(0)) * NUM_HEIGHT : 0,
      nowSeconds ? Number(nowSeconds.charAt(1)) * NUM_HEIGHT : 0
    ];
  }, [nowSeconds]);

  const update = () => {
    setNow(new Date());
  };

  return (
    <div className="container">
      <div className="title">
        <h1>
          {language === 'tr' ? 'Animasyonlu Saat' : 'Animated Clock'}
        </h1>
        
        <div className="buttons">
          <button className="start" onClick={() => {
            if (!intervalId) {
              setIntervalId(setInterval(update, 1000));
            }
          }}>
            {language === 'tr' ? 'Başlat' : 'Start'}
          </button>
          <button className="stop" onClick={() => {
            if (intervalId) {
              clearInterval(intervalId);
              setIntervalId(null);
            }
          }}>
            {language === 'tr' ? 'Durdur' : 'Stop'}
          </button>
        </div>
      </div>
      <div className="clock-container">
        <section className="digits digits--hours">
          <div className="digit digit--tens" style={{ transform: `translateY(-${hoursOffsets[0]}px)` }}>
            <div className="digit-inner">
              {[...Array(3)].map((_, num) => (
                <div key={num} className="num">{num}</div>
              ))}
            </div>
            <span className="marker"></span>
          </div>
          <div className="digit digit--units" style={{ transform: `translateY(-${hoursOffsets[1]}px)` }}>
            <div className="digit-inner">
              {[...Array(10)].map((_, num) => (
                <div key={num} className="num">{num}</div>
              ))}
            </div>
            <span className="marker"></span>
          </div>
        </section>

        <section className="digits digits--minutes">
          <div className="digit digit--tens" style={{ transform: `translateY(-${minutesOffsets[0]}px)` }}>
            <div className="digit-inner">
              {[...Array(6)].map((_, num) => (
                <div key={num} className="num">{num}</div>
              ))}
            </div>
            <span className="marker"></span>
          </div>
          <div className="digit digit--units" style={{ transform: `translateY(-${minutesOffsets[1]}px)` }}>
            <div className="digit-inner">
              {[...Array(10)].map((_, num) => (
                <div key={num} className="num">{num}</div>
              ))}
            </div>
            <span className="marker"></span>
          </div>
        </section>

        <section className="digits digits--seconds">
          <div className="digit digit--tens" style={{ transform: `translateY(-${secondsOffsets[0]}px)` }}>
            <div className="digit-inner">
              {[...Array(6)].map((_, num) => (
                <div key={num} className="num">{num}</div>
              ))}
            </div>
            <span className="marker"></span>
          </div>
          <div className="digit digit--units" style={{ transform: `translateY(-${secondsOffsets[1]}px)` }}>
            <div className="digit-inner">
              {[...Array(10)].map((_, num) => (
                <div key={num} className="num">{num}</div>
              ))}
            </div>
            <span className="marker" ></span>
          </div>
        </section>
      </div>
    </div>
  );
}
