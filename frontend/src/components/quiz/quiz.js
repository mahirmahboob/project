import React from 'react';
import { render } from 'react-dom';
const url = "http://localhost:5000/takeaquiz";

    
class TakeQuiz extends React.Component {
    constructor() {
        super();
        this.state = {
        recommendations: [],
        recs: new Map()

        };
    };

    componentDidMount(){
      const hid = ["time travel","tech","apocalyptic","AU","alien","realistic","science fiction","dystopian","fantasy","romance","historic fiction","mystery","adventure","horror","folk","witch"];
      for (let x in hid) {
        let hidden = document.getElementById(hid[x])
        hidden.style.display = "none";
      }
    }
  render(){
    const genres = (element,genre)=>{
      element.style.display = "none";
      genre.style.display = "inline";
    }
    const submit = ()=>{
      //console.log(this.state.recs)
      let obj = Object.create(null);
      for (let [k,v] of this.state.recs) {
        obj[k] = v;
      }
      const str = JSON.stringify(obj)

      fetch(url, {
          method: "POST",
          headers: {
              'Content-type': 'application/json',
              'Accept': 'application/json'
          },
          body: str
      }).then(result =>result.json())
          .then(data => {
              this.setState({
                    recommendations:data
                })
              //{printfunction()}
          }) 
    }
    const back = (del,hide,show)=>{
      // console.log("hide",hide)
      // console.log("show",show)
      let hidden = document.getElementById(hide)
      let shown = document.getElementById(show)

      hidden.style.display = "none";
      shown.style.display = "inline";
      console.log(this.state.recs)
      if (del.length){
        for (let x in del) {
          if (this.state.recs.has(del[x])){          
            this.state.recs.delete(del[x])
          }
        }
        console.log(this.state.recs)
      }
    }
    const check = (tag,selectedOptions) =>{
      if (selectedOptions === 'skip'){
        if (this.state.recs.has(tag)){          
          this.state.recs.delete(tag)
        }
      }
      else{ 
          this.state.recs.set(tag,selectedOptions)
      }    
      if (tag === "genre"){
        if (this.state.recs.get(tag) === 'realistic'|| this.state.recs.get(tag) === 'science fiction' || this.state.recs.get(tag) === 'fantasy'){
          let elem = document.getElementById('hide1')
          let gen = document.getElementById(this.state.recs.get(tag))
          genres(elem,gen)
        }
      if (this.state.recs.get(tag) === 'romance'|| this.state.recs.get(tag) === 'historic fiction' || this.state.recs.get(tag) === 'mystery'||this.state.recs.get(tag) === 'adventure'){
        let elem = document.getElementById("realistic")
        let gen = document.getElementById(this.state.recs.get(tag))
        genres(elem,gen)
      }
    }         
     if (tag === "subgenre"){
     if (this.state.recs.get(tag) === 'alien'|| this.state.recs.get(tag) === 'AU' || this.state.recs.get(tag) === 'dystopian' || this.state.recs.get(tag) === 'apocalyptic'|| this.state.recs.get(tag) === 'tech'|| this.state.recs.get(tag) === 'time travel'){
        let elem = document.getElementById('science fiction')
        let gen = document.getElementById(this.state.recs.get(tag))
        genres(elem,gen)
      }
     if (this.state.recs.get(tag) === 'horror'|| this.state.recs.get(tag) === 'folk' || this.state.recs.get(tag) === 'witch'){
        let elem = document.getElementById('fantasy')
        let gen = document.getElementById(this.state.recs.get(tag))
        genres(elem,gen)
      }
    }
    console.log(this.state.recs)
  }


    return(
        <body>
        <div>
        <div id="hide1">
          <p> Rating?</p>
          <button onClick={() => check("age_range","c")}>children</button>
          <button onClick={() => check("age_range","t")}>teens</button>
          <button onClick={() => check("age_range","a")}>adult</button>
          <button onClick={() => check("age_range","all")}>all</button>
          <p>Length?</p>
          <button onClick={() => check("maximum_pages","short")}>short Read (0-200)</button>
          <button onClick={() => check("maximum_pages","long")}>long Read (200+)</button>
          <p>Publication Era?</p>
          <button onClick={() => check("publication_date","bce")}>ancient (bce)</button>
          <button onClick={() => check("publication_date","middle ages")}>middle ages (6th-16th ce)</button>
          <button onClick={() => check("publication_date","renaissance")}>renaissance (16th-17th ce)</button>
          <button onClick={() => check("publication_date","early modern")}>early modern (18th-19th ce)</button>
          <button onClick={() => check("publication_date","contemporary")}>contemporary (20th-21st ce)</button>
          <p>Trigger Warnings?</p>
          <button onClick={() => check("triggers","violence")}>violence</button>
          <button onClick={() => check("triggers","death")}>death</button>
          <button onClick={() => check("triggers","suicide")}>suicide</button>
          <button onClick={() => check("triggers","drug abuse")}>drug abuse</button>
          <button onClick={() => check("triggers","child abuse")}>child abuse</button>
          <button onClick={() => check("triggers","SA")}>sexual assault/rape</button>
          <button onClick={() => check("triggers","kidnapping")}>kidnapping</button>
          <button onClick={() => check("triggers","animal cruelty")}>animal cruelty</button>
          <button onClick={() => check("triggers","skip")}>skip</button>
          <p>Genre of fiction?</p>
          <button onClick={() => check("genre","realistic")}>realistic</button>
          <button onClick={() => check("genre","science fiction")}>science fiction</button>
          <button onClick={() => check("genre","fantasy")}>fantasy</button>
        </div>

        <div id="realistic">
          <p>Genre of realistic fiction?</p>
          <button onClick={() => check("genre","romance")}>romance</button>
          <button onClick={() => check("genre","historic fiction")}>historic fiction</button>
          <button onClick={() => check("genre","mystery")}>mystery</button>
          <button onClick={() => check("genre","adventure")}>survival/adventure</button>
          <button onClick={() => back([],"realistic","hide1")}>back</button>

        </div>
        <div id="science fiction">
          <p>Category of scifi?</p>
          <button onClick={() => check("subgenre","alien")}>extraterrestrial life/space exploration</button>
          <button onClick={() => check("subgenre","dystopian")}>Dystopian</button>
          <button onClick={() => check("subgenre","AU")}>AU/ParallelU</button>
          <button onClick={() => check("subgenre","apocalyptic")}>apocalyptic/post-apocalyptic</button>
          <button onClick={() => check("subgenre","tech")}>anything techy</button>
          <button onClick={() => check("subgenre","time travel")}>time travel</button>
          <button onClick={() => back(["subgenre"],"science fiction","hide1")}>back</button>
        </div>
        <div id="fantasy">
          <p>Genre of fantasy?</p>
          <button onClick={() => check("subgenre","horror")}>horror</button>
          <button onClick={() => check("subgenre","folk")}>folklore</button>
          <button onClick={() => check("subgenre","witch")}>witch/wizard</button>
          <button onClick={() => back(["subgenre"],"fantasy","hide1")}>back</button>
        </div>

        <div id = "horror">
          <p>The scary thing?</p>
          <button onClick={() => check("element","occult")}>demonic/occult</button>
          <button onClick={() => check("element","ghost")}>ghost</button>
          <button onClick={() => check("element","lovecraft")}>lovecraftian</button>
          <button onClick={() => check("element","vampire")}>vampire</button>
          <button onClick={() => check("element","werewolf")}>werewolf</button>
          <button onClick={() => check("element","psychological")}>psychological</button>
          <button onClick={() => check("element","skip")}>other monsters</button>
          <p>Where?</p>
          <button onClick={() => check("setting","hell")}>hell</button>
          <button onClick={() => check("setting","castle")}>castle</button>
          <button onClick={() => check("setting","forest")}>forest</button>
          <button onClick={() => check("setting","workplace")}>typical real world (school/home/workplace)</button>
          <button onClick={() => check("setting","multilocation")}>multilocation</button>
          <button onClick={() => check("character","skip")}>skip</button>
          <p>Are the monsters truly the monsters?</p>
          <button onClick={() => check("trope","evil monsters")}>yes</button>
          <button onClick={() => check("trope","evil humans")}>no, it's humans so throw in evil ppl</button>
          <button onClick={() => check("trope","both good")}>no, the monsters aren't evil. nor are the humans</button>
          <button onClick={() => check("character","skip")}>skip</button>
          <p> Monsterxhuman romance?</p>
          <button onClick={() => check("character","monsterxhuman")}>no!!!</button>
          <button onClick={() => check("character","no monsterxhuman")}>dont question love</button>
          <button onClick={() => back(["character","trope","setting","element"],"horror","fantasy")}>back</button>
          <button onClick={() => submit()}>submit</button>
        </div>
        <div id = "folk">
          <p>Category of folklore?</p>
          <button onClick={() => check("subgenre","folktale")}>folktale</button>
          <button onClick={() => check("subgenre","fairy")}>fairytale</button>
          <button onClick={() => check("subgenre","myth")}>myth</button>
          <button onClick={() => check("subgenre","fable")}>fable</button>
          <p>Mood?</p>
          <button onClick={() => check("mood","cute")}>i wanna laugh</button>
          <button onClick={() => check("mood","exciting")}>a page turner, smthn to keep me on the edge of my seat</button>
          <button onClick={() => check("mood","sad")}>tearjerker</button>
          <button onClick={() => check("mood","dark")}>something dark and scary enough to make me crap myself</button>
          <button onClick={() => check("mood","entertaining")}>just smthn entertaining</button>
          <p>Magical beings?</p>
          <button onClick={() => check("character","fae")}>fairies</button>
          <button onClick={() => check("character","mermaid")}>mermaids</button>
          <button onClick={() => check("character","dragon")}>dragons</button>
          <button onClick={() => check("character","leprechaun")}>leprechauns</button>
          <button onClick={() => check("character","skip")}>other creatures</button>
          <p>Main character?</p>
          <button onClick={() => check("POV","royal")}>someone from royalty</button>
          <button onClick={() => check("POV","genius")}>the most clever or wise</button>
          <button onClick={() => check("POV","dunce")}>the dunce</button>
          <button onClick={() => check("POV","rando")}>idk just some rando</button>
          <p>Common plots?</p>
          <button onClick={() => check("trope","good vs evil")}>good vs evil</button>
          <button onClick={() => check("trope","defeat monster")}>defeat monster</button>
          <button onClick={() => check("trope","quest")}>quest</button>
          <button onClick={() => check("trope","voyage<")}>voyage</button>
          <button onClick={() => check("trope","win hand in marriage")}>win hand in marriage</button>
          <button onClick={() => check("trope","skip")}>skip</button>
          <button onClick={() => back(["trope","POV","character","mood"],"folk","fantasy")}>back</button>
          <button onClick={() => submit()}>submit</button>
        </div>
        <div id = "witch">
        <p>Set when?</p>
          <button onClick={() => check("time","modern")}>modern day</button>
          <button onClick={() => check("time","medeival")}>medeival times</button>
          <button onClick={() => check("time","victorian")}>victorian era</button>
          <button onClick={() => check("time","precolonial")}>precolonial era</button>
          <button onClick={() => check("time","skip")}>other</button>
        <p>fantasy creatures?</p>
          <button onClick={() => check("character","dragon")}>dragons</button>
          <button onClick={() => check("character","unicorn")}>unicorns</button>
          <button onClick={() => check("character","phoenix")}>phoenix</button>
          <button onClick={() => check("character","centuar")}>centuar</button>
          <button onClick={() => check("character","skip")}>all or other</button>
          <button onClick={() => back(["character","time"],"witch","fantasy")}>back</button>
          <button onClick={() => submit()}>submit</button>
        </div>

        <div id="dystopian">
          <p>Govt is the big baddie?</p>
          <button onClick={() => check("character","bad govt")}>yes, some totalitarian regime screwing everyone over</button>
          <button onClick={() => check("character","govt")}>no</button>
          <p>False utopia?</p>
          <button onClick={() => check("setting","false utopia")}>yes</button>
          <button onClick={() => check("setting","utopia")}>no, real utopia</button>
          <button onClick={() => check("setting","dystopia")}>no things are very clearly bad</button>
          <p>War/fighting to defeat whatever's causing this?</p>
          <button onClick={() => check("element","war")}>yes put focus on the war</button>
          <button onClick={() => check("element","bg war")}>yes but in the background. it's not the central focus</button>
          <button onClick={() => check("element","no war")}>no</button>
          <button onClick={() => back(["character","setting","element"],"dystopian","science fiction")}>back</button>
          <button onClick={() => submit()}>submit</button>
        </div>
        <div id="alien">
          <p>Type of alien?</p>
          <button onClick={() => check("character","humanoid")}>humanoids</button>
          <button onClick={() => check("character","not humanoid")}>not humanoids but humans can still communicate with them</button>
          <button onClick={() => check("character","microscopic")}>microscopic/parasitic</button>
          <button onClick={() => check("character","skip")}>skip</button>
          <p>Taking place in/on?</p>
          <button onClick={() => check("setting","earth")}>earth</button>
          <button onClick={() => check("setting","spaceship")}>spaceship</button>
          <button onClick={() => check("setting","other")}>other planets</button>
          <p>Alien invasion?</p>
          <button onClick={() => check("element","alien invasion")}>yes</button>
          <button onClick={() => check("element","no invasion")}>no</button>
          <button onClick={() => check("element","skip")}>skip</button>
          <p>How many aliens?</p>
          <button onClick={() => check("POV","army")}>an army</button>
          <button onClick={() => check("POV","one")}>one or a few</button>
          <p>Friendly/are they humanized?</p>
          <button onClick={() => check("trope","friendly alien")}>yes</button>
          <button onClick={() => check("trope","mean alien")}>no</button>
          <button onClick={() => check("trope","skip")}>skip</button>
          <button onClick={() => back(["character","setting","element","POV","trope"],"alien","science fiction")}>back</button>
          <button onClick={() => submit()}>submit</button>
        </div>
        <div id="AU">
          <p>Type of universe(s)?</p>
          <button onClick={() => check("setting","parrallel")}>related to our own, maybe even crossover of the two</button>
          <button onClick={() => check("setting","alternate")}>just an alternate reality unrelated to our own</button>
          <button onClick={() => check("setting","multiverse")}>many universes that might crossover w e/o</button>
          <p>Interstellar travel?</p>
          <button onClick={() => check("element","interstellar")}>no</button>
          <button onClick={() => check("element","no interstellar")}>yes</button>
          <button onClick={() => back(["setting","element"],"AU","science fiction")}>back</button>
          <button onClick={() => submit()}>submit</button>
        </div>
        <div id="apocalyptic">
          <p>Desolate areas w ppl struggling to survive?</p>
          <button onClick={() => check("setting","wasteland")}>wastelands, no food no water maybe cannibals around</button>
          <button onClick={() => check("setting","ok wasteland")}>yeah things are bad but ppl aren't like...roaming around in the wild</button>
          <button onClick={() => check("setting","land")}>things are ok</button>
          <p>What caused the disaster?</p>
          <button onClick={() => check("trope","nuclear")}>nuclear</button>
          <button onClick={() => check("trope","zombie")}>zombie</button>
          <button onClick={() => check("trope","disease")}>disease/pandemic</button>
          <button onClick={() => check("trope","war")}>war</button>
          <button onClick={() => check("trope","environment")}>environmental destruction/climate change</button>
          <button onClick={() => check("trope","skip")}>skip</button>
          <p>Religious elements?</p>
          <button onClick={() => check("element","bible")}>yeah Biblical references or be directly about Biblical events</button>
          <button onClick={() => check("element","other")}>elements from other religions, no Christianity/Catholicism</button>
          <button onClick={() => check("element","atheist")}>no. religion has no business here</button>
          <button onClick={() => check("element","skip")}>skip</button>
          <p>Where's the government in all this?</p>
          <button onClick={() => check("character","no govt")}>nowhere</button>
          <button onClick={() => check("character","govt")}>a small governemnt present</button>
          <button onClick={() => check("character","bad govt")}>evil government</button>
          <button onClick={() => check("character","skip")}>skip</button>
          <button onClick={() => back(["setting","element","trope","character"],"apocalyptic","science fiction")}>back</button>
          <button onClick={() => submit()}>submit</button>
        </div>
        <div id="tech">
          <p>Tech element?</p>
          <button onClick={() => check("element","AI")}>AI</button>
          <button onClick={() => check("element","VR")}>VR</button>
          <button onClick={() => check("element","robot")}>robots</button>
          <button onClick={() => check("element","nanotech")}>nanotech</button>
          <button onClick={() => check("element","genetic engineering")}>genetic engineering</button>
          <button onClick={() => check("element","evolution")}>human development</button>
          <p>Humans advanced in any way?</p>
          <button onClick={() => check("character","microchip")}>yeah, microchips implanted in brains, as the antivaxxers say</button>
          <button onClick={() => check("character","robot")}>they live w robots/cool gadgets</button>
          <button onClick={() => check("character","superhuman")}>no tech, but they've evolved to become different/superhuman</button>
          <button onClick={() => check("character","no tech")}>no, most don't have access to all the cool stuff bc it's expensive</button>
          <button onClick={() => check("character","skip")}>skip</button>
          <p>Is the tech actually being used for malicious purposes?</p>
          <button onClick={() => check("trope","bad govt")}>yes the government or some other entity is misusing it</button>
          <button onClick={() => check("trope","scientist")}>yeah theres a mad scientist somewhere</button>
          <button onClick={() => check("trope","good tech")}>no, it just makes lives easier</button>
          <button onClick={() => check("trope","skip")}>skip</button>
          <button onClick={() => back(["element","character","trope"],"tech","science fiction")}>back</button>
          <button onClick={() => submit()}>submit</button>
        </div>
        <div id="time travel">
          <p>Forward or backward?</p>
          <button onClick={() => check("time","forward")}>forward</button>
          <button onClick={() => check("time","backward")}>backward</button>
          <button onClick={() => check("time","both")}>both</button>
          <p>Mechanism?</p>
          <button onClick={() => check("trope","time slip")}>time slip</button>
          <button onClick={() => check("trope","time loop")}>time loop</button>
          <button onClick={() => check("trope","time reverse")}>time reverse</button>
          <button onClick={() => check("trope","time machine")}>time machine, in whatever form</button>
          <button onClick={() => check("trope","visitor")}>communication from another time</button>
          <button onClick={() => check("trope","precognition")}>precognition</button>
          <p>Number of travels?</p>
          <button onClick={() => check("element","hopping")}>hopping around in time</button>
          <button onClick={() => check("element","staying")}>going to one time once and staying there</button>
          <button onClick={() => check("element","returning")}>going to one time but returning to original time</button>
          <p>Number of timelines?</p>
          <button onClick={() => check("setting","one")}>just one, I don't want a headache</button>
          <button onClick={() => check("setting","multiple")}>multiple, I wanna be thoroughly confused</button>
          <p>Meeting ancestors/descendents?</p>
          <button onClick={() => check("character","no relatives")}>no, you might get into icky situations that way</button>
          <button onClick={() => check("character","relatives")}>yes</button>
          <p>Travelers?</p>
          <button onClick={() => check("POV","govt")}>ppl associated w the govt</button>
          <button onClick={() => check("POV","no govt")}>ppl associated w some non-govt entity</button>
          <button onClick={() => check("POV","rando group")}>a group not associated w anything</button>
          <button onClick={() => check("POV","rando")}>idk some rando</button>
          <button onClick={() => back(["element","character","trope","time","POV","setting"],"time travel","science fiction")}>back</button>
          <button onClick={() => submit()}>submit</button>
        </div>

        <div id="romance">
          <p>What type of romance are you in the mood for?</p>
          <button onClick={() => check("mood","cute")}>cute and lighthearted, like a romcom</button>
          <button onClick={() => check("mood","forbidden")}>forbidden romance, I wanna read about a taboo relationship</button>
          <button onClick={() => check("mood","serious")}>serious and dramatic, you know...like two people thinking they'll die without each other</button>
          <button onClick={() => check("mood","dark")}>dark and gritty. they've gotta be in danger, risking their lives to be together</button>
          <p>The age of the couple?</p>
          <button onClick={() => check("character","teens")}>teens</button>
          <button onClick={() => check("character","YAs")}>20-30 somethings</button>
          <button onClick={() => check("character","adults")}>middle aged</button>
          <button onClick={() => check("character","seniors")}>elderly</button>
          <p>Any of these settings sound good?</p>
          <button onClick={() => check("setting","school")}>high school/college</button>
          <button onClick={() => check("setting","royalty")}>royalty/kingdom</button>
          <button onClick={() => check("setting","workplace")}>workplace. im thinking ppl with 40 hr work weeks and depressing cubicles</button>
          <button onClick={() => check("setting","countryside")}>countryside</button>
          <button onClick={() => check("setting","skip")}>skip</button>
          <p>Tropes?</p>
          <button onClick={() => check("trope","ETL")}>enemies to lovers</button>
          <button onClick={() => check("trope","FTL")}>friends to lovers</button>
          <button onClick={() => check("trope","CTL")}>childhood connection</button>
          <button onClick={() => check("trope","soulmates")}>soulmates</button>
          <button onClick={() => check("trope","roomates")}>and they were roomates</button>
          <button onClick={() => check("trope","break make")}>break up and make up</button>
          <button onClick={() => check("trope","trapped")}>trapped together/there was only one bed</button>
          <button onClick={() => check("trope","marriage")}>marriage of convenience</button>
          <button onClick={() => check("trope","amnesia")}>amnesia/mistaken identity</button>
          <button onClick={() => check("trope","skip")}>skip</button>
          <p>Specifics of the relationship?</p>
          <button onClick={() => check("element","lgbtq+")}>lgbtq+</button>
          <button onClick={() => check("element","age difference")}>age difference</button>
          <button onClick={() => check("element","open relationship")}>open relationship</button>
          <button onClick={() => check("element","long distance")}>long distance</button>
          <button onClick={() => check("element","skip")}>skip</button>
          <button onClick={() => back(["mood","element","character","trope","setting"],"romance","realistic")}>back</button>
          <button onClick={submit}>submit</button>
        </div>
        <div id="historic fiction">
          <p>Historical eras?</p>
          <button onClick={() => check("time","classical")}>classical</button>
          <button onClick={() => check("time","middle ages")}>middle ages</button>
          <button onClick={() => check("time","early modern")}>early modern</button>
          <button onClick={() => check("time","modern")}>modern (excluding current century)</button>
          <button onClick={() => check("time","multiperiod")}>multiperiod</button>
          <p>Location?</p>
          <button onClick={() => check("setting","Americas")}>Americas</button>
          <button onClick={() => check("setting","Asia")}>Asia</button>
          <button onClick={() => check("setting","Europe")}>Europe</button>
          <button onClick={() => check("setting","Africa")}>Africa</button>
          <button onClick={() => check("setting","skip")}>multilocation</button>
          <p>Alternate History?</p>
          <button onClick={() => check("element","AH")}>Yes</button>
          <button onClick={() => check("element","no AH")}>No, stick to the facts</button>
          <button onClick={() => back(["time","element","setting"],"historic fiction","realistic")}>back</button>
          <button onClick={() => submit()}>submit</button>
        </div>
        <div id = "mystery">
          <p>Mood?</p>
          <button onClick={() => check("mood","cute")}>lighthearted, mystery doesn't involve any dangerous situations</button>
          <button onClick={() => check("mood","serious")}>serious</button>
          <button onClick={() => check("mood","dark")}>scary, something that'll take a psychological toll on me</button>   
          <button onClick={() => check("mood","cerebral")}>cerebral, I wanna use my brain</button>
          <p>Type of mystery?</p>
          <button onClick={() => check("subgenre","detective")}>detective</button>
          <button onClick={() => check("subgenre","thriller")}>thriller</button>
          <button onClick={() => check("subgenre","procedural")}>procedural</button>
          <button onClick={() => check("subgenre","caper")}>caper</button>
          <p>Would you like crime with your order?</p>
          <button onClick={() => check("trope","murder")}>murder</button>
          <button onClick={() => check("trope","robbery")}>robbery</button>
          <button onClick={() => check("trope","kidnapping")}>kidnapping/missing person</button>
          <button onClick={() => check("trope","no crime")}>no crime</button>
          <button onClick={() => check("trope","skip")}>skip</button>  
          <p>Based on true story/true crime?</p>
          <button onClick={() => check("element","true crime")}>no</button>
          <button onClick={() => check("element","no true crime")}>yes</button>
          <button onClick={() => check("element","skip")}>skip</button>     
          <p>POV?</p>
          <button onClick={() => check("POV","killer")}>the person who knows the answer, like a killer if it's a murder mystery</button>
          <button onClick={() => check("POV","victim")}>the victim/the person most affected by the mystery</button>
          <button onClick={() => check("POV","authorities")}>authorities</button> 
          <button onClick={() => check("POV","detective")}>private detective</button>   
          <button onClick={() => check("POV","rando")}>idk just some rando it doesn't matter</button> 
          <button onClick={() => back(["mood","subgenre","trope","element","POV"],"mystery","realistic")}>back</button>
          <button onClick={() => submit()}>submit</button>
        </div>
        <div id = "adventure">
          <p>Mood?</p>
          <button onClick={() => check("mood","cute")}>lighthearted, witty, funny</button>
          <button onClick={() => check("mood","serious")}>tense, serious</button>
          <button onClick={() => check("mood","dark")}>dark, intense</button>   
          <button onClick={() => check("mood","fun")}>epic adventure but i don't mean epic like the poem type</button>
          <p>Epic?</p>
          <button onClick={() => check("POV","no epic")}>no</button>
          <button onClick={() => check("POV","epic")}>yes</button>
          <button>skip</button>
          <p>Characters grow up over time?</p>
          <button onClick={() => check("character","bildungsroman")}>yes</button>
          <button onClick={() => check("character","no bildungsroman")}>no. i fear the passage of time</button>
          <button>skip</button>
          <p>Hero(es)/villian(s)?</p>
          <button onClick={() => check("trope","genius")}>yep the underdog/rouge hero helping a group of people but theres not necessarily a villian</button>
          <button onClick={() => check("trope","traveler")}>no just someone traveling to new lands maybe learning lessons in the process, an explorer more than a hero</button>
          <button onClick={() => check("trope","travelers")}>no central hero just different characters traveling around</button>  
          <button onClick={() => check("trope","hero")}>want some baddies being a pain in the neck for ppl and theres only one person to put an end to them</button>     
          <p>Fighting?</p>
          <button onClick={() => check("element","banter")}>no the most i want is banter</button>
          <button onClick={() => check("element","guns")}>yeah weapons...guns, bombs, maybe war</button>
          <button onClick={() => check("element","spears")}>maybe like bows and arrows, spears, or swords</button>   
          <button onClick={() => check("element","fists")}>fists to faces</button> 
          <button onClick={() => back(["mood","character","trope","element","POV"],"adventure","realistic")}>back</button>
          <button onClick={() => submit()}>submit</button>
        </div>

                    <div className="quiz-recommendation">
                  {
                      this.state.recommendations.map(rec=>(
                          <div key={rec.book_name}className="book-recommendation">
                          <h2> Title: {rec.book_name}</h2>
                          <h2> Author: {rec.author}</h2>
                          <h2> Rating: {rec.rating}</h2>
                          <h2> Age Range: {rec.age_range}</h2>
                          <h2>Synopsis: {rec.Synopsis}</h2>
                          <h2><a href={rec.LinkToAmazon} target="_blank"> Purchase Link</a> </h2>
                          <img src={rec.PictureLink} height={400} witdth={400} />
                          </div>
                        ))
                  }
            </div>
        </div>

        </body>
    );
  }
}
export default TakeQuiz;
//render(<QuizRecs />, document.getElementById("root"));
