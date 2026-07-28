const Footer: React.FC = () => {
  return (
    <footer className="text-center p-4 text-slate-500 text-sm border-t border-white/5">
      © {new Date().getFullYear()} Inż. Michał Pawłowski
    </footer>
  );
};

export default Footer;
