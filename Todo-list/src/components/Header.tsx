import plusIcon from "../assets/plus.png";
function Header() {
    return (
        <div className="flex bg-blue-600 justify-between p-2 rounded-md">
            <h1 className="text-white">To-do List</h1>
            <input
                type="text"
                name=""
                id=""
                className="bg-blue-950 text-white"
            />
            <img src={plusIcon} alt="" className="w-12.5" />
        </div>
    );
}

export default Header;
