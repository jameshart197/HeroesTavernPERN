export default interface Spell {
    name: string;
    spell_level: number;
    full_description: string;
    spell_reqs: "None" | "Verbal" | "Somatic" | "Material" | "Verbal and Somatic" | "Somatic and Material" | "Verbal, Somatic and Material";
}