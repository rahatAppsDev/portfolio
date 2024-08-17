

import Dicegamepage from "@/projectsfolder/dicegamecomps/Dicegamepage/Dicegamepage"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dice Game | Rahat",
    description: "Dice game practice project",
    icons: {
        icon: "/assets/images/pic.jpeg"
      }
  };
export default function Dice() {
    return (
        <><Dicegamepage /></>
    )
}