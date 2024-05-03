import { Outlet } from "react-router-dom";
import React from 'react';

const PublicRouter = () => {
  return (
    <div>
        <div>Public Router</div>
        <Outlet />
    </div>
  )
}

export default PublicRouter;
