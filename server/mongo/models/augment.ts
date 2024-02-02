import Feature from "./feature";
import Language from "./language";
import SavingThrowProficiency from "./savingthrowproficiency";
import SkillProficiency from "./skillproficiency";
import Spell from "./spell";
import ToolProficiency from "./toolproficiency";

export default interface Augment {
    name?: string,
    path: string,
    action: "add" | "update",
    item: Language[] | SkillProficiency[] | Spell[] | SavingThrowProficiency[] | ToolProficiency[] | Feature[]
}