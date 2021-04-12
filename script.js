let template = [
    {
        tag: 'all',
        date: '00/00/00',
        image: 'imageUrl',
        title: 'title',
        description: 'description',
        url: 'URL'
    }
]

let data = [
    {
        tag: 'life',
        date: '04/10/21',
        image: 'https://www.economist.com/img/b/1280/720/90/1843magazine.com/sites/default/files/styles/il_manual_crop_16_9/public/1843_20210401_LOB-COMEBACKS_001.jpg',
        title: 'History’s best comebacks, from Jesus to John Travolta',
        description: 'Resurrection stories help us look on the bright side of life | 1843 magazine',
        url: 'https://www.economist.com/1843/2021/04/01/historys-best-comebacks-from-jesus-to-john-travolta'
    },
    {
        tag: 'design',
        date: '04/08/21',
        image: 'https://miro.medium.com/max/1000/1*ixRWiVTt0xM9TFKwX95dQA.jpeg',
        title: 'Undoing the Toxic Dogmatism of Digital Design',
        description: 'How do we start to dismantle and rebuild a system that disempowers and excludes by “design”? by Lisa Angela',
        url: 'https://lisa-angela.medium.com/undoing-the-toxic-dogmatism-of-digital-design-4bda8c4a4eba'
    },
    {
        tag: 'tech',
        date: '04/06/21',
        image: 'https://www.economist.com/img/b/1280/720/90/sites/default/files/images/print-edition/20210403_EUD000_0.jpg',
        title: 'How Netflix is creating a common European culture',
        description: 'Streaming subtitled box sets is the new Eurovision',
        url: 'https://www.economist.com/europe/2021/03/31/how-netflix-is-creating-a-common-european-culture'
    },
    {
        tag: 'tech',
        date: '04/04/21',
        image: 'https://www.freecodecamp.org/news/content/images/size/w2000/2021/03/Josef-Prusa_Prusa-Research_005--1-.jpg',
        title: 'How a Czech DJ Built a 3D Printing Empire',
        description: 'In 2012, a young Czech DJ hobbyist was frustrated with the knobs and faders on his music controllers, so went looking for ways to improve them. That’s when he came across 3D printing, and one of the fastest-growing 3D printing companies in the world was born.  ',
        url: 'https://www.freecodecamp.org/news/how-prusa3d-became-one-of-the-fastest-growing-startups-in-the-world/'
    },
    {
        tag: 'life',
        date: '04/01/21',
        image: 'https://miro.medium.com/max/746/1*it37wR0S2NyE68NFJPad_g.jpeg',
        title: 'The Remarkable Life of Granny. My family and I are mourning the loss…',
        description: '...and yet her essential spirit — strong, proud, hard-working, unimpressed with conventional marks of status and full of common sense and good humor — never changed.',
        url: 'https://barackobama.medium.com/the-remarkable-life-of-granny-17622dd61962'
    },
    {
        tag: 'tech',
        date: '04/01/21',
        image: 'https://www.freecodecamp.org/news/content/images/size/w2000/2021/03/Artboard-2.png',
        title: `What is Git? A Beginner's Guide to Git Version Control`,
        description: 'Git is a version control system that developers use all over the world. It helps you track different versions of your code and collaborate with other developers.',
        url: 'https://www.freecodecamp.org/news/what-is-git-learn-git-version-control/'
    },
    {
        tag: 'tech',
        date: '03/28/21',
        image: 'https://www.economist.com/img/b/1280/720/90/sites/default/files/images/2021/03/articles/main/20210320_wbd000_0.jpg',
        title: 'Schumpeter - America’s drowsy telecom giants face a 5G wake-up call',
        description: '...and T-Mobile is leaving them standing.',
        url: 'https://www.economist.com/business/2021/03/18/americas-drowsy-telecom-giants-face-a-5g-wake-up-call'
    },
    {
        tag: 'life',
        date: '03/28/21',
        image: 'https://www.economist.com/img/b/1280/720/90/sites/default/files/images/print-edition/20210320_IRD001_0.jpg',
        title: 'It might seem crazy - The pandemic has changed the shape of global happiness',
        description: 'The world was about as happy in the teeth of an awful pandemic as it was before the coronavirus struck.',
        url: 'https://www.economist.com/international/2021/03/20/the-pandemic-has-changed-the-shape-of-global-happiness'
    },
    {
        tag: 'tech',
        date: '03/27/21',
        image: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/i5giiwd20ljn7ooz67lh.jpg',
        title: 'How I became a professional self-taught developer in Germany while working a full time job',
        description: 'You do not learn programming by reading books, you learn programming by programming.',
        url: 'https://dev.to/carstenbehrens/how-i-became-a-professional-self-taught-developer-in-germany-while-working-a-full-time-job-djd'
    },
    {
        tag: 'tech',
        date: '03/25/21',
        image: 'https://www.economist.com/img/b/1280/720/90/sites/default/files/images/2021/03/articles/main/20210313_cnd000.jpg',
        title: 'Chaguan - Why the internet has not freed China',
        description: 'Closed off from the world by firewalls and import controls, China’s internet and cultural industries have become cartels, rewarding the loyal and the biddable.',
        url: 'https://www.economist.com/china/2021/03/11/why-the-internet-has-not-freed-china'
    },
    {
        tag: 'design',
        date: '03/24/21',
        image: 'https://miro.medium.com/max/1200/1*3U5Md2C2Ni1s-ckj1LgM_w.jpeg',
        title: 'Dark Mode UI: the definitive guide by Atharva Kulkarni ',
        description: 'Dark-mode is finding more appeal by the day. This article series gives you the insight to build an amazing and well-crafted dark UI for your next design.',
        url: 'https://medium.com/@CompileZero/dark-mode-ui-design-the-definitive-guide-part-1-color-53dcfaea5129?source=email-d2cf1a4cd1b5-1614303287711-digest.weekly------0-59------------------01c046a1_f87d_4539_bd8c_00da05012f6c-16-----&sectionName=recommended'
    },
    {
        tag: 'design',
        date: '03/24/21',
        image: 'https://miro.medium.com/max/1200/1*y2rPObYZaBBYM57bxV7b1Q.jpeg',
        title: 'Designing localisation-friendly products by Cassandra Tang',
        description: 'According to the World Wide Web Consortium, localisation refers to the adaptation of a product, application or document content to meet the language, cultural and other requirements of a specific…',
        url: 'https://uxdesign.cc/designing-localisation-friendly-products-ef39d3c9afb7'
    },
    {
        tag: 'life',
        date: '03/22/21',
        image: 'https://www.economist.com/img/b/1280/720/90/sites/default/files/images/2021/03/articles/main/20210320_wbd001.jpg',
        title: 'The link between personality and success',
        description: 'Mr. Moore estimates that around 40% of the population are introverts, 40% are extroverts and 20% are “ambiverts” who can display both characteristics.',
        url: 'https://www.economist.com/business/2021/03/18/the-link-between-personality-and-success'
    },
    {
        tag: 'design',
        date: '03/10/21',
        image: 'https://superhi-contentful.imgix.net/6LoaqMJWAsMDy0QDuk9gYT/7b7e7c23e0e6c25248b8f481cceb7de5/First-Steps-Design-1920x1080-02.png?ixlib=js-2.3.2&fit=crop&auto=format&w=1920&h=1080',
        title: 'Designing for the Web 101: The Truth About All the Different Roles You will Come Across',
        description: 'What is the difference between a UX and a UI designer? What about graphic design vs digital design? ',
        url: 'https://www.superhi.com/library/posts/designing-for-the-web-101-the-truth-about-all-the-different-roles-youll-come'
    },
    {
        tag: 'life',
        date: '03/05/21',
        image: 'https://i.guim.co.uk/img/media/fe1987e5d1df93e1f45f924dbea9467b78aa8b8e/631_358_4643_2788/master/4643.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9c66e5761447ffc93d6afda2f27ed958',
        title: 'The joys of being an absolute beginner – for life',
        description: 'The phrase ‘adult beginner’ can sound patronising. It implies you are learning something you should have mastered as a child. But learning is not just for the young',
        url: 'https://www.theguardian.com/lifeandstyle/2021/jan/07/the-joys-of-being-an-absolute-beginner-for-life'
    },
    {
        tag: 'life',
        date: '02/28/21',
        image: 'https://miro.medium.com/max/1200/1*rDw_aerWpw93sT7H8DiccQ.jpeg',
        title: 'Why fair societies are richer',
        description: 'Systemic racism is part of a much bigger problem. It is a consequence of a system that is rotten. Real solutions need to overthrow the status quo.',
        url: 'https://medium.com/the-gentle-revolution/why-fair-societies-are-richer-59056eb6e140'
    },
    {
        tag: 'life',
        date: '02/15/21',
        image: 'https://miro.medium.com/focal/1200/632/40/45/1*bg-EU_ldHLu6h4tYdp_SYA.jpeg',
        title: 'How I Approach the Toughest Decisions',
        description: 'One of the first things I discovered as President of the United States was that no decision that landed on my desk had an easy, tidy answer.',
        url: 'https://barackobama.medium.com/how-i-approach-the-toughest-decisions-dc1b165cdf2d'
    },
    {
        tag: 'life',
        date: '02/02/21',
        image: 'https://static01.nyt.com/images/2020/04/27/us/27up-virus-parents-1/27up-virus-parents-1-facebookJumbo-v2.jpg',
        title: 'Three Things Lockdowns Have Exposed About Working and Parenting',
        description: 'For one thing, with children popping up in Zoom meetings, it’s impossible to hide that raising children is a round-the-clock responsibility.',
        url: 'https://www.nytimes.com/2020/04/27/upshot/coronavirus-exposes-workplace-truths.html'
    }
]

