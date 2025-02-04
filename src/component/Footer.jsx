// import { facebook } from  "lucide react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-center bg-amber-950 text-white p-3">
      <p>
        &copy; {currentYear} Developed by Rezaul karim. All rights reserved.
      </p>
      {/* {facebook} */}
    </div>
  );
};

export default Footer;
