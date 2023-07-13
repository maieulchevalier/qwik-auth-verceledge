import { component$ } from "@builder.io/qwik";
import { useAuthSignout } from "~/routes/plugin@auth";

export default component$(() => {
  const signOut = useAuthSignout();
  return (
    <button
      onClick$={() => {
        signOut.submit({ callbackUrl: "/demo/todolist" }).then(() => {
          window.location.reload();
        });
      }}
    >
      Sign Out
    </button>
  );
});