let body = document.querySelector('body');

let section = document.querySelector('section');

let createLink = () => {
    let journal = document.createElement("h5");
    journal.classList.add("journal");

    let card = document.createElement("a");
    card.classList.add('card');

    let image = document.createElement("div");
    image.classList.add('image');

    let date = document.createElement("p");
    date.classList.add('date');

    let tags = document.createElement("div");
    tags.classList.add('tags');

    let spanG = document.createElement("span");
    spanG.classList.add('spanG');

    let span = document.createElement("span");
    span.classList.add('span');

    let text = document.createElement("div");
    text.classList.add('text');

    let title = document.createElement("h6");
    title.classList.add('title');

    let description = document.createElement("p");
    description.classList.add('description');

    section.append(journal);
    section.append(card);
    text.append(tags);
    tags.append(spanG);
    tags.append(span);
    tags.append(date);
    card.append(text);
    text.append(title);
    text.append(description);
    card.append(image);

}

for (i = 0; i < data.length; i++) {

    createLink();

}

let journal = document.querySelectorAll('section .journal');
let card = document.querySelectorAll('section .card');
let tags = document.querySelectorAll('section .tags');
let image = document.querySelectorAll('section .image');
let date = document.querySelectorAll('section .date');
let spanG = document.querySelectorAll('section .spanG');
let span = document.querySelectorAll('section .span');
let text = document.querySelectorAll('section .text');
let title = document.querySelectorAll('section .title');
let description = document.querySelectorAll('section .description');

