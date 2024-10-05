export default function Footer() {
  return (
    <footer className="bg-gray-300 mt-auto py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0 flex gap-3 items-center">
            <img
              src="https://msol.dev/assets/images/nav-brand.png"
              alt="company logo"
              width="130"
              height="130"
            />
            {/* <span className="font-bold">Momentum Solutions Co.</span> */}
          </div>
          <p>Momentum Company Co.</p>
          <div>
            <span className="text-sm">
              Submitted on: Saturday, October 5th, 2024
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
