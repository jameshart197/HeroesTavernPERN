import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { users, usersId } from './users';

export interface charactersAttributes {
  id: number;
  name: string;
  user_id?: number;
  created_at?: Date;
  mongo_id?: string;
}

export type charactersPk = "id";
export type charactersId = characters[charactersPk];
export type charactersOptionalAttributes = "user_id" | "created_at" | "mongo_id";
export type charactersCreationAttributes = Optional<charactersAttributes, charactersOptionalAttributes>;

export class characters extends Model<charactersAttributes, charactersCreationAttributes> implements charactersAttributes {
  id!: number;
  name!: string;
  user_id?: number;
  created_at?: Date;
  mongo_id?: string;

  // characters belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof characters {
    return characters.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    mongo_id: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'characters',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "characters_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
