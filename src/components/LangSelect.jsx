export default function LangSelect({ currentVal }) {
    return (
        <select defaultValue={currentVal} onChange={(e) => window.location.href = `/${e.target.value}`}>
            <option value="es">ES</option>
            <option value="en">EN</option>
        </select>
    );
}