import type { Sequelize } from "sequelize";
import { characters as _characters } from "./characters";
import type { charactersAttributes, charactersCreationAttributes } from "./characters";
import { users as _users } from "./users";
import type { usersAttributes, usersCreationAttributes } from "./users";

export {
  _characters as characters,
  _users as users,
};

export type {
  charactersAttributes,
  charactersCreationAttributes,
  usersAttributes,
  usersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const characters = _characters.initModel(sequelize);
  const users = _users.initModel(sequelize);

  characters.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(characters, { as: "characters", foreignKey: "user_id"});

  return {
    characters: characters,
    users: users,
  };
}
