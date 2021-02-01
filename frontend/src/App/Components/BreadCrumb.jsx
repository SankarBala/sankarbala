import React, { useLocation } from "react";

const Breadcrumb = (props) => {
  
  const link = props.link || useLocation().pathname;

  return (
    <div className="capitalize text-lg">
      {link
        .replace(/^\/+|\/+$/g, "")
        .split("/")
        .map((item, index) => {
          if (index < link.replace(/^\/+|\/+$/g, "").split("/").length - 1) {
            return (
              <React.Fragment>
                <Link
                  key={index}
                  to={item}
                  className="text-yellow-500 hover:text-white"
                >
                  {item}
                </Link>
                <span> &gt;&gt; </span>
              </React.Fragment>
            );
          } else {
            return (
              <span key={index} className="">
                {item}
              </span>
            );
          }
        })}
    </div>
  );
};

export default Breadcrumb;
