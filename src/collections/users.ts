import { buildCollection, buildProperty } from "firecms";

type TUsers = {
  points: number;
  unlockackages: string[];
};

export const usersCollection = buildCollection<TUsers>({
  path: "users",
  name: "Users Unlock & Balance",
  textSearchEnabled: true,
  properties: {
    points: buildProperty({
      dataType: "number",
      name: "Points",
      validation: { required: true, min: 0, max: 1000000 },
    }),
    unlockackages: buildProperty({
      dataType: "array",
      name: "Unlocked Packages",
      validation: { required: true, min: 0 },
      of: {
        dataType: "string",
        config: {
          collectionPath: "packages",
          previewProperties: ["name"],
        },
      },
      config: {
        collectionPath: "packages",
        previewProperties: ["name"],
      },
    }),
  },
});
