import Feature from "./feature";
import SavingThrowProficiency from "./savingthrowproficiency";


export default interface Class{
    name: string;
    shortdescription: string;
    fulldescription: string;
    features: Feature[];
    savingthrowproficiencies: SavingThrowProficiency[];
    hitdie: "1d6" | "1d8" | "1d10" | "1d12";
}