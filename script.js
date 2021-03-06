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
        tag: 'misc',
        date: '05/26/21',
        image: 'https://www.economist.com/img/b/1280/720/90/sites/default/files/images/print-edition/20210522_IRD001_0.jpg',
        title: 'Take Your Child to Work (Every) DayHow the pandemic has upended the lives of working parents',
        description: 'Women have the most to lose',
        url: 'https://www.economist.com/international/2021/05/22/how-the-pandemic-has-upended-the-lives-of-working-parents'
    },
    {
        tag: 'tech',
        date: '05/25/21',
        image: 'https://www.freecodecamp.org/news/content/images/size/w2000/2021/05/web3-future-of-web.jpg',
        title: 'What is Web3? The Decentralized Internet of the Future Explained',
        description: 'If you’re reading this, you are already participating in the modern web (Web 2.0). The web we experience today is much different than what it was just 10 years ago (Web 1.0).',
        url: 'https://www.freecodecamp.org/news/what-is-web3/'
    },
    {
        tag: 'tech',
        date: '05/24/21',
        image: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/45xih8wxw3b5svi44dm4.jpg',
        title: '"Am I a bad developer?" - A question developers commonly face',
        description: 'Being a developer is hard, no doubt about it. Software development is a field where nobody knows ever everything.',
        url: 'https://dev.to/manuthecoder/am-i-a-bad-developer-a-question-developers-commonly-face-4gck'
    },
    {
        tag: 'tech',
        date: '05/23/21',
        image: 'https://reactjs.org/logo-og.png',
        title: 'Using the Effect Hook – React',
        description: 'Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.',
        url: 'https://reactjs.org/docs/hooks-effect.html'
    },
    {
        tag: 'tech',
        date: '05/22/21',
        image: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k47bkua49yojpa04k4dy.png',
        title: 'useAxios : A simple custom hook for calling APIs using axios',
        description: 'Hello folks, Frontend apps are not complete if there are no api calls involved.',
        url: 'https://dev.to/ms_yogii/useaxios-a-simple-custom-hook-for-calling-apis-using-axios-2dkj'
    },
    {
        tag: 'tech',
        date: '05/21/21',
        image: 'https://dev.to/social_previews/article/699563.png',
        title: '10 basic concepts of React JS',
        description: 'Nowadays React Js has been quite a popular framework for web development. ',
        url: 'https://dev.to/smismail/10-basic-concepts-of-react-js-4hfh'
    },
    {
        tag: 'tech',
        date: '05/20/21',
        image: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Blog_HERO.max-1300x1300.png',
        title: `Project Starline: Feel like you're there, together`,
        description: `Introducing Project Starline, a technology project that makes you feel like you're together, even when you're apart.`,
        url: 'https://blog.google/technology/research/project-starline/'
    },
    {
        tag: 'misc',
        date: '05/19/21',
        image: 'https://www.economist.com/img/b/1280/720/90/sites/default/files/images/2021/05/articles/main/20210508_fnd001.jpg',
        title: `Will going digital transform the yuan’s status at home and abroad?`,
        description: 'Don’t count on it: the new yuan will be a lot like the old yuan',
        url: 'https://www.economist.com/finance-and-economics/2021/05/06/will-going-digital-transform-the-yuans-status-at-home-and-abroad'
    },
    {
        tag: 'tech',
        date: '05/18/21',
        image: 'https://miro.medium.com/max/1200/1*l4DiHWTP3CK9-KX1doupig.jpeg',
        title: 'Mailchimp Is Dead (It Just Doesn’t Know It Yet)',
        description: 'Mailchimp may have been the 800-pound gorilla in the newsletter ecosystem, but there’s a new silverback that’s about to chop down the whole rainforest.',
        url: 'https://bettermarketing.pub/mailchimp-is-dead-it-just-doesnt-know-it-yet-6e404c3e4b7b'
    },
    {
        tag: 'misc',
        date: '05/17/21',
        image: 'https://www.economist.com/img/b/1280/720/90/1843magazine.com/sites/default/files/styles/il_manual_crop_16_9/public/1843_20210505_ST-NORMAL_001.jpg',
        title: 'I can’t wait to get back to normal. How long before I’m bored?',
        description: 'Ordinary life is more complicated than it seems | 1843 magazine',
        url: 'https://www.economist.com/1843/2021/05/04/i-cant-wait-to-get-back-to-normal-how-long-before-im-bored'
    },
    {
        tag: 'design',
        date: '05/16/21',
        image: 'https://miro.medium.com/max/1200/1*GKqpikMVBx4RxjuXjZDXbg.png',
        title: 'Final reflections on the Google UX design certificate',
        description: 'In 5 weeks, I completed the Google UX Design Certificate, “a rigorous, hands-on program that covers the design process from end-to-end.”',
        url: 'https://bootcamp.uxdesign.cc/what-did-i-learn-from-getting-the-equivalent-of-a-ba-in-just-over-one-month-for-less-than-usd-40-8469f78f7f7'
    },
    {
        tag: 'tech',
        date: '05/15/21',
        image: 'https://miro.medium.com/max/1200/1*9N62zUlyJcQet8kr7e_FVg.png',
        title: 'Index as a key is an anti-pattern (React)',
        description: `It looks elegant and it does get rid of the warning (which was the ‘real’ issue, right?). What is the danger here?`,
        url: 'https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318'
    },
    {
        tag: 'design',
        date: '05/14/21',
        image: 'https://miro.medium.com/focal/1200/632/50/54/0*FtMqkN_p_FndN9j7.jpg',
        title: `Burger King’s New Logo Reveals Why Brands Are Obsessed With ‘Flat Design’`,
        description: `The fast food chain's redesign evokes the imagery of classic Burger King logos paired with an iPhone aesthetic`,
        url: 'https://marker.medium.com/burger-kings-new-logo-reveals-why-brands-are-obsessed-with-flat-design-13e445f36663'
    },
    {
        tag: 'tech',
        date: '05/13/21',
        image: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5xtfavzdsdydctb0c83x.jpg',
        title: 'Concepts You Need to Know If You are a JavaScript Beginner',
        description: 'JavaScript is undoubtedly a must have if you want to become a web developer. ',
        url: 'https://dev.to/axlyaguana11/concepts-you-need-to-know-if-you-are-a-javascript-beginner-5am0'
    },
    {
        tag: 'tech',
        date: '05/12/21',
        image: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wp0lygvxper8vof63u4y.jpeg',
        title: 'Introduction to HTTP Cookies',
        description: 'Cookies, more properly called HTTP cookies, are small bits of data stored as text files on a browser. Cookies associate bits of data to a specific user.',
        url: 'https://dev.to/lindaojo/introduction-to-http-cookies-1pn2'
    },
    {
        tag: 'tech',
        date: '05/10/21',
        image: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mjezqqavsyl3zpljqyay.png',
        title: 'Why do you need Helmet in NodeJs ?',
        description: 'Helmet helps you secure your Express apps by setting various HTTP headers. It is not a silver bullet,... ',
        url: 'https://dev.to/sid__/why-do-you-need-helmet-in-nodejs-h1b'
    },
    {
        tag: 'misc',
        date: '05/08/21',
        image: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jvivgru9nliact3sgmx8.png',
        title: 'What I learned after 10 years of development',
        description: 'I have been coding for a long time, over 10 years. During all that website development of JavaScript, HTML, CSS, I learned a few things they do not teach in class...',
        url: 'https://dev.to/adriantwarog/what-i-learned-after-10-years-of-development-3an'
    },
    {
        tag: 'misc',
        date: '05/07/21',
        image: 'https://img-cdn.inc.com/image/upload/w_1024,h_576,c_fill/images/panoramic/getty_1163973538_iw76gr.jpg',
        title: `Google's 3-Word Plan to Help Employees Avoid Burnout Is So Simple You Should Steal It`,
        description: 'Sometimes the easiest way to help your team get more done is to stop interrupting them with meetings.',
        url: 'https://www.inc.com/jason-aten/googles-3-word-plan-to-help-employees-avoid-burnout-is-so-simple-you-should-steal-it.html'
    },
    {
        tag: 'tech',
        date: '05/06/21',
        image: 'https://www.freecodecamp.org/news/content/images/2021/04/pwas.png',
        title: 'What is a PWA? Progressive Web Apps for Beginners',
        description: 'These days, there is an app for everything – from banking to studying and from trading to shopping. Every business has an app, and even our governments have simplified their services into app form.',
        url: 'https://www.freecodecamp.org/news/what-are-progressive-web-apps/'
    },
    {
        tag: 'tech',
        date: '05/04/21',
        image: 'https://reactjs.org/logo-og.png',
        title: 'Using the State Hook',
        description: 'Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.',
        url: 'https://reactjs.org/docs/hooks-state.html'
    },
    {
        tag: 'tech',
        date: '05/02/21',
        image: 'https://www.freecodecamp.org/news/content/images/2021/04/varvara-grabova-NCSARCecw4U-unsplash-1.jpg',
        title: '5 Mistakes Beginner Web Developers Make – And How to Fix Them',
        description: 'This list is made up of the most common mistakes I have witnessed during nearly a decade of teaching beginning web development students.',
        url: 'https://www.freecodecamp.org/news/common-mistakes-beginning-web-development-students-make/'
    },
    {
        tag: 'tech',
        date: '04/30/21',
        image: 'https://reactjs.org/logo-og.png',
        title: 'Introducing JSX',
        description: 'Exploring a funny tag syntax that is neither a string nor HTML. It is called JSX, and it is a syntax extension to JavaScript.',
        url: 'https://reactjs.org/docs/introducing-jsx.html'
    },
    {
        tag: 'tech',
        date: '04/28/21',
        image: 'https://reactjs.org/logo-og.png',
        title: 'Components and Props',
        description: 'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.',
        url: 'https://reactjs.org/docs/components-and-props.html'
    },
    {
        tag: 'tech',
        date: '04/26/21',
        image: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ciklyhfzsd69qc8my6s1.png',
        title: 'How does the web works',
        description: 'Have you ever wondered what happens when you browse your favourite websites? ',
        url: 'https://dev.to/rohitrana/how-the-web-works-1hd7'
    },
    {
        tag: 'tech',
        date: '04/24/21',
        image: 'https://miro.medium.com/max/900/1*H4Y_NLqni0G4L5oL-hPmqw.png',
        title: 'Javascript Fatigue. A few days ago, I met up with a friend… ',
        description: 'At work this past quarter, we painstakingly started three new projects at work. I say “painstakingly” because every project required decisions to be made around tooling depending on the scope &…',
        url: 'https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4'
    },
    {
        tag: 'tech',
        date: '04/23/21',
        image: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5xtfavzdsdydctb0c83x.jpg',
        title: 'Concepts You Need to Know If You are a JavaScript Beginner',
        description: 'JavaScript is undoubtedly a must have if you want to become a web developer.',
        url: 'https://dev.to/axlyaguana11/concepts-you-need-to-know-if-you-are-a-javascript-beginner-5am0'
    },
    {
        tag: 'misc',
        date: '04/22/21',
        image: 'https://www.economist.com/img/b/1280/720/90/sites/default/files/images/2021/04/articles/main/20210424_stp502.jpg',
        title: 'How to save coffee from global warming',
        description: 'Coffee IS A multi-billion dollar industry that supports the economies of several tropical countries. Roughly 100m farmers depend on it for their livelihoods.',
        url: 'https://www.economist.com/science-and-technology/2021/04/22/how-to-save-coffee-from-global-warming'
    },
    {
        tag: 'tech',
        date: '04/19/21',
        image: 'https://www.economist.com/img/b/1280/720/90/1843magazine.com/sites/default/files/styles/il_manual_crop_16_9/public/1843_20210406_SOF-SUNGLASSES_001.jpg',
        title: 'The science of fashionThe geeky origin of your cool sunglasses',
        description: 'The story of shades, from industrial safety-gear to ultimate accessory | 1843 magazine',
        url: 'https://www.economist.com/1843/2021/04/06/the-geeky-origin-of-your-cool-sunglasses'
    },
    {
        tag: 'misc',
        date: '04/16/21',
        image: 'https://www.economist.com/img/b/1280/720/90/sites/default/files/images/print-edition/20210403_STD001_0.jpg',
        title: 'Those who worry about CO2 should worry about methane, too',
        description: 'It’s the other greenhouse gas | Science & technology',
        url: 'https://www.economist.com/science-and-technology/2021/04/03/those-who-worry-about-co2-should-worry-about-methane-too'
    },
    {
        tag: 'misc',
        date: '04/14/21',
        image: 'https://www.economist.com/img/b/1280/720/90/sites/default/files/images/print-edition/20210403_AMD001_0.jpg',
        title: 'The influence of Central American dynasties is ebbing',
        description: 'Oligarchs are no match for demagogues and drug lords | The Americas',
        url: 'https://www.economist.com/the-americas/2021/04/03/the-influence-of-central-american-dynasties-is-ebbing'
    },
    {
        tag: 'misc',
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
        tag: 'misc',
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
        tag: 'misc',
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
        tag: 'misc',
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
        tag: 'misc',
        date: '03/05/21',
        image: 'https://i.guim.co.uk/img/media/fe1987e5d1df93e1f45f924dbea9467b78aa8b8e/631_358_4643_2788/master/4643.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9c66e5761447ffc93d6afda2f27ed958',
        title: 'The joys of being an absolute beginner – for life',
        description: 'The phrase ‘adult beginner’ can sound patronising. It implies you are learning something you should have mastered as a child. But learning is not just for the young',
        url: 'https://www.theguardian.com/lifeandstyle/2021/jan/07/the-joys-of-being-an-absolute-beginner-for-life'
    },
    {
        tag: 'misc',
        date: '02/28/21',
        image: 'https://miro.medium.com/max/1200/1*rDw_aerWpw93sT7H8DiccQ.jpeg',
        title: 'Why fair societies are richer',
        description: 'Systemic racism is part of a much bigger problem. It is a consequence of a system that is rotten. Real solutions need to overthrow the status quo.',
        url: 'https://medium.com/the-gentle-revolution/why-fair-societies-are-richer-59056eb6e140'
    },
    {
        tag: 'misc',
        date: '02/15/21',
        image: 'https://miro.medium.com/focal/1200/632/40/45/1*bg-EU_ldHLu6h4tYdp_SYA.jpeg',
        title: 'How I Approach the Toughest Decisions',
        description: 'One of the first things I discovered as President of the United States was that no decision that landed on my desk had an easy, tidy answer.',
        url: 'https://barackobama.medium.com/how-i-approach-the-toughest-decisions-dc1b165cdf2d'
    },
    {
        tag: 'misc',
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