let tagCollector = ['all'];

let monthCollector = [];

for (i = 0; i < data.length; i++) {
    tagCollector.push(data[i].tag);
    monthCollector.push(new Date(data[i].date).getMonth() + 1);
}

let uniqueSet = new Set(tagCollector);
let filters = [...uniqueSet];

let uniqueMonths = new Set(monthCollector);
let months = [...uniqueMonths];

let colors = [
    'var(--blueish)',
    'var(--tealish)',
    'var(--palish)',
    'var(--peachish)',
    'var(--salmonish)',
    'var(--darkish)',
]

let counter = [];

for (i = data.length; i > 0; i--) {
    counter.push(i);
}

let dateCounter = [];

for (i = 0; i < data.length; i++) {

    let options = { month: 'long', year: 'numeric'};

    let dates = Intl.DateTimeFormat('en-US', options).format(new Date(data[i].date));

    dateCounter.push(dates.toString());

}


for (i = 0; i < data.length; i++) {

    journal[i].textContent = dateCounter[i];

    card[i].href = data[i].url;

    card[i].classList.add(`${data[i].tag}`);

    (data[i].tag === filters[1]) ? (span[i].style.borderColor = colors[4]) : " ";
    (data[i].tag === filters[2]) ? (span[i].style.borderColor = colors[0]) : " ";
    (data[i].tag === filters[3]) ? (span[i].style.borderColor = colors[1]) : " ";
    (data[i].tag === filters[4]) ? (span[i].style.borderColor = colors[3]) : " ";
    (data[i].tag === filters[5]) ? (span[i].style.borderColor = colors[5]) : " ";

    date[i].textContent = `#${counter[i].toString().padStart(3, "0")} | ${data[i].date}`;

    title[i].textContent = data[i].title;

    description[i].textContent = data[i].description;

    if (data[i].image == "") {
        image[i].style.display = 'none';
        text[i].style.width = '100%';
    } else {
        image[i].style.backgroundImage = `url(${data[i].image})`;
    }

}

