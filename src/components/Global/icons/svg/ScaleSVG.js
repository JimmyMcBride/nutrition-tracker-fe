import React from "react";

export default ({
  width = "28",
  height = "28",
  fill = "#495057",
  margin = "0",
  padding = "4 0 0 3",
  viewBox = "0 0 25 25"
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      style={{ margin: `${margin}`, padding: `${padding}` }}
      viewBox={viewBox}
    >
      <path
        d="M20.1841 17.6735C20.1425 18.3252 19.8444 18.8759 19.2897 19.3255C18.735 19.7752 18.0902 20 17.3553 20H4.04288C3.30792 20 2.66311 19.7752 2.10842 19.3255C1.55374 18.8759 1.24867 18.3252 1.1932 17.6735L0.00756385 3.04985C-0.0479044 2.21571 0.201703 1.49886 0.756385 0.899316C1.31107 0.299772 2.01829 0 2.87805 0H18.4161C19.2758 0 19.9865 0.299772 20.5481 0.899316C21.1098 1.49886 21.3628 2.21571 21.3074 3.04985L20.1841 17.6735ZM10.6575 2.50244C9.27076 2.50244 7.97766 2.82502 6.77816 3.47019C5.57866 4.11535 4.65303 5.04399 4.00128 6.25611L8.53581 7.95699L6.85096 4.80938C6.72616 4.67905 6.66375 4.52916 6.66375 4.35973C6.66375 4.19029 6.72962 4.04366 6.86136 3.91984C6.9931 3.79602 7.1491 3.73412 7.32937 3.73412C7.50964 3.73412 7.66218 3.79928 7.78699 3.92962L11.1359 7.52688C11.7738 7.57902 12.3007 7.7289 12.7167 7.97654L17.3137 6.25611C16.6619 5.04399 15.7363 4.11535 14.5368 3.47019C13.3373 2.82502 12.0442 2.50244 10.6575 2.50244Z"
        fill={fill}
      />
      ;
    </svg>
  );
};