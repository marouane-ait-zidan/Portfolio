import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { gsap } from "gsap";
import './preloader.scss';
import logo from '../assets/images/preload.svg';

function LinearProgressWithLabel(props) {
    const el = React.useRef();
    const tl = React.useRef();
    const q = gsap.utils.selector(el);

    React.useEffect(() => {
        tl.current = gsap.timeline()
      .to(q(".square"), {
        opacity: .7
      })
      .to(q(".square"), {
        duration: 1.5, ease: "powerInOut", opacity: 1, repeat: -1, yoyo: true
      });
      }, []);
  return (
    <div className="preload">
      <div className="loader">
        <LinearProgress variant="determinate" {...props} />
      </div>
      <div className="progress">
        <Typography variant="body2" color="">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </div>
    </div>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box>
      <div className="anime">
      <div className="load">
      <svg
        viewBox="0 0 857 151"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        {/* Your other graphics (background shapes, animations…) go here */}

        {/* Replace the outlined paths for ONYEDIKA with this: */}
        <text
          x="10"
          y="120"
          fontFamily="Arial, sans-serif"
          fontSize="140"
          fill="none"
          stroke="#10e956"
          strokeWidth="5"
          strokeLinejoin="miter"
          strokeLinecap="butt"
          textAnchor="start"
        >
            AIT ZIDANE
        </text>
      </svg>
      </div>
      {/* <LinearProgressWithLabel value={progress} /> */}
      </div>
    </Box>
  );
}
