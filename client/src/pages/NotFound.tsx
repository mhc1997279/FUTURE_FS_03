import { Link } from "react-router-dom";
import { ROUTES } from "../config/business";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-9xl font-bold text-slate-200">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-4">Page Not Found</h2>
      <p className="text-slate-500 mt-4 max-w-md">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link to={ROUTES.HOME} className="btn-primary mt-8">
        <Home size={20} />
        Back to Home
      </Link>
    </div>
  );
}
