import { MdNotifications } from "react-icons/md";

import { Link } from "react-router-dom";
export function NotificationsProfile() {
  return (
    <>
      <div className=" opacity-60">
        <Link className="flex items-center py-1 justify-center">
        <MdNotifications />
        </Link>
      </div>
    </>
  );
}
