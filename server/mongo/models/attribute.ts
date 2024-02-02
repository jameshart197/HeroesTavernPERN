export default interface  Attribute {
    name: "Strength"|"Dexterity"|"Constitution"|"Intelligence"|"Wisdom"|"Charisma";
    description: string;
    score: number;
    modifier: ()=>number;
}