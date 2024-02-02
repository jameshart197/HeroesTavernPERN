import Feature from "./feature";

export default interface Race {
    name: string;
    shortdescription: string;
    fulldescription: string;
    features: Feature[];
}