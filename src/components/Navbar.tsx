import {User} from "../shared/models/User";
import React, { useState } from "react";
import ProfileAndLoginDropdown from "./userprofile/ProfileAndLoginDropdown";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  return (
    <div>
      <div className="navbar bg-primary text-primary-content px-4">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">HBRS Wetter App</a>
        </div>
        <div className="flex-none pr-1">
          {user && <label className="normal-case text-xl">Hello {user.firstname}</label>}
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

              <div className="avatar placeholder">
                <div className="bg-primary-focus text-neutral-content rounded-full w-10">
                  {user ? <span className={"text-xs"}>{user?.firstname.charAt(0)}{user?.lastname.charAt(0)}</span> :
                    <span className={"text-xs"}>Login</span>}
                </div>
              </div>

            </label>
            <ul tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary border border-primary rounded-box w-52">
                <ProfileAndLoginDropdown user={user}/>
            </ul>
          </div>


        </div>
      </div>
      {/*Locations*/}
      <div className={"flex pt-3 px-8 items-center justify-center"}>
        <div className={"flex flex-row"}>
          {LocationBadge("Hamburg", 8, true)}
          {LocationBadge("Hamburg", 8)}
          {LocationBadge("Hamburg", 8)}
          {LocationBadge("Hamburg", 8)}
          {LocationBadge("Hamburg", 8)}
        </div>
      </div>
    </div>

  );
}


function LocationBadge(location: string, temperature: number, active: boolean = false) {
  return (
    <div className={"px-2"}>
      <span
        className={`badge badge-lg border-1 ${active ? "border-primary-focus" : "border-primary-content"}`}>{location} {temperature}°</span>
    </div>
  )
}



