
import Todo from "@/projectsfolder/Todos/Todo/Todo"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Todo | Rahat",
    description: "Todo practice project",
    icons: {
        icon: "https://rahatappsdev.github.io/portfolio/assets/images/pic.jpeg"
      }
  };
export default function Todopage() {
    return (
        <div>
            <Todo />
        </div>
    )

}