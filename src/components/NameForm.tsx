type NameData = {
  name: string;
};

type NameFormProps = NameData & {
  //combines all types
  updateData: (fields: Partial<NameData>) => void;
};

export function NameForm({ name, updateData }: NameFormProps) {
  return (
    <>
      <h4 style={{ color: "gray", textAlign: "center" }}> Welcome! </h4>
      <h5 style={{ textAlign: "center" }}> How should we call you? </h5>
      <input
        style={{
          position: "relative",
          display: "block",
          margin: "0 auto",
        }}
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => updateData({ name: e.target.value })}
      />
    </>
  );
}
