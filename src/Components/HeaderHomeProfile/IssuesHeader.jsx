import { BiDisc } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function IssuesHeader() {
  return (
    <>
      <div className=" opacity-60">
        <Link className="flex items-center py-1">
          <BiDisc />
        </Link>
      </div>
    </>
  );
}
