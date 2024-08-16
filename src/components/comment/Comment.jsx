import React from "react";
import Wrapper from "./Wrapper";
import { MdOutlineDateRange } from "react-icons/md";
import { TbClockHour10 } from "react-icons/tb";
import { FaQuoteLeft, FaQuoteRight, FaRegUser } from "react-icons/fa6";

export default function Comment({ content, date, hour, user_ID: username }) {
  return (
    <Wrapper>
      <div className="header">
        <FaRegUser />
        <div className="user-info">
          <h5>{username}</h5>
          <div className="date-time">
            <div className="date">
              <MdOutlineDateRange />
              <span>{date}</span>
            </div>
            <div className="hour">
              <TbClockHour10 />
              <span>{hour}</span>
            </div>
          </div>
        </div>
      </div>
      <p>
        <FaQuoteLeft /> {content} <FaQuoteRight />
      </p>
    </Wrapper>
  );
}
