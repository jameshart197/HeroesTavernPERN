import Class from "./class";
import Subclass from "./subclass";

export default interface Level {
    class: Class;
    subclass?: Subclass;
}