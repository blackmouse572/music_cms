import { buildCollection, buildProperty } from "firecms";

type TPackage = {
  name: string;
  price: number;
  playlists: string[]; //Ref to playlist path
};

export const packageCollection = buildCollection<TPackage>({
  path: "packages",
  name: "Packages",
  textSearchEnabled: true,
  properties: {
    name: buildProperty({
      dataType: "string",
      name: "Name",
      validation: { required: true },
    }),
    price: buildProperty({
      dataType: "number",
      name: "Price",
      validation: { required: true, min: 0, max: 1000000 },
    }),
    playlists: buildProperty({
      dataType: "array",
      name: "Playlists",
      validation: { required: true, min: 1 },
      of: {
        dataType: "string",
        config: {
          collectionPath: "playlists",
          previewProperties: ["name"],
        },
      },
      config: {
        collectionPath: "playlists",
        previewProperties: ["name"],
      },
    }),
  },
});
