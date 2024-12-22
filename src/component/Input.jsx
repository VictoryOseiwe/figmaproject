export default function Input({ type, placeholder, className, value }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      value={value}
    />
  );
}
