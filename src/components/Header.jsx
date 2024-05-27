// import { useLocation } from "react-router-dom";

// export default function Header() {
//     const location = useLocation();
    
    
//     function pathMathRoute(route){
//         if (route === location.pathname) {
//             return true
//         }
//     }

//     console.log(location.pathname)

//   return (
//     <div className="bg-white border-b shadow-lg sticky top-0 z-50">
//         <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
//             <div>
//                 <img src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg/" alt="logo" />
//             </div>

//             <div>
//                 <ul className="flex space-x-10" >
//                     <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
//                     ${pathMathRoute("/") && "text-black border-b-red-500"}`}>Home</li>
//                     <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
//                     ${pathMathRoute("/offers") && "text-black border-b-red-500"}`}>Offers</li>
//                     <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
//                     ${pathMathRoute("/sign-in") && "text-black border-b-red-500"}`}>Sign In</li>
//                 </ul>
//             </div>
//         </header>
//     </div>
//   )
// }


// import { useLocation } from "react-router-dom"; // Ensure you're importing from 'react-router-dom'

// export default function Header() {
//     const location = useLocation();
    
//     function isActiveRoute(route) {
//         return route === location.pathname;
//     }

//     // console.log(location.pathname);
//     console.log(isActiveRoute);
    
//     return (
//         <div className="bg-white border-b shadow-lg sticky top-0 z-50">
//             <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
//                 <div>
//                     <img 
//                         src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg/" // Corrected the URL
//                         alt="logo" 
//                     />
//                 </div>

//                 <div>
//                     <ul className="flex space-x-10">
//                         <li 
//                             className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
//                             ${isActiveRoute("/") && "text-black border-b-red-500"}`}
//                         >
//                             Home
//                         </li>
//                         <li 
//                             className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
//                             ${isActiveRoute("/offers") && "text-black border-b-red-500"}`}
//                         >
//                             Offers
//                         </li>
//                         <li 
//                             className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
//                             ${isActiveRoute("/sign-in") && "text-black border-b-red-500"}`}
//                         >
//                             Sign In
//                         </li>
//                     </ul>
//                 </div>
//             </header>
//         </div>
//     );
// }


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
                        src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg/" // Corrected the URL
                        alt="logo" 
                        onClick={() => navigate('/')} // Navigate to home on logo click
                        className="cursor-pointer" // Add cursor pointer to indicate clickable image
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
