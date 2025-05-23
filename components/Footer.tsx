// import { Leaf } from 'lucide-react'; // Optional: Add an icon

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          {/* <Leaf className="h-4 w-4 text-primary" /> */}
          <span>&copy; {currentYear} Agrinvest Ghana. All rights reserved.</span>
        </div>
        <div className="text-center sm:text-right">
          <p>Empowering Ghanaian Smallholder Farmers.</p>
          {/* Optional: Add social links or other footer links here */}
          {/* <div className="flex gap-4 mt-2 justify-center sm:justify-end">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