for (i = 1; i < data.length; i++) { 
    if (journal[i].textContent === journal[i - 1].textContent) {
        journal[i].style.display = 'none';
    }
}


image.forEach(image => {

    section.addEventListener("mousemove", (e) => {
        image.style.left = e.pageX + 20 + 'px';
        image.style.top = e.pageY + 15 + 'px';
    });

    section.addEventListener("mouseleave", (e) => {
        image.style.left = e.pageX + 20 + 'px';
        image.style.top = e.pageY + 15 + 'px';
    });

})

let header = document.querySelector('header');

let createFilter = () => {
    let card = document.createElement("div");
    card.classList.add('filter');

    let text = document.createElement("div");
    text.classList.add('filterText');

    let title = document.createElement("h6");
    title.classList.add('filterTitle');

    header.append(card);
    card.append(text);
    text.append(title);

}

for (i = 0; i < filters.length; i++) {
    createFilter();
}

let cardHeader = document.querySelectorAll('header .filter');
let textHeader = document.querySelectorAll('header .filterText');
let titleHeader = document.querySelectorAll('header .filterTitle');

for (i = 0; i < filters.length; i++) {
    titleHeader[i].textContent = filters[i];
    cardHeader[i].classList.add(`${filters[i]}`);
}

cardHeader.forEach(card => {
    card.addEventListener('mouseover', () => {
        (card.getAttribute('class') === `filter ${filters[1]}`) ? (card.style.backgroundColor = `${colors[4]}`) : " ";
        (card.getAttribute('class') === `filter ${filters[2]}`) ? (card.style.backgroundColor = `${colors[0]}`) : " ";
        (card.getAttribute('class') === `filter ${filters[3]}`) ? (card.style.backgroundColor = `${colors[1]}`) : " ";
        (card.getAttribute('class') === `filter ${filters[4]}`) ? (card.style.backgroundColor = `${colors[3]}`) : " ";
        (card.getAttribute('class') === `filter ${filters[5]}`) ? (card.style.backgroundColor = `${colors[5]}`) : " ";
        (card.getAttribute('class') === `filter ${filters[0]}`) ? (card.style.backgroundColor = `${colors[5]}`) : " ";
    })
    card.addEventListener('mouseleave', () => {
        card.style.backgroundColor = 'var(--palish)';
    })
})

