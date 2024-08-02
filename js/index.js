function showPlaylist(playlistId) {
    // 隐藏所有歌单
    const playlists = document.querySelectorAll('.playlist');
    playlists.forEach(playlist => {
        playlist.style.display = 'none';
    });

    // 显示指定的歌单
    const selectedPlaylist = document.getElementById(playlistId);
    if (selectedPlaylist) {
        selectedPlaylist.style.display = 'block';
    }
}

