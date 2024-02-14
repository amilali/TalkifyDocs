"use client";

import { Avatar } from "flowbite-react";

export function CircularAvatar() {
  return (
    <div className="flex flex-wrap gap-2">
       <Avatar.Group>
      <Avatar
        img="https://media.licdn.com/dms/image/D4D03AQH7RzooVhTPFw/profile-displayphoto-shrink_400_400/0/1696614706476?e=1712793600&v=beta&t=GpoW4YfSpjJb6DadU8RBcP1q1aGpEwe-lAkQjEO0AMw"
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
