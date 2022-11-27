import {User} from "../shared/models/User";
import useAPI from "../shared/UseAPI";
import React from "react";

export default function Navbar() {

    const [user, setUser] = React.useState<User | null>(null);

    // const userRequest = useAPI<User>("loginUser", ["example@mail.de","password"]);


    return (
        <div className="navbar bg-primary text-primary-content rounded-[25px]">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">HBRS Wetter App</a>
            </div>
            <div className="flex-none pr-1">
                {user && <label className="normal-case text-xl">Hello {user.firstname}</label>}
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people"/>
                        </div>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-600 border border-primary rounded-box w-52">
                        {user ? ShowDefaultDropdown() : ShowLogin()}
                    </ul>
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
            <form className="bg-gray-600 rounded px-8 pt-6 pb-8 mb-4">
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


