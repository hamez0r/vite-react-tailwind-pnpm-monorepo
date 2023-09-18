import React from "react";
import { Link } from "react-router-dom";

interface Props {}

export const TopBar: React.FC<Props> = () => {
  return (
    <div className="p-4 bg-red-400">
      <Link to="/">
        Home
      </Link>
    </div>
  );
};
