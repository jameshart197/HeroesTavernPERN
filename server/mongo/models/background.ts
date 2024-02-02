import Feature from "./feature";
import Skill from "./skill";
import Language from "./language";

export default interface  Background {
    name: string;
    description: string;
    features: Feature[];
    skillproficiencies: Skill[];
    languages: Language[]
    equipment: string;
}