export default function Home() {
  return (
    <div>
      <Header />
      <Description />
      <ProjectList />
    </div>
  );
}

function Header() {
  return (
    <nav className="relative border-b-4 pb-6">
      <div className="absolute left-0">
        <h1>Victor Boynton</h1>
      </div>
      <ul>
        <li className = "absolute right-0 px-2 border">Contact</li>
        <li className = "hover:bg-cyan-600 absolute right-20 px-2 border">About Me</li>
      </ul>
    </nav>
  );
}

function Navbar() {}

function Description() {
  return (
    <p>
      Hello! My name is Victor Boynton, and I am an aspiring web developer. I
      have worked for years to gather the skills necessary to enter the tech
      industry, and I think that now is the right time for me to do just that.
    </p>
  );
}

function ProjectList() {
  return <p>Project List</p>;
}

function Project() {
  return <p>project</p>;
}

function Footer() {
  return <p>footer</p>;
}
