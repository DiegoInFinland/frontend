const socials = [
    { href: "https://github.com", icon: "bi-github", label: "GitHub", hover: "hover:text-sky-400" },
    { href: "https://twitter.com", icon: "bi-twitter-x", label: "Twitter", hover: "hover:text-sky-400" },
    { href: "https://instagram.com", icon: "bi-instagram", label: "Instagram", hover: "hover:text-sky-400" },
    { href: "https://facebook.com", icon: "bi-facebook", label: "Facebook", hover: "hover:text-sky-400" },
];


const Footer = () => {
    return (
        <footer className="text-center p-4">
            <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4 justify-center text-3xl">
                    {socials.map(({ href, icon, label, hover }) => (
                        <a
                            key={icon}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className={`p-4 cursor-pointer transition ${hover}`}
                        >
                            <i className={`bi ${icon}`} />
                        </a>
                    ))}
                </div>
                <div className="text-sm">
                    <p className="text-gray-600">© 2025 Diego. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 