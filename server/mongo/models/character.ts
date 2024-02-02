import Alignment from "./alignment";
import Attribute from "./attribute";
import Background from "./background";
import Class from "./class";
import Language from "./language";
import Level from "./level";
import Race from "./race";
import SavingThrowProficiency from "./savingthrowproficiency";
import SkillProficiency from "./skillproficiency";
import Spell from "./spell";
import Subclass from "./subclass";
import Subrace from "./subrace";
import ToolProficiency from "./toolproficiency";


export default interface Character{
    user: string;
    character_name: string;
    character_art: string;
    race: Race;
    subrace: Subrace;
    classes: Class[];
    subclasses: Subclass[];
    alignment: Alignment;
    background: Background;
    inspiration: boolean;
    faith: string;
    gender: string;
    age: string;
    height: string;
    weight: string;
    notes: string;
    backstory: string;
    allies: string;
    enemies: string;
    factions_and_orgs: string;
    hit_points: number;
    armor_class: number;
    attributes: Attribute[];
    levels: Level[];
    skill_proficiencies: SkillProficiency[];
    saving_throw_proficiencies: SavingThrowProficiency[];
    spells: Spell[];
    languages: Language[];
    tool_proficiencies: ToolProficiency;
    features_and_traits: any[];
}