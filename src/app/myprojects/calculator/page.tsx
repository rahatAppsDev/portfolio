


import Calculatorpage from "@/projectsfolder/calculatorcomps/Calculatorpage/Calculatorpage"
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Calculator | Rahat",
  description: "Calculator practice project",
  icons: {
    icon: "https://rahatappsdev.github.io/portfolio/assets/images/pic.jpeg"
  }
};
export default function Calculator() {


    return (
        <>
        <Calculatorpage />
        </>
    )

}