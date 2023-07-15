import { component$ } from "@builder.io/qwik";
import { useAuthSession } from "~/routes/plugin@auth";
import Signin from "./signin";
import Signout from "./signout";

export default component$(() => {
  const session = useAuthSession();

  return !session.value?.user ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "4rem",
      }}
    >
      <Signin />
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "4rem",
      }}
    >
      <Signout />
    </div>
  );
});
