import React from 'react'
import {BiGitPullRequest } from "react-icons/bi";
import { Link } from 'react-router-dom';

export function Pullrequest() {
  return (
    <div className=" opacity-60">
        <Link className="flex items-center py-1">
          <BiGitPullRequest />
        </Link>
    </div>
  )
}