cardHeader.forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.card').forEach(e => { e.classList.remove('cardHidden') });
        !(card.getAttribute('class') === `filter ${filters[1]}`) ? (document.querySelectorAll(`a.${filters[1]}`).forEach(e => { e.classList.add('cardHidden') })) : " ";
        !(card.getAttribute('class') === `filter ${filters[2]}`) ? (document.querySelectorAll(`a.${filters[2]}`).forEach(e => { e.classList.add('cardHidden') })) : " ";
        !(card.getAttribute('class') === `filter ${filters[3]}`) ? (document.querySelectorAll(`a.${filters[3]}`).forEach(e => { e.classList.add('cardHidden') })) : " ";
        !(card.getAttribute('class') === `filter ${filters[4]}`) ? (document.querySelectorAll(`a.${filters[4]}`).forEach(e => { e.classList.add('cardHidden') })) : " ";
        !(card.getAttribute('class') === `filter ${filters[5]}`) ? (document.querySelectorAll(`a.${filters[5]}`).forEach(e => { e.classList.add('cardHidden') })) : " ";
        (card.getAttribute('class') === `filter ${filters[0]}`) ? (document.querySelectorAll('.card').forEach(e => { e.classList.remove('cardHidden') })) : " ";
    });
})

header.addEventListener('click', () =>{
    for (i = 1; i < data.length; i++) {
        if(card[i].classList.contains('cardHidden')) {
            journal[i].style.display = 'none';
        } else {
            journal[i].style.display = 'flex';
            if (journal[i].textContent === journal[i - 1].textContent) {
                journal[i].style.display = 'none';
            }
        }
    }
});

let darkMode = document.querySelector('#darkMode');
let root = document.querySelector(':root');

darkMode.addEventListener('click', () => {
  
    if(darkMode.getAttribute('class') == 'fas fa-sun fa-lg'){
    root.style.setProperty('background-color', 'black');
    root.style.setProperty('--blueish', '#8C24CC');
    root.style.setProperty('--tealish', '#34FF13');
    root.style.setProperty('--palish', '#22223b');
    root.style.setProperty('--peachish', '##8C0335');
    root.style.setProperty('--salmonish', '#D90452');
    root.style.setProperty('--darkish', '#f8f9fa');
    body.style.setProperty('opacity', '0.80');

      
    darkMode.setAttribute('class', 'fas fa-moon fa-lg');
      
    console.log('Enter Dark Mode');
      
    } else {
      
    root.style.setProperty('background-color', 'white');
    root.style.setProperty('--blueish', '#0081A7');
    root.style.setProperty('--tealish', '#00AFB9');
    root.style.setProperty('--palish', '#f8f9fa');
    root.style.setProperty('--peachish', '#FED9B7');
    root.style.setProperty('--salmonish', '#F07167');
    root.style.setProperty('--darkish', '#22223b');
    body.style.setProperty('opacity', '1');

    darkMode.setAttribute('class', 'fas fa-sun fa-lg');
    
    }
    
});

function timeLoader() {
    const myTime = new Date().getHours();
    if(myTime > '17' || myTime < '6'){
      darkMode.click();
    } else {
    }
}

timeLoader();
  
function dateLoader() {
    const clock = `${(new Date().getUTCHours() + 2) % 12 || 12}:${new Date().getUTCMinutes().toString().padStart(2, "0")}:${new Date().getUTCSeconds().toString().padStart(2, "0")} ${(new Date().getUTCHours() + 2) < 12 ? "AM" : "PM"}`;

    let dateToday = Date.parse(new Date());
    let dateOne = Date.parse(new Date('Feb 1 2021 00:00:00'));

    let daysElapsed = (Math.floor((dateToday - dateOne)/(1000*60*60*24)) + 1);

    document.querySelector('nav h1').textContent = `${daysElapsed} Days of Reading`;
    document.querySelector('footer p').innerHTML = `Hello from Brno! 🇨🇿 It's ${clock} here! <br> <b>${daysElapsed} Days of Reading</b> is a personal mini project created by <a href="https://codepen.io/ekqt">Héctor Sosa</a>.`
}

dateLoader();

var timer;

function timeInterval () {
    timer = setInterval(dateLoader, 1000);
};

timeInterval();