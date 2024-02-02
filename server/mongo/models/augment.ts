export default interface Augment {
    name?: string,
    path: string,
    action: "add" | "update"
}