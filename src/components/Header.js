export default function Header() {
  return (
    <header className="bg-primary text-light py-4 px-8 flex justify-between items-center">
      <div className="text-2xl font-bold">Tranxity</div>
      <nav className="space-x-4">
        <a href="#features" className="text-light hover:underline">
          Features
        </a>
        <a href="#pricing" className="text-light hover:underline">
          Pricing
        </a>
        <a href="#contact" className="text-light hover:underline">
          Contact
        </a>
      </nav>
    </header>
  );
}
