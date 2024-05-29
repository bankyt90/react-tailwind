import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    
    function isActiveRoute(route) {
        return route === location.pathname;
    }

    return (
        <div className="bg-white border-b shadow-lg sticky top-0 z-50">
            <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
                <div>
                    <img
                        src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg/"
                        alt="logo" 
                        onClick={() => navigate('/')}
                        className="cursor-pointer"
                        />
                </div>

                <div>
                    <ul className="flex space-x-10">
                        <li 
                            onClick={() => navigate('/')}
                            className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${isActiveRoute("/") ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent"}`}
                        >
                            Home
                        </li>
                        <li 
                            onClick={() => navigate('/offers')}
                            className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${isActiveRoute("/offers") ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent"}`}
                        >
                            Offers
                        </li>
                        <li 
                            onClick={() => navigate('/sign-in')}
                            className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${isActiveRoute("/sign-in") ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent"}`}
                        >
                            Sign In
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
}
