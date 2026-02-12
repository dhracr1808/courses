import { Switch } from "./switch/Switch";
import { Button } from "./button/Button";
import { Label } from "./Label";
import { Observer } from "@/pattern";
import toast from "react-hot-toast";
const LogerMessage = (message: string) => {
  console.log("logger: ", message);
};

/* const promiseResolve = () => {
  return new Promise((succ) => {
    setTimeout(() => {
      succ("todo bien");
    }, 1000);
  });
}; */

const ToastMessage = (message: string) => {
  /* toast.promise(promiseResolve, {
    loading: "Cargando...",
    success: (data) => `${message} - ${data} `,
    error: (err) => err,
  }); */
  toast.success(message);
};

const oberser = new Observer();

oberser.suscribe(LogerMessage);
oberser.suscribe(ToastMessage);

export const MyCustomComponent = () => {
  const handleClick = () => {
    oberser.notify("Mensanje enviado por click");
  };

  const handleChange = () => {
    oberser.notify("Mensanje enviado por toggle");
  };

  return (
    <div>
      <Label
        childen={<Switch onChange={handleChange}></Switch>}
        label="switch label"
      ></Label>

      <Button childen={"click me"} parentMethod={handleClick} />
      <Button childen={"don't click me"} parentMethod={handleClick} />
    </div>
  );
};
