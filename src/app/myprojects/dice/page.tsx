

import Gamescreen from "@/projectsfolder/dicegamecomps/gamescreen/Gamescreen";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dice Game | Rahat",
    description: "Dice game practice project",
    icons: {
        icon: "https://rahatappsdev.github.io/portfolio/assets/images/pic.jpeg"
      }
  };
export default function Dice() {
    return (
        <><Gamescreen /></>
    )
}