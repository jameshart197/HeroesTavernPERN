import Class from "./class";
import Feature from "./feature";


export default interface Subclass{
    name: string;
    parentclass: Class;
    description: string;
    features: Feature[];
}