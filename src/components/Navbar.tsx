import {User} from "../shared/models/User";
import useAPI from "../shared/UseAPI";
import React from "react";

export default function Navbar() {

    const [user, setUser] = React.useState<User | null>(null);
    //const user: User = { id: 1, email: "test", firstname: "test", lastname: "test", profile_photo_url: null};
    // const userRequest = useAPI<User>("loginUser", ["example@mail.de","password"]);


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
                                    {user ? <span className={"text-xs"}>{user?.firstname.charAt(0)}{user?.lastname.charAt(0)}</span>:
                                        <span className={"text-xs"}>Login</span>}
                                </div>
                            </div>

                        </label>
                        <ul tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary border border-primary rounded-box w-52">
                            {user ? ShowDefaultDropdown() : ShowLogin()}
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

function ShowDefaultDropdown() {
    return (
        <div>
            <li>
                <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
        </div>

    )
}

function ShowLogin() {
    return (
        <div>
            <form className="bg-primary rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-primary-content text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none bg-base-100 rounded w-full py-2 px-3 text-primary-content leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="Username"/>
                </div>
                <div className="mb-6">
                    <label className="block text-primary-content text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none bg-base-100 border border-red-500 rounded w-full py-2 px-3 text-primary-content mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="******************"/>
                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="btn  btn-outline py-2 px-4 focus:outline-none focus:shadow-outline"
                        type="button">
                        Sign In
                    </button>
                </div>
            </form>
        </div>

    )
}

function LocationBadge(location: string, temperature: number, active: boolean = false) {
    return (
        <div className={"px-2"}>
            <span className={`badge badge-lg border-1 ${active ? "border-primary-focus" : "border-primary-content" }`}>{location} {temperature}°</span>
        </div>
    )
}



