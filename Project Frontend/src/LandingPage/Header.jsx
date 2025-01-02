// components/Header.jsx
const Header = () => {
    return (
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Alumni Portal</div>
          <nav className="space-x-4">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About Us</a>
            <a href="#events" className="hover:text-blue-600">Events</a>
            <a href="#careers" className="hover:text-blue-600">Career Paths</a>
            <a href="/directory" className="hover:text-blue-600">Directory</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Login/Signup</button>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  