import {User} from "../../shared/models/User";

export default function ProfileAndLoginDropdown(props: {user: User | null}){
  return(
    <>
      {props.user ? ShowDefaultDropdown() : ShowLogin()}
    </>
  )
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
