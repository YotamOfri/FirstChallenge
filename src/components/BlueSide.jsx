export function BlueSide() {
  return (
    <div className="font-body bg-gradient-to-b from-Gradients-slate to-Gradients-royal flex flex-col justify-evenly items-center h-full sm:w-1/2 rounded-Custom border border-solid border-Primary-Cobaltblue text-Neutral-White w-full">
      <div className="text-Neutral-LightLavender">Your Result</div>
      {/* circle */}
      <div className="rounded-full bg-gradient-to-b from-Gradients-Violet to-Gradients-Persian w-40 h-40 flex items-center justify-center flex-col">
        <div>
          <h1 className="text-6xl">76</h1>
        </div>
        <h3 className="text-Neutral-LightLavender">of 100</h3>
      </div>
      <div className="flex justify-center items-center flex-col gap-3">
        <div>
          <h1 className="text-3xl">Great</h1>
        </div>
        <div className="w-3/4 text-center">
          <h3 className="text-Neutral-LightLavender">
            You scored higher than 65% of the people who have taken these tests.
          </h3>
        </div>
      </div>
    </div>
  );
}
