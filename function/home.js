sliderArray = [
    {
        title : 'Таверна',
        description : 'Краткое описание слайда',
        pathImg : '../img/1.jpeg'
    },
    {
        title : 'Таверна 2',
        description : 'Краткое описание слайда 2',
        pathImg : '../img/2.png'
    },
    {
        title : 'Таверна 3',
        description : 'Краткое описание слайда 3',
        pathImg : '../img/4.jpeg'
    },
]

let sliderForEach = () => {
    let html = '';
    sliderArray.forEach(({title, description, pathImg}) => {
        html += `<div class="items__item swiper-slide" style = "background: url(${pathImg}); background-size: 100%;
        background-repeat: no-repeat;">
                    <div class="item__title">
                        <h2>${title}</h2>
                        <div class="title__description">
                            <p>${description}</p>
                        </div>
                    </div>
                </div>`
    })
    return html;
}

let slider = new Slider(sliderArray,sliderForEach,'content__slider');
slider.render();
/* adding video in anime_box_elements => 
        video : [
            '../video/1.mkv',
            '../video/2.mkv',
            '../video/3.mkv',
            '../video/4.mkv',
        ]
*/
let anime_box_elemets = [
    {
        pathImg : '../img/1.jpeg',
        title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description : 'Lorem ipsum, dolor sit amet consectetur adipisicingLorem ipsum, dolor sit amet consectetur adipisicingLorem ipsum, dolor sit amet consectetur adipisicingLorem ipsum, dolor sit amet consectetur adipisicing',
    },
    {
        pathImg : '../img/2.png',
        title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        description : 'Lorem ipsum, dolor sit amet consectetur adipisicingLorem ipsum, dolor sit amet consectetur adipisicingLorem ipsum, dolor sit amet consectetur adipisicingLorem ipsum, dolor sit amet consectetur adipisicing',
    },
    {
        pathImg : '../img/3.jpeg',
        title : 'Lorem ipsum, dolor sit amet consectetur adipisicing',
        description : 'Lorem ipsum, dolor sit amet consectetur adipisicingLorem ipsum, dolor sit amet consectetur adipisicingLorem ipsum, dolor sit amet consectetur adipisicingLorem ipsum, dolor sit amet consectetur adipisicingLorem ipsum, dolor sit amet consectetur adipisicingLorem ipsum, dolor sit amet consectetur adipisicingLorem ipsum, dolor sit amet consectetur adipisicingLorem ipsum, dolor sit amet consectetur adipisicing',
    },
]
let animeForEach = () => {
    let html = '';
    anime_box_elemets.forEach((e) => {
        console.log(e.pathImg)
        html += `<div class="items__item swiper-slide">
                    <div class = "item__important">
                        <div class="item__img">
                            <img src="${e.pathImg}" alt="">
                        </div>
                        <div class="item__desription">
                            <div class="description__title">
                                <h2>${e.title}</h2>
                            </div>
                            <div class="description__sub-title">
                                <p>${e.description}</p>
                            </div>
                        </div>
                    </div>
                    <div class = "item__videos">`
                    try {
                        e.video.forEach((item) => {
                            html += `<div class = "videos__item">
                                        <div class = "item__video">
                                            <video src='${item}' controls = "" poster = ""></video>
                                            <div class = "item__hover">
                                                <div class = "hover__icon">
                                                    <span class="material-icons i-icon-box">play_arrow</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class = "item__title">
                                            <h2>Название</h2>
                                        </div>
                                    </div>`
                        })
                    }

                    catch {
                        console.log(`Видео нету в слайдере`)
                    }
                    html += `</div>
                        </div>`
    })
    return html;
}
let anime_box = new Slider(anime_box_elemets,animeForEach, 'content__anime-box');
anime_box.render();

let audio_player = new AudioPlayer('https://open.spotify.com/embed/playlist/2XN5d41xinpFfP73owAmd0', 'Popular anime music for Spotify');
audio_player.render();
let audio_two = new AudioPlayer('https://open.spotify.com/embed/playlist/2H4owEQuAWc9a6z5mlNJyD','Никита слушает вот это!');
audio_two.render();
