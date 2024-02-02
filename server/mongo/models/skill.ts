import Attribute from "./attribute";

export default interface Skill {
    name: string;
    description: string;
    governingattribute: Attribute;
}