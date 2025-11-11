import logo from '/vite.svg'
export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="ThoughtMix" type="image/svg+xml" />
            <h1>ThoughtMix</h1>
        </div>
    );
}