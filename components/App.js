import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import useMedia from "../hooks/useMedia";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerPropsOptions = {
  mobile: {
    isPlaying: true,
    size: 90,
    strokeWidth: 5,
  },
  desktop: {
    isPlaying: true,
    size: 120,
    strokeWidth: 6,
  },
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function App() {
  const stratTime = Date.now() / 1; // use UNIX timestamp in seconds
  const endTime = stratTime + 1615057; // use UNIX timestamp in seconds

  const matchDesktop = useMedia("(min-width: 640px)");

  console.log(`matchDesktop == ${matchDesktop}`);

  const timerProps = matchDesktop ? timerPropsOptions.desktop : timerPropsOptions.mobile;

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div className="justify-center App">
      <div>
        <h1 className="my-5 text-4xl font-bold leading-snug tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-red-700">
          NUSAKU Launching on Market
        </h1>
      </div>
      <div className="flex justify-center flex-nowrap">
        <div className="mx-1.5 text-center lg:mx-2 ">
          <CountdownCircleTimer {...timerProps} colors={[["#7E2E84"]]} duration={daysDuration} initialRemainingTime={remainingTime}>
            {({ elapsedTime }) => renderTime("days", getTimeDays(daysDuration - elapsedTime))}
          </CountdownCircleTimer>
        </div>
        <div className="mx-1.5 text-center lg:mx-2 ">
          <CountdownCircleTimer
            {...timerProps}
            colors={[["#D14081"]]}
            duration={daySeconds}
            initialRemainingTime={remainingTime % daySeconds}
            onComplete={(totalElapsedTime) => [remainingTime - totalElapsedTime > hourSeconds]}
          >
            {({ elapsedTime }) => renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
          </CountdownCircleTimer>
        </div>
        <div className="mx-1.5 text-center lg:mx-2 ">
          <CountdownCircleTimer
            {...timerProps}
            colors={[["#EF798A"]]}
            duration={hourSeconds}
            initialRemainingTime={remainingTime % hourSeconds}
            onComplete={(totalElapsedTime) => [remainingTime - totalElapsedTime > minuteSeconds]}
          >
            {({ elapsedTime }) => renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
          </CountdownCircleTimer>
        </div>
        <div className="mx-1.5 text-center lg:mx-2 ">
          <CountdownCircleTimer
            {...timerProps}
            colors={[["#218380"]]}
            duration={minuteSeconds}
            initialRemainingTime={remainingTime % minuteSeconds}
            onComplete={(totalElapsedTime) => [remainingTime - totalElapsedTime > 0]}
          >
            {({ elapsedTime }) => renderTime("seconds", getTimeSeconds(elapsedTime))}
          </CountdownCircleTimer>
        </div>
      </div>
    </div>
  );
}
