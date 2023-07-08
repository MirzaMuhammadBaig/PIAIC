interface Album {
  artist: string;
  title: string;
  tracks?: number;
}

function makeAlbum(artist: string, title: string, tracks?: number): Album {
  const album: Album = {
    artist,
    title,
  };

  if (tracks) {
    album.tracks = tracks;
  }

  return album;
}

const album1 = makeAlbum("Artist 1", "Album 1");
console.log(album1);

const album2 = makeAlbum("Artist 2", "Album 2", 12);
console.log(album2);

const album3 = makeAlbum("Artist 3", "Album 3", 8);
console.log(album3);
