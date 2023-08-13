import { parseISO, formatDistanceToNow } from "date-fns";

import React from "react";

const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  let formattedDate = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    formattedDate = date.toString()
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;

  }
  return (
    <span title={formattedDate}>
      &nbsp;
      <i>{timeAgo}</i>
    </span>
  );
};

export default TimeAgo;
