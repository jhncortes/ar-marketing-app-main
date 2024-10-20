import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";
import { UserRoundSearch } from 'lucide-react';
import { SearchSlash } from 'lucide-react';
import { BookOpen } from 'lucide-react';
import { NotebookPen } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';





export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['Info', 'About Us', 'Contact', 'Booking'];
  const routes = ['/info', '/about', '/contact', '/booking'];
  const icons = [
    <BookOpen className="w-5 h-5 mr-2"/>, 
    <SearchSlash className="w-5 h-5 mr-2"/>, 
    <UserRoundSearch className="w-5 h-5 mr-2"/>, 
    <NotebookPen className="w-5 h-5 mr-2"/>
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    console.log(isOpen);
  })

  return (
    <header className="flex justify-between items-center mx-8 p-2">
      <span className="mr-4 block cursor-pointer py-1.5 text-sm text-left font-semibold">
          <Link to='/'>Wicked Interactive <br></br>Storytelling</Link>
      </span>
      <nav className="flex items-center gap-7 text-muted-foreground text-sm">
        {links.map((link, index) => {
          return (
            <Link to={routes[index]} className="hidden md:flex hover:text-primary hover:scale-105 transition-all">
              {icons[index]}
              {link}
            </Link>
            
          );
        })}
        <Menu className='md:hidden'onClick={toggleMenu}/>
      </nav>

    </header>
  );
}


