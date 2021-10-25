class AudioPlayer {
    constructor(srcIframe,titleIframe) {
        this.srcIframe = srcIframe;
        this.titleIframe = titleIframe;
    }

    render() {
        let parent_iframe = document.createElement('div');
        parent_iframe.classList.add('content__audio-plyer');
        let title = `<div class = "audio-player__title">
                        <h2>${this.titleIframe}</h2>
                    </div>`
        parent_iframe.innerHTML = title;
        let iframe = document.createElement('iframe');
        createAttribute(iframe,'src', this.srcIframe);
        iframe.width = '100%';
        iframe.height = '380px';
        createAttribute(iframe, `frameBorder`, `0`);
        createAttribute(iframe, 'allowtransparence', 'true');
        createAttribute(iframe, 'allow', 'encrypted-media');
        parent_iframe.appendChild(iframe);
        ROOT_CONTENT.appendChild(parent_iframe);
    }
}