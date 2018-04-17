var playlist = {
  Drake: "No New Friends"
}

function updatePlaylist(playlist, artistName, songTitle)
{
  playlist[artistName] = songTitle
  
  return playlist
  
}