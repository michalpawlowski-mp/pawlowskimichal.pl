import { Link } from "react-router-dom";
import icon from "../../assets/icons/ui/arrow.svg";

type ButtonProps = {
  content: string;
  link: string;
  external?: boolean;
};

const Button: React.FC<ButtonProps> = ({ content, link, external = false }) => {
  const baseClasses =
    "inline-flex mx-auto items-center gap-2 rounded-2xl bg-slate-700 px-6 py-2 text-white font-medium shadow-lg transition-all duration-300 hover:bg-gray-800 hover:translate-x-1";

  if (external) {
    return (
      <a href={link} className={baseClasses} target="_blank" rel="noreferrer">
        <span>{content}</span>
        {icon && (
          <img
            src={icon}
            alt="ikonka strzałki"
            className="w-5 h-5 invert transition-transform duration-300"
          />
        )}
      </a>
    );
  }

  return (
    <Link to={link} className={baseClasses}>
      <span>{content}</span>
      {icon && (
        <img
          src={icon}
          alt="ikonka strzałki"
          className="w-5 h-5 invert transition-transform duration-300"
        />
      )}
    </Link>
  );
};

export default Button;
