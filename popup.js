const actionBtn = document.getElementById("actionButton");
actionBtn.addEventListener("click",() => {
  chrome.tabs.query({active: true}, (tabs) => {
    const tab = tabs[0];
    if (tab) {
      chrome.scripting.executeScript(
        {
          target:{tabId: tab.id, allFrames: true},
          func:replaceImages
        },
        onResult
      )
    } else {
      alert("There are no active tabs")
    }
  })
})

/**
 * Функция исполняется на удаленной странице браузера,
 * получает аватарки и изменяет ссылки на аватарки на
 * картинки лейн
 *
 *  @return True
 */

function replaceImages() {
  // аватарки в профилях
  const avatarsProfiles = document.getElementsByClassName("vkuiImageBase__img");
  if (avatarsProfiles.length > 0) {
    for (let avatar of avatarsProfiles) {
      console.log('lainization profile avatars');
      avatar.src = "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Serial_Experiments_Lain_DVD_vol_1.jpg/220px-Serial_Experiments_Lain_DVD_vol_1.jpg"
    }
  }
  // аватарки в сообщениях
  const avatarsMessages = document.getElementsByClassName("ReImage__img");
  if (avatarsMessages.length > 0) {
    for (let avatar of avatarsMessages) {
      console.log('lainization message avatars');
      avatar.src = "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Serial_Experiments_Lain_DVD_vol_1.jpg/220px-Serial_Experiments_Lain_DVD_vol_1.jpg"
    }
  }
  // аватарки в сообщениях с классом BasicAvatar__noImg (без аватарок)
  const avatarsMessages_noImg = document.getElementsByClassName("BasicAvatar__noImg");
  if (avatarsMessages_noImg.length > 0) {
    for (let avatar of avatarsMessages_noImg) {
      console.log('lainization message avatars without imgs');
      avatar.src = "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Serial_Experiments_Lain_DVD_vol_1.jpg/220px-Serial_Experiments_Lain_DVD_vol_1.jpg"
    }
  }

}

function onResult(frames) {
  // TODO - Объединить списки URL-ов, полученных из каждого фрейма в один,
  // затем объединить их в строку, разделенную символом перевода строки
  // и скопировать в буфер обмена
}
