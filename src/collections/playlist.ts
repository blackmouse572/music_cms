import { buildCollection, buildProperty } from "firecms";
import { Track } from "./track";

export type Playlist = {
  name: string;
  thumbnailUrl: string;
  tracks: Track[];
};

export const playlistCollection = buildCollection<Playlist>({
  path: "playlist",
  name: "Playlists",
  textSearchEnabled: true,
  properties: {
    name: buildProperty({
      dataType: "string",
      name: "Name",
      validation: { required: true },
    }),
    thumbnailUrl: buildProperty({
      dataType: "string",
      name: "Thumbnail URL",
      validation: { required: true },
    }),
    tracks: buildProperty({
      dataType: "array",
      validation: { required: true, min: 1 },
      name: "Tracks",
      of: {
        dataType: "map",
        properties: {
          artist: buildProperty({
            dataType: "string",
            name: "Artist",
            validation: { required: true },
          }),
          coverUrl: buildProperty({
            dataType: "string",
            name: "Cover URL",
            validation: { required: true },
          }),
          duration: buildProperty({
            dataType: "number",
            validation: { required: true },
            name: "Duration",
          }),
          trackUrl: buildProperty({
            dataType: "string",
            validation: { required: true },
            name: "Track URL",
          }),
          title: buildProperty({
            dataType: "string",
            validation: { required: true },
            name: "Title",
          }),
        },
      },
    }),
  },
});
