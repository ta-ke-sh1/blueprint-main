import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { addAction } from "./steps/stepSlice";

export default function TrialRedux() {
  const test_steps = useSelector((state) => state.test_steps.steps);
  const dispatch = useDispatch();

  return (
    <>
      <div className="full-view-width full-view-height relative-container">
        <div className="absolute-container center-position">
          <h1 className="semi-bold">Trial redux</h1>
          <Button
            onClick={() => {
              socketQueue();
              console.log(test_steps);
              dispatch(
                addAction({
                  type: "send",
                  data: {
                    id: "01A",
                    equipmentId: "EQ_001",
                    state: "0",
                  },
                })
              );
            }}
          >
            Add Item
          </Button>
          {test_steps.map((step, index) => {
            return <div key={"test-item-" + index}>{step.type}</div>;
          })}
        </div>
      </div>
    </>
  );
}
