import React from 'react';
//import { render } from 'react-dom';
import './TakeQuiz.css';
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
      const hid = ["timetravel","tech","apocalyptic","AU","alien","realistic","sciencefiction","dystopian","fantasy","romance","historicfiction","mystery","adventure","horror","folk","witch"];
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
        if (this.state.recs.get(tag) === 'realistic'|| this.state.recs.get(tag) === 'sciencefiction' || this.state.recs.get(tag) === 'fantasy'){
          let elem = document.getElementById('hide1')
          let gen = document.getElementById(this.state.recs.get(tag))
          genres(elem,gen)
        }
      if (this.state.recs.get(tag) === 'romance'|| this.state.recs.get(tag) === 'historicfiction' || this.state.recs.get(tag) === 'mystery'||this.state.recs.get(tag) === 'adventure'){
        let elem = document.getElementById("realistic")
        let gen = document.getElementById(this.state.recs.get(tag))
        genres(elem,gen)
      }
    }         
     if (tag === "subgenre"){
     if (this.state.recs.get(tag) === 'alien'|| this.state.recs.get(tag) === 'AU' || this.state.recs.get(tag) === 'dystopian' || this.state.recs.get(tag) === 'apocalyptic'|| this.state.recs.get(tag) === 'tech'|| this.state.recs.get(tag) === 'timetravel'){
        let elem = document.getElementById('sciencefiction')
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
        {/* <div> */}
        <div id="hide1">
          <p> Rating?</p>
          <button onClick={() => check("age_range","c")}>children</button><br/>
          <button onClick={() => check("age_range","t")}>teens</button><br/>
          <button onClick={() => check("age_range","a")}>adult</button><br/>
          <button onClick={() => check("age_range","all")}>all</button><br/>
          <p>Length?</p>
          <button onClick={() => check("maximum_pages","short")}>short Read (0-200)</button><br/>
          <button onClick={() => check("maximum_pages","long")}>long Read (200+)</button><br/>
          <p>Publication Era?</p>
          <button onClick={() => check("publication_date","bce")}>ancient (bce)</button><br/>
          <button onClick={() => check("publication_date","middle ages")}>middle ages (6th-16th ce)</button><br/>
          <button onClick={() => check("publication_date","renaissance")}>renaissance (16th-17th ce)</button><br/>
          <button onClick={() => check("publication_date","early modern")}>early modern (18th-19th ce)</button><br/>
          <button onClick={() => check("publication_date","contemporary")}>contemporary (20th-21st ce)</button><br/>
          <p>Trigger Warnings?</p>
          <button onClick={() => check("triggers","violence")}>violence</button><br/>
          <button onClick={() => check("triggers","death")}>death</button><br/>
          <button onClick={() => check("triggers","suicide")}>suicide</button><br/>
          <button onClick={() => check("triggers","drug abuse")}>drug abuse</button><br/>
          <button onClick={() => check("triggers","child abuse")}>child abuse</button><br/>
          <button onClick={() => check("triggers","SA")}>sexual assault/rape</button><br/>
          <button onClick={() => check("triggers","kidnapping")}>kidnapping</button><br/>
          <button onClick={() => check("triggers","animal cruelty")}>animal cruelty</button><br/>
          <button class="skipped"  onClick={() => check("triggers","skip")}>skip</button><br/>
          <p>Genre of fiction?</p>
          <button onClick={() => check("genre","realistic")}>realistic</button><br/>
          <button onClick={() => check("genre","sciencefiction")}>science fiction</button><br/>
          <button onClick={() => check("genre","fantasy")}>fantasy</button><br/>
        </div>

        <div id="realistic">
          <p>Genre of realistic fiction?</p>
          <button class="rom" onClick={() => check("genre","romance")}>romance</button><br/>
          <button class="his" onClick={() => check("genre","historicfiction")}>historic fiction</button><br/>
          <button class="mys" onClick={() => check("genre","mystery")}>mystery</button><br/>
          <button class="adv" onClick={() => check("genre","adventure")}>survival/adventure</button><br/>
          <button class="skipped" onClick={() => back([],"realistic","hide1")}>back</button>
        </div>
        <div id="sciencefiction">
          <p>Category of scifi?</p>
          <button class="ali" onClick={() => check("subgenre","alien")}>extraterrestrial life/space exploration</button><br/>
          <button class="dys" onClick={() => check("subgenre","dystopian")}>dystopian</button><br/>
          <button class="par" onClick={() => check("subgenre","AU")}>AU/ParallelU</button><br/>
          <button class="apo" onClick={() => check("subgenre","apocalyptic")}>apocalyptic/post-apocalyptic</button><br/>
          <button class="tex" onClick={() => check("subgenre","tech")}>anything techy</button><br/>
          <button class="tim" onClick={() => check("subgenre","timetravel")}>time travel</button><br/>
          <button class="skipped" onClick={() => back(["subgenre"],"sciencefiction","hide1")}>back</button><br/>
        </div>
        <div id="fantasy">
          <p>Genre of fantasy?</p>
          <button class="hor" onClick={() => check("subgenre","horror")}>horror</button><br/>
          <button class="fok" onClick={() => check("subgenre","folk")}>folklore</button><br/>
          <button class="wit" onClick={() => check("subgenre","witch")}>witch/wizard</button><br/>
          <button class="skipped" onClick={() => back(["subgenre"],"fantasy","hide1")}>back</button>
        </div>

        <div id = "horror">
          <p>The scary thing?</p>
          <button onClick={() => check("element","occult")}>demonic/occult</button><br/>
          <button onClick={() => check("element","ghost")}>ghost</button><br/>
          <button onClick={() => check("element","lovecraft")}>lovecraftian</button><br/>
          <button onClick={() => check("element","vampire")}>vampire</button><br/>
          <button onClick={() => check("element","werewolf")}>werewolf</button><br/>
          <button onClick={() => check("element","psychological")}>psychological</button><br/>
          <button class="skipped" onClick={() => check("element","skip")}>skip</button><br/>
          <p>Where?</p>
          <button onClick={() => check("setting","hell")}>hell</button><br/>
          <button onClick={() => check("setting","castle")}>castle</button><br/>
          <button onClick={() => check("setting","forest")}>forest</button><br/>
          <button onClick={() => check("setting","workplace")}>typical real world (school/home/workplace)</button><br/>
          <button onClick={() => check("setting","multilocation")}>multilocation</button><br/>
          <button class="skipped" onClick={() => check("character","skip")}>skip</button><br/>
          <p>Are the monsters truly the monsters?</p>
          <button onClick={() => check("trope","evil monsters")}>yes</button><br/>
          <button onClick={() => check("trope","evil humans")}>no, it's humans so throw in evil ppl</button><br/>
          <button onClick={() => check("trope","both good")}>no, the monsters aren't evil. nor are the humans</button><br/>
          <button class="skipped" onClick={() => check("character","skip")}>skip</button><br/>
          <p> Monsterxhuman ahem...romance? *hint hint wink wink*</p>
          <button onClick={() => check("character","monsterxhuman")}>NO!!!</button><br/>
          <button onClick={() => check("character","no monsterxhuman")}>don't question love</button><br/>
          <button class="skipped" onClick={() => back(["character","trope","setting","element"],"horror","fantasy")}>back</button>
          <button class="skipped" onClick={() => submit()}>submit</button>
        </div>
        <div id = "folk">
          <p>Category of folklore?</p>
          <button onClick={() => check("subgenre","folktale")}>folktale</button><br/>
          <button onClick={() => check("subgenre","fairy")}>fairytale</button><br/>
          <button onClick={() => check("subgenre","myth")}>myth</button><br/>
          <button onClick={() => check("subgenre","fable")}>fable</button><br/>
          <p>Mood?</p>
          <button onClick={() => check("mood","cute")}>i wanna laugh</button><br/>
          <button onClick={() => check("mood","exciting")}>a page turner, smthn to keep me on the edge of my seat</button><br/>
          <button onClick={() => check("mood","sad")}>tearjerker</button><br/>
          <button onClick={() => check("mood","dark")}>something dark and scary enough to make me crap myself</button><br/>
          <button onClick={() => check("mood","entertaining")}>just smthn entertaining</button><br/>
          <p>Magical beings?</p>
          <button onClick={() => check("character","fae")}>fairies</button><br/>
          <button onClick={() => check("character","mermaid")}>mermaids</button><br/>
          <button onClick={() => check("character","dragon")}>dragons</button><br/>
          <button onClick={() => check("character","leprechaun")}>leprechauns</button><br/>
          <button class="skipped" onClick={() => check("character","skip")}>skip</button><br/>
          <p>Main character?</p>
          <button onClick={() => check("POV","royal")}>someone from royalty</button><br/>
          <button onClick={() => check("POV","genius")}>the most clever or wise</button><br/>
          <button onClick={() => check("POV","dunce")}>the dunce</button><br/>
          <button onClick={() => check("POV","rando")}>idk just some rando</button><br/>
          <p>Common plots?</p>
          <button onClick={() => check("trope","good vs evil")}>good vs evil</button><br/>
          <button onClick={() => check("trope","defeat monster")}>defeat monster</button><br/>
          <button onClick={() => check("trope","quest")}>quest</button><br/>
          <button onClick={() => check("trope","voyage")}>voyage</button><br/>
          <button onClick={() => check("trope","win hand in marriage")}>win hand in marriage</button><br/>
          <button class="skipped" onClick={() => check("trope","skip")}>skip</button><br/>
          <button class="skipped" onClick={() => back(["trope","POV","character","mood"],"folk","fantasy")}>back</button>
          <button class="skipped" onClick={() => submit()}>submit</button>
        </div>
        <div id = "witch">
        <p>Set when?</p>
          <button onClick={() => check("time","modern")}>modern day</button><br/>
          <button onClick={() => check("time","medeival")}>medeival times</button><br/>
          <button onClick={() => check("time","victorian")}>victorian era</button><br/>
          <button onClick={() => check("time","precolonial")}>precolonial era</button><br/>
          <button class="skipped" onClick={() => check("time","skip")}>other</button><br/>
        <p>fantasy creatures?</p>
          <button onClick={() => check("character","dragon")}>dragons</button><br/>
          <button onClick={() => check("character","unicorn")}>unicorns</button><br/>
          <button onClick={() => check("character","phoenix")}>phoenix</button><br/>
          <button onClick={() => check("character","centuar")}>centuar</button><br/>
          <button class="skipped" onClick={() => check("character","skip")}>skip</button><br/>
          <button class="skipped" onClick={() => back(["character","time"],"witch","fantasy")}>back</button>
          <button class="skipped" onClick={() => submit()}>submit</button>
        </div>

        <div id="dystopian">
          <p>Govt is the big baddie?</p>
          <button onClick={() => check("character","bad govt")}>yes, some totalitarian regime screwing everyone over</button><br/>
          <button onClick={() => check("character","govt")}>no</button><br/>
          <p>False utopia?</p>
          <button onClick={() => check("setting","false utopia")}>yes</button><br/>
          <button onClick={() => check("setting","utopia")}>no, real utopia</button><br/>
          <button onClick={() => check("setting","dystopia")}>no things are very clearly bad</button><br/>
          <p>War/fighting to defeat whatever's causing this?</p>
          <button onClick={() => check("element","war")}>yes put focus on the war</button><br/>
          <button onClick={() => check("element","bg war")}>yes but in the background. it's not the central focus</button><br/>
          <button onClick={() => check("element","no war")}>no</button><br/>
          <button class="skipped" onClick={() => back(["character","setting","element"],"dystopian","sciencefiction")}>back</button>
          <button class="skipped" onClick={() => submit()}>submit</button>
        </div>
        <div id="alien">
          <p>Type of alien?</p>
          <button onClick={() => check("character","humanoid")}>humanoids</button><br/>
          <button onClick={() => check("character","not humanoid")}>not humanoids but humans can still communicate with them</button><br/>
          <button onClick={() => check("character","microscopic")}>microscopic/parasitic</button><br/>
          <button class="skipped" onClick={() => check("character","skip")}>skip</button><br/>
          <p>Taking place in/on?</p>
          <button onClick={() => check("setting","earth")}>earth</button><br/>
          <button onClick={() => check("setting","spaceship")}>spaceship</button><br/>
          <button onClick={() => check("setting","other")}>other planets</button><br/>
          <p>Alien invasion?</p>
          <button onClick={() => check("element","alien invasion")}>yes</button><br/>
          <button onClick={() => check("element","no invasion")}>no</button><br/>
          <button class="skipped" onClick={() => check("element","skip")}>skip</button><br/>
          <p>How many aliens?</p>
          <button onClick={() => check("POV","army")}>an army</button><br/>
          <button onClick={() => check("POV","one")}>one or a few</button><br/>
          <p>Friendly/are they humanized?</p>
          <button onClick={() => check("trope","friendly alien")}>yes</button><br/>
          <button onClick={() => check("trope","mean alien")}>no</button><br/>
          <button class="skipped" onClick={() => check("trope","skip")}>skip</button><br/>
          <button class="skipped" onClick={() => back(["character","setting","element","POV","trope"],"alien","sciencefiction")}>back</button>
          <button class="skipped" onClick={() => submit()}>submit</button>
        </div>
        <div id="AU">
          <p>Type of universe(s)?</p>
          <button onClick={() => check("setting","parrallel")}>related to our own, maybe even crossover of the two</button><br/>
          <button onClick={() => check("setting","alternate")}>just an alternate reality unrelated to our own</button><br/>
          <button onClick={() => check("setting","multiverse")}>many universes that might crossover w e/o</button><br/>
          <p>Interstellar travel?</p>
          <button onClick={() => check("element","interstellar")}>no</button><br/>
          <button onClick={() => check("element","no interstellar")}>yes</button><br/>
          <button class="skipped" onClick={() => back(["setting","element"],"AU","sciencefiction")}>back</button>
          <button class="skipped" onClick={() => submit()}>submit</button>
        </div>
        <div id="apocalyptic">
          <p>Desolate areas w ppl struggling to survive?</p>
          <button onClick={() => check("setting","wasteland")}>wastelands, no food no water maybe cannibals around</button><br/>
          <button onClick={() => check("setting","ok wasteland")}>yeah things are bad but ppl aren't like...roaming around in the wild</button><br/>
          <button onClick={() => check("setting","land")}>things are ok</button><br/>
          <p>What caused the disaster?</p>
          <button onClick={() => check("trope","nuclear")}>nuclear</button><br/>
          <button onClick={() => check("trope","zombie")}>zombie</button><br/>
          <button onClick={() => check("trope","disease")}>disease/pandemic</button><br/>
          <button onClick={() => check("trope","war")}>war</button><br/>
          <button onClick={() => check("trope","environment")}>environmental destruction/climate change</button><br/>
          <button class="skipped" onClick={() => check("trope","skip")}>skip</button><br/>
          <p>Religious elements?</p>
          <button onClick={() => check("element","bible")}>yeah Biblical references or be directly about Biblical events</button><br/>
          <button onClick={() => check("element","other")}>elements from other religions, no Christianity/Catholicism</button><br/>
          <button onClick={() => check("element","atheist")}>no. religion has no business here</button><br/>
          <button class="skipped" onClick={() => check("element","skip")}>skip</button><br/>
          <p>Where's the government in all this?</p>
          <button onClick={() => check("character","no govt")}>nowhere</button><br/>
          <button onClick={() => check("character","govt")}>a small governemnt present</button><br/>
          <button onClick={() => check("character","bad govt")}>evil government</button><br/>
          <button class="skipped" onClick={() => check("character","skip")}>skip</button><br/>
          <button class="skipped" onClick={() => back(["setting","element","trope","character"],"apocalyptic","sciencefiction")}>back</button>
          <button class="skipped" onClick={() => submit()}>submit</button>
        </div>
        <div id="tech">
          <p>Tech element?</p>
          <button onClick={() => check("element","AI")}>AI</button><br/>
          <button onClick={() => check("element","VR")}>VR</button><br/>
          <button onClick={() => check("element","robot")}>robots</button><br/>
          <button onClick={() => check("element","nanotech")}>nanotech</button><br/>
          <button onClick={() => check("element","genetic engineering")}>genetic engineering</button><br/>
          <button onClick={() => check("element","evolution")}>human development</button><br/>
          <p>Humans advanced in any way?</p>
          <button onClick={() => check("character","microchip")}>yeah, microchips implanted in brains, as the antivaxxers say</button><br/>
          <button onClick={() => check("character","robot")}>they live w robots/cool gadgets</button><br/>
          <button onClick={() => check("character","superhuman")}>no tech, but they've evolved to become different/superhuman</button><br/>
          <button onClick={() => check("character","no tech")}>no, most don't have access to all the cool stuff bc it's expensive</button><br/>
          <button class="skipped" onClick={() => check("character","skip")}>skip</button><br/>
          <p>Is the tech actually being used for malicious purposes?</p>
          <button onClick={() => check("trope","bad govt")}>yes the government or some other entity is misusing it</button><br/>
          <button onClick={() => check("trope","scientist")}>yeah theres a mad scientist somewhere</button><br/>
          <button onClick={() => check("trope","good tech")}>no, it just makes lives easier</button><br/>
          <button class="skipped" onClick={() => check("trope","skip")}>skip</button><br/>
          <button class="skipped" onClick={() => back(["element","character","trope"],"tech","sciencefiction")}>back</button>
          <button class="skipped" onClick={() => submit()}>submit</button>
        </div>
        <div id="timetravel">
          <p>Forward or backward?</p>
          <button onClick={() => check("time","forward")}>forward</button><br/>
          <button onClick={() => check("time","backward")}>backward</button><br/>
          <button onClick={() => check("time","both")}>both</button>
          <p>Mechanism?</p>
          <button onClick={() => check("trope","time slip")}>time slip</button><br/>
          <button onClick={() => check("trope","time loop")}>time loop</button><br/>
          <button onClick={() => check("trope","time reverse")}>time reverse</button><br/>
          <button onClick={() => check("trope","time machine")}>time machine, in whatever form</button><br/>
          <button onClick={() => check("trope","visitor")}>communication from another time</button><br/>
          <button onClick={() => check("trope","precognition")}>precognition</button><br/>
          <p>Number of travels?</p>
          <button onClick={() => check("element","hopping")}>hopping around in time</button><br/>
          <button onClick={() => check("element","staying")}>going to one time once and staying there</button><br/>
          <button onClick={() => check("element","returning")}>going to one time but returning to original time</button><br/>
          <p>Number of timelines?</p>
          <button onClick={() => check("setting","one")}>just one, I don't want a headache</button><br/>
          <button onClick={() => check("setting","multiple")}>multiple, I wanna be thoroughly confused</button><br/>
          <p>Meeting ancestors/descendents?</p>
          <button onClick={() => check("character","no relatives")}>no, you might get into icky situations that way</button><br/>
          <button onClick={() => check("character","relatives")}>yes</button><br/>
          <p>Travelers?</p>
          <button onClick={() => check("POV","govt")}>ppl associated w the govt</button><br/>
          <button onClick={() => check("POV","no govt")}>ppl associated w some non-govt entity</button><br/>
          <button onClick={() => check("POV","rando group")}>a group not associated w anything</button><br/>
          <button onClick={() => check("POV","rando")}>idk some rando</button><br/>
          <button class="skipped" onClick={() => back(["element","character","trope","time","POV","setting"],"timetravel","sciencefiction")}>back</button>
          <button class="skipped" onClick={() => submit()}>submit</button>
        </div>

        <div id="romance">
          <p>What type of romance are you in the mood for?</p>
          <button onClick={() => check("mood","cute")}>cute and lighthearted, like a romcom</button><br/>
          <button onClick={() => check("mood","forbidden")}>forbidden romance, I wanna read about a taboo relationship</button><br/>
          <button onClick={() => check("mood","serious")}>serious and dramatic, you know...like two people thinking they'll die without each other</button><br/>
          <button onClick={() => check("mood","dark")}>dark and gritty. they've gotta be in danger, risking their lives to be together</button><br/>
          <p>The age of the couple?</p>
          <button onClick={() => check("character","teens")}>teens</button><br/>
          <button onClick={() => check("character","YAs")}>20-30 somethings</button><br/>
          <button onClick={() => check("character","adults")}>middle aged</button><br/>
          <button onClick={() => check("character","seniors")}>elderly</button><br/>
          <p>Any of these settings sound good?</p>
          <button onClick={() => check("setting","school")}>high school/college</button><br/>
          <button onClick={() => check("setting","royalty")}>royalty/kingdom</button><br/>
          <button onClick={() => check("setting","workplace")}>workplace. im thinking ppl with 40 hr work weeks and depressing cubicles</button><br/>
          <button onClick={() => check("setting","countryside")}>countryside</button><br/>
          <button class="skipped" onClick={() => check("setting","skip")}>skip</button><br/>
          <p>Tropes?</p>
          <button onClick={() => check("trope","ETL")}>enemies to lovers</button><br/>
          <button onClick={() => check("trope","FTL")}>friends to lovers</button><br/>
          <button onClick={() => check("trope","CTL")}>childhood connection</button><br/>
          <button onClick={() => check("trope","soulmates")}>soulmates</button><br/>
          <button onClick={() => check("trope","roomates")}>and they were roomates</button><br/>
          <button onClick={() => check("trope","break make")}>break up and make up</button><br/>
          <button onClick={() => check("trope","trapped")}>trapped together/there was only one bed</button><br/>
          <button onClick={() => check("trope","marriage")}>marriage of convenience</button><br/>
          <button onClick={() => check("trope","amnesia")}>amnesia/mistaken identity</button><br/>
          <button class="skipped" onClick={() => check("trope","skip")}>skip</button><br/>
          <p>Specifics of the relationship?</p>
          <button onClick={() => check("element","lgbtq+")}>lgbtq+</button><br/>
          <button onClick={() => check("element","age difference")}>age difference</button><br/>
          <button onClick={() => check("element","open relationship")}>open relationship</button><br/>
          <button onClick={() => check("element","long distance")}>long distance</button><br/>
          <button class="skipped" onClick={() => check("element","skip")}>skip</button><br/><br/>
          <button class="skipped" onClick={() => back(["mood","element","character","trope","setting"],"romance","realistic")}>back</button>
          <button class="skipped" onClick={submit}>submit</button>
        </div>
        <div id="historicfiction">
          <p>Historical eras?</p>
          <button onClick={() => check("time","classical")}>classical</button><br/>
          <button onClick={() => check("time","middle ages")}>middle ages</button><br/>
          <button onClick={() => check("time","early modern")}>early modern</button><br/>
          <button onClick={() => check("time","modern")}>modern (excluding current century)</button><br/>
          <button onClick={() => check("time","multiperiod")}>multiperiod</button><br/>
          <p>Location?</p>
          <button onClick={() => check("setting","Americas")}>Americas</button><br/>
          <button onClick={() => check("setting","Asia")}>Asia</button><br/>
          <button onClick={() => check("setting","Europe")}>Europe</button><br/>
          <button onClick={() => check("setting","Africa")}>Africa</button><br/>
          <button class="skipped" onClick={() => check("setting","skip")}>skip</button><br/>
          <p>Alternate History?</p>
          <button onClick={() => check("element","AH")}>Yes</button><br/>
          <button onClick={() => check("element","no AH")}>No, stick to the facts</button><br/>
          <button class="skipped" onClick={() => back(["time","element","setting"],"historicfiction","realistic")}>back</button>
          <button class="skipped" onClick={() => submit()}>submit</button>
        </div>
        <div id = "mystery">
          <p>Mood?</p>
          <button onClick={() => check("mood","cute")}>lighthearted, mystery doesn't involve any dangerous situations</button><br/>
          <button onClick={() => check("mood","serious")}>serious</button><br/>
          <button onClick={() => check("mood","dark")}>scary, something that'll take a psychological toll on me</button><br/>   
          <button onClick={() => check("mood","cerebral")}>cerebral, I wanna use my brain</button><br/>
          <p>Type of mystery?</p>
          <button onClick={() => check("subgenre","detective")}>detective</button><br/>
          <button onClick={() => check("subgenre","thriller")}>thriller</button><br/>
          <button onClick={() => check("subgenre","procedural")}>procedural</button><br/>
          <button onClick={() => check("subgenre","caper")}>caper</button><br/>
          <p>Would you like crime with your order?</p>
          <button onClick={() => check("trope","murder")}>murder</button><br/>
          <button onClick={() => check("trope","robbery")}>robbery</button><br/>
          <button onClick={() => check("trope","kidnapping")}>kidnapping/missing person</button><br/>
          <button onClick={() => check("trope","no crime")}>no crime</button><br/>
          <button class="skipped" onClick={() => check("trope","skip")}>skip</button><br/>  
          <p>Based on true story/true crime?</p>
          <button onClick={() => check("element","true crime")}>no</button><br/>
          <button onClick={() => check("element","no true crime")}>yes</button><br/>
          <button class="skipped" onClick={() => check("element","skip")}>skip</button><br/>     
          <p>POV?</p>
          <button onClick={() => check("POV","killer")}>the person who knows the answer, like a killer if it's a murder mystery</button><br/>
          <button onClick={() => check("POV","victim")}>the victim/the person most affected by the mystery</button><br/>
          <button onClick={() => check("POV","authorities")}>authorities</button><br/>
          <button onClick={() => check("POV","detective")}>private detective</button><br/>   
          <button onClick={() => check("POV","rando")}>idk just some rando it doesn't matter</button><br/> 
          <button class="skipped" onClick={() => back(["mood","subgenre","trope","element","POV"],"mystery","realistic")}>back</button>
          <button class="skipped" onClick={() => submit()}>submit</button>
        </div>
        <div id = "adventure">
          <p>Mood?</p>
          <button onClick={() => check("mood","cute")}>lighthearted, witty, funny</button><br/> 
          <button onClick={() => check("mood","serious")}>tense, serious</button><br/> 
          <button onClick={() => check("mood","dark")}>dark, intense</button><br/>    
          <button onClick={() => check("mood","fun")}>epic adventure but i don't mean epic like the poem type</button><br/> 
          <p>Epic?</p>
          <button onClick={() => check("POV","no epic")}>no</button><br/> 
          <button onClick={() => check("POV","epic")}>yes</button><br/> 
          <button>skip</button>
          <p>Characters grow up over time?</p>
          <button onClick={() => check("character","bildungsroman")}>yes</button><br/> 
          <button onClick={() => check("character","no bildungsroman")}>no. i fear the passage of time</button><br/> 
          <button>skip</button>
          <p>Hero(es)/villian(s)?</p>
          <button onClick={() => check("trope","genius")}>yep the underdog/rouge hero helping a group of people but theres not necessarily a villian</button><br/> 
          <button onClick={() => check("trope","traveler")}>no just someone traveling to new lands maybe learning lessons in the process, an explorer more than a hero</button><br/> 
          <button onClick={() => check("trope","travelers")}>no central hero just different characters traveling around</button><br/>   
          <button onClick={() => check("trope","hero")}>want some baddies being a pain in the neck for ppl and theres only one person to put an end to them</button><br/>      
          <p>Fighting?</p>
          <button onClick={() => check("element","banter")}>no the most i want is banter</button><br/> 
          <button onClick={() => check("element","guns")}>yeah weapons...guns, bombs, maybe war</button><br/> 
          <button onClick={() => check("element","spears")}>maybe like bows and arrows, spears, or swords</button><br/>    
          <button onClick={() => check("element","fists")}>fists to faces</button><br/>  
          <button class="skipped" onClick={() => back(["mood","character","trope","element","POV"],"adventure","realistic")}>back</button>
          <button class="skipped" onClick={() => submit()}>submit</button>
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
        {/* </div> */}
        </body>
    );
  }
}
export default TakeQuiz;

