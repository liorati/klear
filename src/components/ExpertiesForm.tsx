import { useState } from "react";

type ExpertiesData = {
  name: string;
  experties: Array<string>;
};
type ExpertiesFormProps = ExpertiesData & {
  updateData: (fields: Partial<ExpertiesData>) => void;
};

export function ExpertiesForm({ name, experties }: ExpertiesFormProps) {
  const [expertiesState, setExpertiesState] = useState({});
  const handleBoxes = (label: string) => {};
  return (
    <div>
      <h4 style={{ color: "gray", textAlign: "center" }}> Hi {name}</h4>
      <h5 style={{ textAlign: "center" }}> What are your experties? </h5>
      <input type="checkbox" /> <label>Life Style</label>
      <input type="checkbox" /> <label>Beauty </label>
      <input type="checkbox" /> <label>Food </label>
    </div>
  );
}
