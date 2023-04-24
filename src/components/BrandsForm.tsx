type BrandsData = {
  name: string;
  experties: Array<string>;
  brands: Array<string>;
};
type BrandsFormProps = BrandsData & {
  updateData: (fields: Partial<BrandsData>) => void;
};
export function BrandsForm({ brands }: BrandsFormProps) {
  return (
    <>
      <h4 style={{ color: "gray", textAlign: "center" }}> One last thing </h4>
      <h5 style={{ textAlign: "center" }}>
        {" "}
        Have you collaborated with brands in the past?{" "}
      </h5>
    </>
  );
}
