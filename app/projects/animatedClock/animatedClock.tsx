import { useLanguage } from '~/contexts/LanguageContext';
import { useState, useEffect, useMemo } from 'react';
import type { LinksFunction } from "@remix-run/node";
import animatedClockStyles from "../../styles/AnimatedClock.css?url";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: animatedClockStyles
  },
];

export default function AnimatedClockProject() {
  const { language } = useLanguage();
  const NUM_HEIGHT = 40;

  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval> | null>(null);
  const [now, setNow] = useState<Date | null>(null);
  const [nowHours, setNowHours] = useState<string | null>(null);
  const [nowMinutes, setNowMinutes] = useState<string | null>(null);
  const [nowSeconds, setNowSeconds] = useState<string | null>(null);

  const nowPrefix = (num: number) => num < 10 ? "0" : "";

  useEffect(() => {
    update();
    const id = setInterval(update, 1000);
    setIntervalId(id);
    return () => id && clearInterval(id);
  }, []); 

  useEffect(() => {
    if (!now) return;
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    setNowHours(`${nowPrefix(hours)}${hours}`);
    setNowMinutes(`${nowPrefix(minutes)}${minutes}`);
    setNowSeconds(`${nowPrefix(seconds)}${seconds}`);
  }, [now]);

  const hoursOffsets = useMemo(() => [
    nowHours ? Number(nowHours.charAt(0)) * NUM_HEIGHT : 0,
    nowHours ? Number(nowHours.charAt(1)) * NUM_HEIGHT : 0
  ], [nowHours]);

  const minutesOffsets = useMemo(() => [
    nowMinutes ? Number(nowMinutes.charAt(0)) * NUM_HEIGHT : 0,
    nowMinutes ? Number(nowMinutes.charAt(1)) * NUM_HEIGHT : 0
  ], [nowMinutes]);

  const secondsOffsets = useMemo(() => [
    nowSeconds ? Number(nowSeconds.charAt(0)) * NUM_HEIGHT : 0,
    nowSeconds ? Number(nowSeconds.charAt(1)) * NUM_HEIGHT : 0
  ], [nowSeconds]);

  const update = () => setNow(new Date());

  const getMarkerStyle = (offset: number) => ({
    transform: `translate(-50%, ${offset}px)`,
    transition: `transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)`
  });

  const getDigitStyle = (offset: number) => ({
    transform: `translateY(-${offset}px)`,
    transition: `transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)`
  });

  return (
    <div>
      <div className="title">
        <h1>{language === 'tr' ? 'Animasyonlu Saat' : 'Animated Clock'}</h1>
        <div className="buttons">
          <button className="start" onClick={() => !intervalId && setIntervalId(setInterval(update, 1000))}>
            {language === 'tr' ? 'Başlat' : 'Start'}
          </button>
          <button className="stop" onClick={() => intervalId && (clearInterval(intervalId), setIntervalId(null))}>
            {language === 'tr' ? 'Durdur' : 'Stop'}
          </button>
        </div>
      </div>
      <div className="clock-container">
        <section className="digits digits--hours">
          <div className="digit digit--tens" style={getDigitStyle(hoursOffsets[0])}>
            <div className="digit-inner">
              {[...Array(3)].map((_, num) => (
                <div key={num} className="num">{num}</div>
              ))}
            </div>
            <span className="marker" style={getMarkerStyle(hoursOffsets[0])}></span>
          </div>
          <div className="digit digit--units" style={getDigitStyle(hoursOffsets[1])}>
            <div className="digit-inner">
              {[...Array(10)].map((_, num) => (
                <div key={num} className="num">{num}</div>
              ))}
            </div>
            <span className="marker" style={getMarkerStyle(hoursOffsets[1])}></span>
          </div>
        </section>

        <section className="digits digits--minutes">
          <div className="digit digit--tens" style={getDigitStyle(minutesOffsets[0])}>
            <div className="digit-inner">
              {[...Array(6)].map((_, num) => (
                <div key={num} className="num">{num}</div>
              ))}
            </div>
            <span className="marker" style={getMarkerStyle(minutesOffsets[0])}></span>
          </div>
          <div className="digit digit--units" style={getDigitStyle(minutesOffsets[1])}>
            <div className="digit-inner">
              {[...Array(10)].map((_, num) => (
                <div key={num} className="num">{num}</div>
              ))}
            </div>
            <span className="marker" style={getMarkerStyle(minutesOffsets[1])}></span>
          </div>
        </section>

        <section className="digits digits--seconds">
          <div className="digit digit--tens" style={getDigitStyle(secondsOffsets[0])}>
            <div className="digit-inner">
              {[...Array(6)].map((_, num) => (
                <div key={num} className="num">{num}</div>
              ))}
            </div>
            <span className="marker" style={getMarkerStyle(secondsOffsets[0])}></span>
          </div>
          <div className="digit digit--units" style={getDigitStyle(secondsOffsets[1])}>
            <div className="digit-inner">
              {[...Array(10)].map((_, num) => (
                <div key={num} className="num">{num}</div>
              ))}
            </div>
            <span className="marker" style={getMarkerStyle(secondsOffsets[1])}></span>
          </div>
        </section>
      </div>
    </div>
  );
}
