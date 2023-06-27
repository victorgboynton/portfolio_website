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
		<nav className="flex-between w-full px-4">
			<div className="flex gap-3">
				<p>Victor Boynton</p>
			</div>
			<div className="flex justify-right">
				<p>Contact</p>
				<p>About Me</p>
			</div>
		</nav>
	);
}

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
