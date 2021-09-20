import { TwoColGrid } from "../TwoColGrid";

export default function Checkbox({ checked, label, onChange }) {
  return (
    <TwoColGrid>
      <div>
        <label>{label}</label>
      </div>
      <div>
        <span>Multi-select</span>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span>A value is required</span>
      </div>
    </TwoColGrid>
  );
}
