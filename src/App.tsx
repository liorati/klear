import { useState } from "react";
import "./App.css";
import { BrandsForm } from "./components/BrandsForm";
import { ExpertiesForm } from "./components/ExpertiesForm";
import { NameForm } from "./components/NameForm";
import { useMultiStepForm } from "./components/useMultiStepForm";

type FormData = {
  name: string;
  experties: Array<string>;
  brands: Array<string>;
};
const INITIAL_DATA: FormData = {
  name: "",
  experties: [],
  brands: [],
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateData(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <NameForm {...data} updateData={updateData} />,
      <ExpertiesForm {...data} updateData={updateData} />,
      <BrandsForm {...data} updateData={updateData} />,
    ]);
  return (
    <div
      style={{
        position: "relative",
        background: "white",
        padding: "2rem",
        margin: "1rem",
        width: "40%",
        left: "25%",
      }}
    >
      <form>
        <div
          style={{
            position: "absolute",
            bottom: ".5rem",
            right: "30%",
            left: "30%",
          }}
        >
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}

          <button type="button" onClick={next}>
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
