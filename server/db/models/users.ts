import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { characters, charactersId } from './characters';

export interface usersAttributes {
  id: number;
  username: string;
  role?: string;
  date_created?: Date;
  password?: string;
}

export type usersPk = "id";
export type usersId = users[usersPk];
export type usersOptionalAttributes = "role" | "date_created" | "password";
export type usersCreationAttributes = Optional<usersAttributes, usersOptionalAttributes>;

export class users extends Model<usersAttributes, usersCreationAttributes> implements usersAttributes {
  id!: number;
  username!: string;
  role?: string;
  date_created?: Date;
  password?: string;

  // users hasMany characters via user_id
  characters!: characters[];
  getCharacters!: Sequelize.HasManyGetAssociationsMixin<characters>;
  setCharacters!: Sequelize.HasManySetAssociationsMixin<characters, charactersId>;
  addCharacter!: Sequelize.HasManyAddAssociationMixin<characters, charactersId>;
  addCharacters!: Sequelize.HasManyAddAssociationsMixin<characters, charactersId>;
  createCharacter!: Sequelize.HasManyCreateAssociationMixin<characters>;
  removeCharacter!: Sequelize.HasManyRemoveAssociationMixin<characters, charactersId>;
  removeCharacters!: Sequelize.HasManyRemoveAssociationsMixin<characters, charactersId>;
  hasCharacter!: Sequelize.HasManyHasAssociationMixin<characters, charactersId>;
  hasCharacters!: Sequelize.HasManyHasAssociationsMixin<characters, charactersId>;
  countCharacters!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof users {
    return users.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "users_username_key"
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "users_username_key",
        unique: true,
        fields: [
          { name: "username" },
        ]
      },
    ]
  });
  }
}
