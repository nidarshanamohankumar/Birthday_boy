import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

import mainImage from "./images/dudu-bubu-main.jpg";
import nextImage from "./images/dudu-bubu-love.jpg";

function App() {
  const [entered, setEntered] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const sections = [
    {
      id: 1,
      symbol: "♡",
      title: "Our Beginning",
      subtitle: "Every story has a beginning...",
      description: "The beautiful story of us.",
      color: "pink"
    },
    {
      id: 2,
      symbol: "✧",
      title: "Our Memories",
      subtitle: "Little moments, big feelings.",
      description: "A collection of our favourite moments.",
      color: "peach"
    },
    {
      id: 3,
      symbol: "♥",
      title: "Why You're Special",
      subtitle: "A million little reasons.",
      description: "All the little things that make you special.",
      color: "lavender"
    },
    {
      id: 4,
      symbol: "✉",
      title: "A Letter For You",
      subtitle: "Words from my heart.",
      description: "Something special written just for you.",
      color: "cream"
    },
    {
      id: 5,
      symbol: "🎁",
      title: "One Last Surprise",
      subtitle: "Something is waiting for you...",
      description: "A little surprise made with love.",
      color: "rose"
    }
  ];


  // OUR BEGINNING TIMELINE

  const timeline = [
    {
      number: "01",
      date: "THE BEGINNING",
      title: "Where It All Started",
      description:
        "May 25 2026 - Na office ku join panna first day. First day la yathuvu theriyaama na vantha. Interview appo kooda unna na paakala and I think first day la tha unna paatha enna introduce panumbothu.Appo enaku theriyala unaku enna pudikum nu.That's the day enoda namma rendu peroda life maarumnu expect pannave ella.",
      symbol: "🌷"
    },
    {
      number: "02",
      date: "THE DAY WE SPOKE",
      title: "A Memory To Remember",
      description:
        "June 06 2026 -  Icecream - Entha oru word la tha namma journey start aachu chello - Enaku nalla nyabagam eruku , Dharani first Icecream ketta apro naanu seri enaku vaangitu vaanganu sonna and then nee enna paathu smile panite pona nallave nyabagam eruku and vaanga mudiyalanu monday vaangi tharenu sonna . Appo the our talking journey was started.",
      symbol: "💗"
    },
    {
      number: "03",
      date: "OUR JOURNEY",
      title: "Little Moments, Big Memories",
      description:
        "From little conversations to unforgettable memories. Namma journey starting la smooth aa pochu chello. Nee starting laye yankitta nalla pesa start panita but enaku tha oru maari hesitation aa erukum pesalama vendama pesuna correct aa erukuma namma pandrathu correct aa apdinu thonite erukum apro seri ok pesalam nu thaa naanu pesa start panna and konja konja naal poga poga naanu open up aaga try panna appove neraiya solla maata nee ketta matum bathil soluvaa appo nambikkai ellanu ella yathuku ethella solitu apdinu vitruvaa, And namma pesumbothu oru naal nee unoda personal aa share panna laura pappa ku thangam la yaduthu vechurukaa apdinu athella romba personal nee athella yankitta sonna athella enaku pudichithu maa.",
      symbol: "✨"
    }
  ];
const memories = [
  {
    id: 1,
    image: mainImage,
    date: "25 MAY 2026",
    title: "The Day Everything Began",
    caption: "A new beginning that became a beautiful memory. ♡"
  },
  {
    id: 2,
    image: nextImage,
    date: "06 JUNE 2026",
    title: "The Ice Cream Moment",
    caption: "One little ice cream conversation started our journey. 💗"
  }
];
// WHY YOU ARE SPECIAL CONTENT

const specialReasons = [
  
  {
    id: 1,
    symbol: "🌷",
    title: "The Way You Care",
    description: "Nee yappoyu enna care panite erupa chello. Correct aa sapda soluva odambu seri ellana appo appo kooptu check panuva na okwa apdinuu. Nee frequent aa mention panuva unna nalla paathukanu papa avlotha vera yathuvu ella apdinu. Athellame enaku romba pudikum da. Enaku yathavauthu aana nee romba kasta padra. Enaku yathavathu problem nu sonna nee alugara antha alavuku nee enna love pandra. Entha alavu love ku na worth aa nu enake theriyala. The way you care about mee. And more important aa nee ya ammavayu care pandra athutha enoru main reason unna pudikaa. Starting la erunthe nee adikadi keppa amma nalla erukaangala avanga yapdi erukaanga apdinu athella tha one of the main reason ma unna pudikaa"
  },
  {
    id: 2,
    symbol: "♡",
    title: "Your Smile",
    description: "Unoda smile ma - Athu enaku romba romba pudikum. Na sonathu ella but nee alaga siripa maa. Unoda smile, laugh nu yallame enaku pudikum and nee yan kooda erukumbothu oru maari happya erupella athella enaku pudikum. Yankooda erukumbothu nee happya erukella athu paatha na happy agiruvaa. Nee neeya erupa yankooda erukumbothu yatha pathiyu yosika maata jollya unaku thondratha nee pesuvaa . Yankooda nee evlo comfortable aavenu na expect pannave ella but nee happya erukenna enaku athu pothum. Aniki oru naal namma love la pandrathuku munadi nee morning office vantha udane enna pudichu kili vechaa appo enaku kovam vanthu na morachaa but appo nee enna paathu oru maari innocent aa face aa vechutu siricha athu ennu enaku nyabagam eruku and nee siricha and atha paathu naanu sirichita athella enaku pudichithu chello oru maari nee innocent aa face aa vechurunthalla athu ennu yanoda kannukullaye eruku theriyuma.."
  },
  {
    id: 3,
    symbol: "✨",
    title: "Your Innocence",
    description: "The Innocence you have - Yankooda erukumbothu oru maari kolandha maari cute aa behave panuva da nee. Office la erukrathulaye nee the terror aana aalu yallara poruthu varaikum aana enaku tha theriyum nee yapdi behave panuva yankooda erukumbothu apdinu. Yankooda erukumbothu nee oru maari innocent aa erupa yatha pathiyu yosika maata. Na enna sonalum seri seri nu matum solraa, na kovama pesna kooda nee appove surrender agura, marriage ku apro nee veetu velaila seiyanum nu sonna pandranu solra panuviyaanu enaku theriyaathu but pandranu sonnala athuve happy tha, sometimes tha nee pandratha paatha kovam varum matha badi enaku unna romba romba romba pudikum daaa subashuu"
  },
  {
    id: 4,
    symbol: "💗",
    title: "You Make Me Happy",
    description: "You are the reason for my smile now - Na unkooda erukumbothu semma happya erupa da. Na paatuku yatha pathiyu yosikaama na paatuku unkooda jollya erupa. Nethu ennatha tired aa erunthaalum full day unkooda spend pannathula I am so so happy, Chinna chinna vishaym tha nee pandrathu enaku happiness kudukum. Enna happya paathukanum nu nee nenaikrathu and life long yankooda nee travel pananum nu nenaikrathunu yallame enaku pudikum chello and enoda family situation aa understand panitu enaku nee wait pandrenu sonathu na ketta time aa kuduthathu and veetla samatham vaangama yantha thappana mudivu yaduka koodathunu na strong aa erukratha vida nee romba strong aa erukaa athella enaku romba romba happyyyyyy...."
  },
  {
    id: 5,
    symbol: "🦋",
    title: "Your Trust",
    description: "The trust you have on me - Enna pathi yathume theriyaama you started loving me. Unaku therinjathu yallame yanoda name and enoda family la amma and naa ethu matum tha vera yathume theriyaathu aana nee love panna nee yantha nambikkaila enna luv pannanu yalla enaku suthama idea ella ma. Na enna pannathaala unaku enna pudichuthu idea ella but unaku enoda name pudikum nu enaku theriyum athuku apro namma pesa pesa nee enna nambi neraiya vishayam unoda personal things la solla start panna. Nee yapdi family yapdi nee yapdi erupa , Infact nee clg la enna panitu erunthenu varaikum enaku sonna and unoda akka pregnance story varaikum enaku sonna enna trust panni neraiya vishayam solirukaa. Namma office la nadakra politics la soliruka and nee first work panna company la nadantha vishayathella nee enaku solirukka. And oru naal enoda insta id la erunthu two or three unwanted post aa repost paniruntha antha post la konja decent aana post ella yanoda mobile hang aanathaalu apdi aachu antha post la paathu kooda nee just sonna entha maari repost agirukunu apdinu matum vera yathume nee kekala. Nee nenachuruntha enna oru second la thappa nenachirukalam enna da eva entha post la repost panirukaa apdinu but nee athella yathume kekala "
  },
  {
    id: 6,
    symbol: "🎀",
    title: "The Maturity You Have",
    description: "Nee yalla vishayathayu nallave matured aa handle pandra chello. Work la nee yappoyu correct aa erupa eppo varaikum rendu perume apditha eruko. Nee pesrathunu nee pandrathu yallame mature aa tha eruku namma thaniya erukumbothu tha nee innocent and kolandha maari behave panuva matha time la yalla nee super matured. Na enna questions ketaalum solli tharuva puriyalanu sonaalum nee again soli tharuvaa . Eppove nee neraiya responsibilites handle pandra. Veedu katirukaa and bike vaangi athuku nee tha loan pay pandra ethella theliva yosichu pandra. Entha maturity la pudikum. Nee yallathayu neat aa balance pandra athella pudikum enaku. Sila times naane confuse aanalum nee theliva puriya veppa enaku ethellame pudikum da.."
  }
];
  return (
    <div className="universe">

      <div className="background-circle circle-one"></div>
      <div className="background-circle circle-two"></div>

      <div className="floating-hearts">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="floating-heart"
            style={{
              left: `${(i * 17 + 5) % 100}%`,
              animationDelay: `${(i % 8) * 0.8}s`,
              fontSize: `${12 + (i % 4) * 5}px`
            }}
          >
            ♥
          </motion.span>
        ))}
      </div>

      <AnimatePresence mode="wait">

        {/* SCREEN 1 - WELCOME */}

        {!entered ? (

          <motion.div
            key="welcome"
            className="welcome-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          >

            <div className="top-label">
              <span>✦</span>
              A LITTLE WORLD MADE WITH LOVE
              <span>✦</span>
            </div>

            <motion.div
              className="character-container"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >

              <div className="image-glow"></div>

              <img
                src={mainImage}
                alt="Dudu and Bubu"
                className="main-character"
              />

            </motion.div>

            <div className="welcome-text">

              <p className="little-heading">
                TWO HEARTS, ONE BEAUTIFUL STORY
              </p>

              <h1>
                OUR LITTLE
                <span>LOVE STORY</span>
              </h1>

              <p className="subtitle">
                In a world full of people,
                I'm glad I found you.
              </p>

            </div>

            <div className="date-badge">
              <span>♡</span>
              ESTABLISHED ON 25 MAY 2026
              <span>♡</span>
            </div>

            <motion.button
              className="enter-button"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setEntered(true)}
            >
              OPEN OUR LITTLE WORLD
              <span className="button-heart">♡</span>
            </motion.button>

            <p className="bottom-text">
              MADE WITH LOVE, JUST FOR YOU
            </p>

          </motion.div>

        ) : (

          <AnimatePresence mode="wait">

            {/* SCREEN 2 - DASHBOARD */}

            {!selectedSection ? (

              <motion.div
                key="dashboard"
                className="dashboard-card"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7 }}
              >

                <div className="dashboard-top">
                  <span>✧ A LITTLE PLACE FOR US ✧</span>
                </div>

                <motion.img
                  src={nextImage}
                  alt="Dudu and Bubu together"
                  className="dashboard-image"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity
                  }}
                />

                <p className="dashboard-label">
                  WELCOME TO OUR LITTLE WORLD
                </p>

                <h1 className="dashboard-title">
                  Nichaa <span>♡</span> Subash
                </h1>

                <p className="dashboard-subtitle">
                  Every little moment with you
                  is my favourite.
                </p>

                <div className="dashboard-divider">
                  <span>♡</span>
                </div>

                <h2 className="explore-heading">
                  EXPLORE OUR STORY
                </h2>

                <div className="section-grid">

                  {sections.map((section, index) => (

                    <motion.div
                      key={section.id}
                      className={`section-card ${section.color}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.12,
                        duration: 0.5
                      }}
                      whileHover={{
                        y: -8,
                        scale: 1.03
                      }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSelectedSection(section)}
                    >

                      <div className="section-symbol">
                        {section.symbol}
                      </div>

                      <h3>{section.title}</h3>

                      <p>{section.subtitle}</p>

                      <span className="card-arrow">
                        EXPLORE →
                      </span>

                    </motion.div>

                  ))}

                </div>

                <p className="dashboard-footer">
                  MADE OF LITTLE MOMENTS AND LOTS OF LOVE ♡
                </p>

              </motion.div>

            ) :

            selectedSection.id === 4 ? (
              /* A LETTER FOR YOU PAGE */

<motion.div
  key="letter"
  className="letter-page"
  initial={{ opacity: 0, y: 35 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -25 }}
  transition={{ duration: 0.6 }}
>

  <button
    className="back-button"
    onClick={() => setSelectedSection(null)}
  >
    ← BACK TO OUR WORLD
  </button>

  <div className="letter-header">

    <span className="letter-label">
      ✧ CHAPTER FOUR ✧
    </span>

    <h1>A Letter For You ♡</h1>

    <p>
      Some feelings are better written than spoken.
    </p>

    <div className="letter-divider">
      ♡ ───── ✧ ───── ♡
    </div>

  </div>

  {/* LETTER CONTENT */}

  <motion.div
    className="letter-paper"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >

    <div className="letter-decoration">
      ✿
    </div>

    <p className="letter-to">
      Dear Subashu,
    </p>

    <div className="letter-message">

      <p>
      💗 This is a little letter for you 💗
      </p>

      <p>
        Where to start nu enaku idea ella chello, First of all <br />
        <b>Thank you so so much for being with mee..</b><br />
        Nee yappoyu yankooda eru and yappoyu na unna vitutu poga maata. This is my promise for you. Enna nadanthaalum namma paathukalam enna kastam vanthaalum namma serthu paathukalam. Oru periya struggles is waiting for us, Unnoda family side agatum enoda family side agatum namma marriage ku neraiya problems varum caste issue and famil set aganum nu neraiya issues eruku athella namma serthu pathukalam. Unoda birthday ku yathavathu special aa pananum nu thonuchu and enna pandrathunu theriyala shirt vaanga amount ella da yankitta eruntha vaangi kuduthurpaa nee rendu time shirt vaangumbothu enaku oru maari feel aachu nammalala vaangi kuduka mudiyala apdinu na next time function ku unaku shirt yaduthu thara seriya.
      </p>

      <p>
        Nee enna notite erupa athella jollya eruku and unkooda erukumbothu semma comfortable aa erupaa naa. Safe and secured aa eruku nee paathupa apdinu. And na unkooda eruntha enna yathavathu notite hug panitu kiss panite erupaa and enna two days paakama erunthaalum nee oru maari feel panuvaa and night vantu nicha unna miss pandra nichaa nu katharitu erupaa athella paakumbothu yaara ivan namala evlo love pandran apdinu eruku. I am truly blessed nu tha solanum. Nee tha enaku apdinu universe decide paniruchunu nenaikra. <b>Two souls met at a unexpected time..</b>
      </p>

      <p>
        Namma love panna start panna apro nee neraiya efforts poda start panita da. Nalla work pananum and office aa konja mela kondu varanum apdi vanta namaku settle aga konja easya erukum apdinu nee neraiya yosikra eppo. Nalla work pananum , neraiya orders yadukanum and office la nalla position ku pona tha yanga veetla vanthu dhairiyama pesa mudiyum apdinu nee neraiya efforts poda start pandra athu nallave theriyuthu enakuu. You are so serious about us chello. And nee dhairiyama unoda family ta enna introduce la panni vecha , athella enaku pudichithuu 
      </p>

      <p><b>
        Namma first paatha day, and namma first pesna day and namma first time veliya meet panna day and namma appotha konja pesuno nerla and also appo namma kaiya pudichathu and unna pinadi ukkara vechutu na drive panathu and nee yankooda pesite vanthathu yallame enoda favourite and yanoda dress parakaama erukaa nee atha pudichite vanthathu yallame and enoda dress mela nee romba care aa eruka suppose lite aa dress velaguna kooda adjust la panni vidraa athellame enaku pudikum.And the day we confessed our love <b>September 05 2026</b>,namma rendu peroda life la maraka mudiyaathu oru naal tha antha day tha. And athuku apro first time kovilku ponathu antha day favourite da, anga poitu namma life la next enna step nu clear aa pesi decision yaduthathu yallame favourite thaa ma.  And the day our first hug and first kiss, Oru maari nervousness laye kiss kuduthathu yallame enoda favourite and unaku na kanathula kuduthaa kiss la enoda favourite and lip la kuduka rendu perume felt shy and then kan laye pesuno athuku apro tha we started kissing eachother and unaku athu romba pudikumnu enaku theriyum, atha nee kekkumbothu na summa velayaaduva kuduka maata apdinuu but kuduthuruvaa daa ethellame enoda favourite tha. And nethu namma veliya meet panathum enoda favourite tha neraiya pesa mudiyala but full day spend panathu favourite thaa. 
      </b></p>

      <p><i><b>💗One day, you asked me to write a love letter for you and  etha na unaku kudukra love letter aa vechuko...💗</b></i></p>

    </div>

    <div className="letter-closing">

      <p>With lots of love,</p>

      <h2>Papaa ♡</h2>

    </div>

    <div className="letter-decoration bottom-decoration">
      ✿ ♡ ✿
    </div>

  </motion.div>

  <div className="letter-footer">
    A LITTLE LETTER, WITH A LOT OF FEELINGS ♡
  </div>

  <button
    className="back-button bottom-back"
    onClick={() => setSelectedSection(null)}
  >
    ← BACK TO OUR WORLD
  </button>

</motion.div>

) : 
            

            selectedSection.id === 3 ? (
            
              /* WHY YOU ARE SPECIAL PAGE */

<motion.div
  key="special"
  className="special-page"
  initial={{ opacity: 0, y: 35 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -25 }}
  transition={{ duration: 0.6 }}
>

  <button
    className="back-button"
    onClick={() => setSelectedSection(null)}
  >
    ← BACK TO OUR WORLD
  </button>

  <div className="special-header">

    <span className="special-label">
      ✧ CHAPTER THREE ✧
    </span>

    <h1>Why You're So Special ♡</h1>

    <p>
      A million little reasons, but here are a few...
    </p>

    <div className="special-divider">
      ♡ ───── ✧ ───── ♡
    </div>

  </div>

  <div className="special-grid">

    {specialReasons.map((reason, index) => (

      <motion.div
        className="special-reason-card"
        key={reason.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: index * 0.12
        }}
        whileHover={{
          y: -8,
          scale: 1.03
        }}
      >

        <div className="special-symbol">
          {reason.symbol}
        </div>

        <h2>{reason.title}</h2>

        <p>{reason.description}</p>

        <span className="special-card-decoration">
          ✧ ♡ ✧
        </span>

      </motion.div>

    ))}

  </div>

  <div className="special-footer">

    <span>♡</span>

    <h2>You're Special Just The Way You Are</h2>

    <p>
      Not because of one particular reason,
      but because of all the little things that make you YOU.
    </p>

    <span>♡ ✧ ♡</span>

  </div>

  <button
    className="back-button bottom-back"
    onClick={() => setSelectedSection(null)}
  >
    ← BACK TO OUR WORLD
  </button>

</motion.div>

) 
            :(

              selectedSection.id === 2 ? (

  /* OUR MEMORIES PAGE */

  <motion.div
    key="memories"
    className="memories-page"
    initial={{ opacity: 0, y: 35 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -25 }}
    transition={{ duration: 0.6 }}
  >

    <button
      className="back-button"
      onClick={() => setSelectedSection(null)}
    >
      ← BACK TO OUR WORLD
    </button>

    <div className="memories-header">

      <span className="memories-label">
        ✧ CHAPTER TWO ✧
      </span>

      <h1>Our Favourite Memories ♡</h1>

      <p>
        Every picture holds a little piece of our story.
      </p>

      <div className="memories-divider">
        ♡ ───── ✧ ───── ♡
      </div>

    </div>

    {/* MEMORY GALLERY */}

    <div className="memory-gallery">

      {memories.map((memory, index) => (

        <motion.div
          className="memory-card"
          key={memory.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.2
          }}
          whileHover={{
            y: -8,
            scale: 1.02
          }}
        >

          <div className="memory-image-frame">

            <img
              src={memory.image}
              alt={memory.title}
            />

            <span className="memory-heart">♡</span>

          </div>

          <div className="memory-info">

            <span className="memory-date">
              {memory.date}
            </span>

            <h2>{memory.title}</h2>

            <p>{memory.caption}</p>

          </div>

        </motion.div>

      ))}

    </div>

    <div className="little-moments">

      <span>♡</span>

      <h2>Little Moments, Forever Memories</h2>

      <p>
        Some moments may look simple, but they mean
        more than words can explain.
      </p>

      <span>✧ ♡ ✧</span>

    </div>

    <div className="memories-footer">
      MADE OF LITTLE MOMENTS AND LOTS OF LOVE ♡
    </div>

    <button
      className="back-button bottom-back"
      onClick={() => setSelectedSection(null)}
    >
      ← BACK TO OUR WORLD
    </button>

  </motion.div>

) : 
              /* INDIVIDUAL SECTION */

              selectedSection.id === 1 ? (

                /* OUR BEGINNING PAGE */

                <motion.div
                  key="beginning"
                  className="beginning-page"
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -25 }}
                  transition={{ duration: 0.6 }}
                >

                  <button
                    className="back-button"
                    onClick={() => setSelectedSection(null)}
                  >
                    ← BACK TO OUR WORLD
                  </button>

                  <div className="beginning-header">

                    <span className="beginning-label">
                      ✧ CHAPTER ONE ✧
                    </span>

                    <h1>
                      Our Story Begins Here ♡
                      
                    </h1>

                    <p>
                      Every little moment brought us
                      to a beautiful story.
                    </p>

                    <div className="beginning-divider">
                      ♡ ───── ✧ ───── ♡
                    </div>

                  </div>

                  <div className="timeline">

                    {timeline.map((item, index) => (

                      <motion.div
                        className={`timeline-item ${
                          index % 2 === 0 ? "left" : "right"
                        }`}
                        key={item.number}
                        initial={{
                          opacity: 0,
                          y: 40
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0
                        }}
                        viewport={{
                          once: true,
                          amount: 0.3
                        }}
                        transition={{
                          duration: 0.7,
                          delay: 0.1
                        }}
                      >

                        <div className="timeline-dot">
                          ♡
                        </div>

                        <div className="timeline-content">

                          <span className="timeline-number">
                            {item.number}
                          </span>

                          <div className="timeline-symbol">
                            {item.symbol}
                          </div>

                          <span className="timeline-date">
                            {item.date}
                          </span>

                          <h2>{item.title}</h2>

                          <p>{item.description}</p>

                          <div className="timeline-decoration">
                            ✧ ♡ ✧
                          </div>

                        </div>

                      </motion.div>

                    ))}

                  </div>

                  <div className="beginning-footer">

                    <span>♡</span>

                    <p>
                      AND THIS IS ONLY THE BEGINNING...
                    </p>

                    <span>♡</span>

                  </div>

                  <button
                    className="back-button bottom-back"
                    onClick={() => setSelectedSection(null)}
                  >
                    ← BACK TO OUR WORLD
                  </button>

                </motion.div>

              ) : (

                /* OTHER SECTION PAGES */

                <motion.div
                  key={selectedSection.id}
                  className="detail-card"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5 }}
                >

                  <button
                    className="back-button"
                    onClick={() => setSelectedSection(null)}
                  >
                    ← BACK TO OUR WORLD
                  </button>

                  <div className="detail-symbol">
                    {selectedSection.symbol}
                  </div>

                  <p className="detail-label">
                    A LITTLE CHAPTER OF OUR STORY
                  </p>

                  <h1>{selectedSection.title}</h1>

                  <p className="detail-subtitle">
                    {selectedSection.description}
                  </p>

                  <div className="detail-decoration">
                    ♡ ✧ ♡
                  </div>

                  <p className="detail-coming">
                    A little something special is coming here...
                  </p>

                </motion.div>

              )

            )}

          </AnimatePresence>

        )}

      </AnimatePresence>

    </div>
  );
}

export default App;