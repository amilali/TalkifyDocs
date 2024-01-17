"use client";

import { Avatar } from "flowbite-react";

export function CircularAvatar() {
  return (
    <div className="flex flex-wrap gap-2">
       <Avatar.Group>
      <Avatar
        img="https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/smokhfs2uevnppc2bmwl"
        rounded
        status="online"
        statusPosition="top-left" stacked
      />
      <Avatar
        img="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
        rounded
        status="online"
        statusPosition="top-left"stacked
      />
      <Avatar
        img="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
        rounded
        status="online"
        statusPosition="top-left" stacked
      />
    <Avatar.Counter total={999} href="#" />
    </Avatar.Group>
    </div>
  );
}
