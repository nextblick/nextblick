import React from "react"
/** @jsx jsx */
import { Global, css, jsx } from "@emotion/react"

const Eye = () => {
  return (
    <>
      <Global
        styles={css`
          .eye {
            position: relative;
            width: 20px;
            height: 20px;
            border: 2px solid #fff;
            border-radius: 75% 0;
            transform: rotate(45deg);
            overflow: hidden;
          }
          .ball {
            width: 5px;
            height: 5px;
            background: #fff;
            border-radius: 5px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
          }
          .shut {
            width: 28px;
            height: 22px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-45deg);
          }
          .shut span {
            display: block;
            width: 100%;
            height: 6px;
            background: #fff;
            transition: all 0.1s ease-in-out;
          }
          .eye:hover > .shut span {
            height: 100%;
          }
        `}
      />
      <div className="eye">
        <div className="shut">
          <span></span>
        </div>
        <div className="ball"></div>
      </div>
    </>
  )
}

export default Eye
