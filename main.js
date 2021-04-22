let dispGoogle = (name, job, url) => {
    let element = document.getElementsByClassName("erkvQe")[0]
    let html = '<div class="LaCQgf"><div class="sbic sbei"  style="background-image: url('+url+');"></div><div class="zRAHie" role="option"><div class="aypzV"><span>'+name+'</span></div><div class="Bviow" style=""><span>'+job+'</span></div></div><div class="cfDxFd" jsaction="click:.CLIENT;contextmenu:.CLIENT" style="display: none;"><div class="sbai sbdb">Kaldır</div></div></div>'
    for(let i=0;i!=element.childElementCount;i++) { element.childNodes[i].innerHTML = html }
}
