import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
    return (
      <div className="flex flex-row justify-center align-center min-h-screen items-center w-full">
        <div className="grid h-screen place-content-center bg-white px-4">
          <div className="text-center">
            <h1 className="text-9xl font-black text-gray-200">404</h1>

            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mince alors !</p>

            <p className="mt-4 text-gray-500">Nous n'avons pas trouvé la page demandée.</p>

            <Link to="/">
              <span className="mt-6 inline-block rounded bg-sky-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring">
                Retourner à l'Accueil
              </span>
            </Link>
          </div>
        </div>
      </div>
    )
  };
  
export default NoPage;