import { RadioButtonOptions } from "@root/lib/helpers/radio-button-helper";

export default function RadioButton({
  name,
  radioButtonOptions,
}: {
  name: string;
  radioButtonOptions: RadioButtonOptions[];
}) {
  // Find the first visible value
  const firstVisible = radioButtonOptions.find((v) => v.visible)?.name;

  return (
    <div className="grid gap-2">
      <h1 className="text-black font-bold ">{name}</h1>
      <form className="flex items-center gap-4">
        {radioButtonOptions.map((value) => {
          return (
            <label
              key={name + value.name}
              className={`flex items-center gap-1 cursor-pointer rounded-md p-2 border shadow-md border-gray-400 bg-white/30 backdrop-blur-sm transition-colors hover:border-gray-900 ${
                !value.visible ? "opacity-50 grayscale" : ""
              }`}
              style={{ minWidth: 64, justifyContent: "center" }}
            >
              <input
                type="radio"
                name={name}
                value={value.name}
                disabled={!value.visible}
                defaultChecked={value.visible && value.name === firstVisible}
                className="accent-gray-900"
              />
              <span className="font-medium">{value.name}</span>
            </label>
          );
        })}
      </form>
    </div>
  );
}
