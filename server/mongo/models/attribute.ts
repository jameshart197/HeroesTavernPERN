export default interface Attribute {
    name:
        | { fullname: "Strength"; abbrv: "STR" }
        | { fullname: "Dexterity"; abbrv: "DEX" }
        | { fullname: "Constitution"; abbrv: "CON" }
        | { fullname: "Intelligence"; abbrv: "INT" }
        | { fullname: "Wisdom"; abbrv: "WIS" }
        | { fullname: "Charisma"; abbrv: "CHA" };
    description: string;
    score: number;
    modifier: () => number;
}
