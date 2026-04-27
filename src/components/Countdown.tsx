"use client";

import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<{ days: string; hours: string; minutes: string; seconds: string }>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });

  useEffect(() => {
    // 08:30 Ngày 03/05/2026
    const targetDate = new Date("2026-05-03T08:30:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <div className="time-box">
        <span className="num">{timeLeft.days}</span>
        <span className="text">Ngày</span>
      </div>
      <div className="time-box">
        <span className="num">{timeLeft.hours}</span>
        <span className="text">Giờ</span>
      </div>
      <div className="time-box">
        <span className="num">{timeLeft.minutes}</span>
        <span className="text">Phút</span>
      </div>
      <div className="time-box">
        <span className="num">{timeLeft.seconds}</span>
        <span className="text">Giây</span>
      </div>
    </div>
  );
}
