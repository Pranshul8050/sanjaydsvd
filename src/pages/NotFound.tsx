import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="text-center px-4 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary">
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
