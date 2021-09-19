export default function ArrayTextArea({label, value, onChange}) {
  return (
    <div>
      <label>{label}</label>
      <textarea rows="5" wrap="hard" value={value} onChange={onChange} />
    </div>
  );
}