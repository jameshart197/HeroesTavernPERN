import Feature from "./feature";
import Race from "./race";

export default interface Subrace {
    name: string;
    parentrace: Race;
    shortdescription: string;
    fulldescription: string;
    features: Feature;
}