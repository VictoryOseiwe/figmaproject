export default function Input({ type, placeholder, className, value }) {
  return (
    // defining an input element for resuability
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      value={value}
    />
  );
}
