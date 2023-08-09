import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Ryan Browne",
    "title": "SoftBank reports surprise loss in first quarter but Vision Fund books $1 billion investment gain - CNBC",
    "description": "SoftBank surprised the market with a loss in the first quarter, though its Vision Fund booked a $1.1 billion gain on investments — its first in five quarters.",
    "url": "https://www.cnbc.com/2023/08/08/softbank-q1-earnings-2023.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107259792-1687311683458-gettyimages-1229449370-JAPAN_SOFTBANK.jpeg?v=1691475708&w=1920&h=1080",
    "publishedAt": "2023-08-08T06:21:48Z",
    "content": "SoftBank reported a surprise loss in the first quarter covering April-June, despite an investment gain from its massive tech-focused Vision Fund.\r\nHere's how the company did:\r\n<ul><li>The SoftBank gr… [+4181 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Athletic"
    },
    "author": "Brittany Ghiroli",
    "title": "Ghiroli: Orioles’ unforced error with announcer Kevin Brown dims team’s shine at wrong time - The Athletic",
    "description": "Kevin Brown was removed from Orioles broadcasts after his comments on July 23 about the team's recent lack of success against the Rays.",
    "url": "https://theathletic.com/4757354/2023/08/07/ghiroli-orioles-announcer-kevin-brown/",
    "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/08/07214124/GettyImages-1247402282-scaled.jpg",
    "publishedAt": "2023-08-08T06:09:12Z",
    "content": "The Orioles reached 70 wins on Sunday. They are young, fun and arguably the best story in baseball. And yet the headlines on Monday werent about any of that. They were, as first reported by Awful Ann… [+4357 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "Joe Cash",
    "title": "China's trade slumps, threatening recovery prospects - Reuters",
    "description": "China's imports and exports fell much faster than expected in July as weaker demand threatens recovery prospects in the world's second-largest economy, heightening pressure for authorities to release fresh stimulus to steady growth.",
    "url": "https://www.reuters.com/world/china/chinas-july-exports-imports-fall-much-faster-than-expected-2023-08-08/",
    "urlToImage": "https://www.reuters.com/resizer/T1BMwQVOUztV2f0fuQy71KeyjTQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VPWB4FK7NJPEPC5KZF3BLYNRBY.jpg",
    "publishedAt": "2023-08-08T06:06:36Z",
    "content": "BEIJING, Aug 8 (Reuters) - China's imports and exports fell much faster than expected in July as weaker demand threatens recovery prospects in the world's second-largest economy, heightening pressure… [+3833 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "Krishn Kaushik",
    "title": "Exclusive: India bars makers of military drones from using Chinese parts - Reuters",
    "description": "India in recent months has barred domestic manufacturers of military drones from using components made in China over concerns about security vulnerabilities, according to four defence and industry officials and documents reviewed by Reuters.",
    "url": "https://www.reuters.com/world/asia-pacific/india-bars-makers-military-drones-using-chinese-parts-2023-08-08/",
    "urlToImage": "https://www.reuters.com/resizer/Z9PkcrFtjadlU-Tb6ulw06kgfEI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4FQ5NYVUANLULAG5JNLMV3GIU4.jpg",
    "publishedAt": "2023-08-08T05:08:16Z",
    "content": "NEW DELHI, Aug 8 (Reuters) - India in recent months has barred domestic manufacturers of military drones from using components made in China over concerns about security vulnerabilities, according to… [+6017 chars]"
    },
    {
    "source": {
    "id": "associated-press",
    "name": "Associated Press"
    },
    "author": "MELINA WALLING",
    "title": "Even frozen Antarctica is being walloped by climate extremes, scientists find - The Associated Press",
    "description": "A new study concludes that Antarctica is already being and will continue to be affected by more frequent and severe extreme weather events, a known byproduct of human-caused climate change. Many of those changes are drastic, unprecedented and irreversible. Ic…",
    "url": "https://apnews.com/article/antarctic-ice-extreme-weather-climate-change-d9eff33e1acc06512e4e47156745237a",
    "urlToImage": "https://dims.apnews.com/dims4/default/d2b52ad/2147483647/strip/true/crop/5088x2862+0+170/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fee%2F2f%2Fc5dc393f3da2b9aeb83930b65de4%2F21a52850b0b14e31ba476883abfe4ae2",
    "publishedAt": "2023-08-08T04:28:00Z",
    "content": "Even in Antarctica one of the most remote and desolate places on Earth scientists say they are finding shattered temperature records and an increase in the size and number of wacky weather events.\r\nT… [+5040 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Eonline.com"
    },
    "author": "Angie Orellana Hernandez",
    "title": "Sandra Bullock's Sister Shares How Actress Cared for Boyfriend Bryan Randall Before His Death - E! NEWS",
    "description": "Sandra Bullock's sister Gesine Bullock-Prado paid tribute to the actress' longtime boyfriend Bryan Randall, who died on Aug. 5 after a private three-year battle with ALS. He was 57.",
    "url": "https://www.eonline.com/news/1382448/sandra-bullocks-sister-shares-how-actress-cared-for-boyfriend-bryan-randall-before-his-death",
    "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/202377/cr_1200x1200-230807185756-GettyImages-1507060899.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
    "publishedAt": "2023-08-08T02:08:00Z",
    "content": "Sandra Bullock's family is mourning the loss of her longtime partner Bryan Randall.\r\nThe Gravity star's sister Gesine Bullock-Prado penned a touching message in honor of Bryan, who died on Aug. 5 at … [+1186 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "Nate Raymond",
    "title": "US court blocks Biden debt relief rule benefiting defrauded students - Reuters",
    "description": "A federal appeals court on Monday blocked the Biden administration from proceeding with another piece of its student debt relief agenda, a rule that would make it easier for people who are defrauded by their schools to have their loans forgiven.",
    "url": "https://www.reuters.com/legal/us-court-blocks-biden-debt-relief-rule-benefiting-defrauded-students-2023-08-07/",
    "urlToImage": "https://www.reuters.com/resizer/cH9NJjqz5Y2-zfL6xsc8cakgbPg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/P3OND67CTNNZFLW6STIFM7BXBA.jpg",
    "publishedAt": "2023-08-08T01:33:00Z",
    "content": "Aug 7 (Reuters) - A federal appeals court on Monday blocked the Biden administration from proceeding with another piece of its student debt relief agenda, a rule that would make it easier for people … [+2337 chars]"
    },
    {
    "source": {
    "id": "abc-news",
    "name": "ABC News"
    },
    "author": "Alexander Mallin",
    "title": "Judge in Trump's classified documents case questions use of out-of-district grand jury in probe - ABC News",
    "description": "Judge Aileen Cannon is demanding answers from special counsel Jack Smith.",
    "url": "https://abcnews.go.com/US/judge-trumps-classified-documents-case-questions-district-grand/story?id=102072911",
    "urlToImage": "https://s.abcnews.com/images/US/trump-ap-ml-230807_1691421982810_hpMain_16x9_992.jpg",
    "publishedAt": "2023-08-08T01:30:49Z",
    "content": "The judge overseeing former President Donald Trump's classified documents case is raising questions about special counsel Jack Smith's use of an out-of-district grand jury to conduct his probe.\r\nU.S.… [+2843 chars]"
    },
    {
    "source": {
    "id": "associated-press",
    "name": "Associated Press"
    },
    "author": "LINDSEY BAHR",
    "title": "William Friedkin, Oscar-winning director of 'The Exorcist' and 'The French Connection,' dead at 87 - The Associated Press",
    "description": "William Friedkin, the Oscar winning director of two gripping film classics, “The French Connection” and “The Exorcist,” has died. He was 87. A representative from his office said he died Monday in Los Angeles. Friedkin was in his early 30s when he won the bes…",
    "url": "https://apnews.com/article/william-friedkin-dead-exorcist-french-connection-director-79c5a8a32479f4accff3533c19c15094",
    "urlToImage": "https://dims.apnews.com/dims4/default/448c387/2147483647/strip/true/crop/3088x1737+0+155/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F69%2Fca%2F4a502f7ceefd9f634b38f4edfaec%2F1f516923e47745938fc62ff61c49758b",
    "publishedAt": "2023-08-08T01:13:00Z",
    "content": "LOS ANGELES (AP) William Friedkin, the generation-defining director who brought a visceral realism to 1970s hits The French Connection and The Exorcist and was quickly anointed one of Hollywoods top … [+8051 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "49ers Webzone"
    },
    "author": "Rohan Chakravarthi",
    "title": "49ers Training Camp Day 10 breakdown: Quarterbacks - 49ers Webzone",
    "description": "Day 10 of the San Francisco 49ers training camp is officially over, concluding this portion of the offseason, as the 49ers will head to Las Vegas for joint practices with the Raiders at the end of the",
    "url": "https://www.49erswebzone.com/articles/170528-49ers-training-camp-day-breakdown-quarterbacks/",
    "urlToImage": "https://static.49erswebzone.com/v/SqBxu6/content/media/article/1d8d58aebb3b535e47e0ab4b7e1d9cd0.jpg?social=true",
    "publishedAt": "2023-08-08T01:02:55Z",
    "content": "Day 10 of the San Francisco 49ers training camp is officially over, concluding this portion of the offseason, as the 49ers will head to Las Vegas for joint practices with the Raiders at the end of th… [+11057 chars]"
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": "Aliza Chasan",
    "title": "Severe weather sweeps east, sending federal workers in D.C. home early and canceling flights - CBS News",
    "description": "More than 1 million are without power as the East Coast is facing a forecast of severe thunderstorms, damaging winds, large hail and tornadoes.",
    "url": "https://www.cbsnews.com/news/severe-weather-storms-flights-canceled-federal-workers-dc-sent-home-early/",
    "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/08/07/a3b01d5b-76a4-4c3e-84d9-c0e9e25b1bfe/thumbnail/1200x630/92ed3f671ed07143953556b7aaef12d7/ap23219801177590.jpg?v=4c3eff96812a3b6c2e014b1daed33369",
    "publishedAt": "2023-08-08T01:02:00Z",
    "content": "Tornado watches and warnings were posted along the East Coast on Monday as meteorologists warned millions of people to brace for severe thunderstorms, damaging winds and large hail. \r\nThe National We… [+3344 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Spaceflight Now"
    },
    "author": null,
    "title": "First piloted flight of Boeing's oft-delayed Starliner spacecraft slips to at least March – Spaceflight Now - Spaceflight Now",
    "description": null,
    "url": "https://spaceflightnow.com/2023/08/08/first-piloted-flight-of-boeings-oft-delayed-starliner-spacecraft-slips-to-at-least-march/",
    "urlToImage": null,
    "publishedAt": "2023-08-08T00:41:58Z",
    "content": "A Starliner capsule and its service module during processing at Boeing’s assembly hangar at the Kennedy Space Center. Image: NASA.\r\nThe first piloted launch of Boeing’s oft-delayed Starliner crew cap… [+6454 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digital Trends"
    },
    "author": "Caleb Denison",
    "title": "LG’s new M-Series Wireless OLED TVs start at $5,000 - Digital Trends",
    "description": "LG has announced the suggested pricing for its new M3 OLED TVs with wireless technology, with orders expected to open late August 2023",
    "url": "http://www.digitaltrends.com/home-theater/lg-m-series-wireless-m3-oled-price-availability/",
    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/01/lg-97-inch-oled-M3-2.jpeg?resize=1200%2C630&p=1",
    "publishedAt": "2023-08-08T00:33:24Z",
    "content": "Digital Trends has acquired suggested U.S. pricing information for LG’s new M-Series wireless OLED TVs. Three sizes are available for the so-called M3 OLED model, ranging from 77 to 97 inches. Exact … [+2821 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Eonline.com"
    },
    "author": "Lindsay Weinberg",
    "title": "Kim Kardashian Shares She Broke Her Shoulder - E! NEWS",
    "description": "Kim Kardashian recently broke her shoulder and tore a tendon, explaining that she had to put her workouts on pause for a few weeks. Here's how she's making progress now.",
    "url": "https://www.eonline.com/news/1382472/kim-kardashian-shares-she-broke-her-shoulder",
    "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2023628/rs_1200x1200-230728110944-1200-Kim_Kardashian.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
    "publishedAt": "2023-08-08T00:09:00Z",
    "content": "Kim Kardashian has been recovering after breaking her shoulder.\r\nThe Kardashians star shared on Aug. 7 that she recently suffered the injuryalong with a torn tendonand has been resting her body while… [+705 chars]"
    },
    {
    "source": {
    "id": "fox-news",
    "name": "Fox News"
    },
    "author": "Paulina Dedaj",
    "title": "Riley Gaines, activists say they were spat on, attacked by protesters at ceremonial bill signing in Texas - Fox News",
    "description": "Protesters at the signing of the \"Safe Women's Sports Act\" in Texas on Monday were accused of spitting and throwing bottles at attendees including IWN chapter leader Michelle Evans.",
    "url": "https://www.foxnews.com/sports/riley-gaines-activists-say-they-were-spat-attacked-protesters-ceremonial-bill-signing-texas",
    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/06/Riley-Gaines.jpg",
    "publishedAt": "2023-08-08T00:05:17Z",
    "content": "Former NCAA Division 1 athletes Riley Gaines and Paula Scanlan were among those who were targeted by \"hostile\" protesters that gathered in Texas on Monday in opposition of the \"Save Womens Sports Act… [+4917 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Phys.Org"
    },
    "author": "Science X",
    "title": "Whale like filter-feeding discovered in prehistoric marine reptile - Phys.org",
    "description": "A remarkable new fossil from China reveals for the first time that a group of reptiles were already using whale-like filter feeding 250 million years ago.",
    "url": "https://phys.org/news/2023-08-whale-filter-feeding-prehistoric-marine-reptile.html",
    "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2023/whale-like-filter-feed-1.jpg",
    "publishedAt": "2023-08-08T00:00:01Z",
    "content": "A remarkable new fossil from China reveals for the first time that a group of reptiles were already using whale-like filter feeding 250 million years ago.\r\nNew research by a team from China and the U… [+3195 chars]"
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": null,
    "title": "Tesla CFO Zachary Kirkhorn steps down after 13 years with company - CBS News",
    "description": "He will remain with Tesla through the end of the year to \"support a seamless transition,\" according to the company.",
    "url": "https://www.cbsnews.com/news/elon-musk-tesla-cfo-zachary-kirkhorn/",
    "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/08/07/5a3f39e4-50a5-4679-beba-c1a8a817b956/thumbnail/1200x630/62c4cace67c8a722f15cf127b0b56df5/kirkhorn-linkedin.jpg?v=4c3eff96812a3b6c2e014b1daed33369",
    "publishedAt": "2023-08-07T22:11:00Z",
    "content": "Tesla Chief Financial Officer Zachary Kirkhorn is departing after 13 years with the the electric vehicle and solar panel maker.\r\nKirkhorn stepped down Friday but will remain with Tesla through the en… [+2152 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "Why is instability in Niger a problem for the US and its allies? | DW News - DW News",
    "description": "Last week the military in Niger seized power, detailing President Mohamed Bazoum. A coup that drew international condemnation and the threat of military inte...",
    "url": "https://www.youtube.com/watch?v=rQUWkE0dxQA",
    "urlToImage": "https://i.ytimg.com/vi/rQUWkE0dxQA/maxresdefault.jpg",
    "publishedAt": "2023-08-07T21:59:00Z",
    "content": null
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Amanda Musa",
    "title": "Older women’s breast cancer is often overdiagnosed, study finds, raising risk of unnecessary treatment - CNN",
    "description": "A study published Monday in the Annals of Internal Medicine found that large numbers of American women ages 70 to 85 are potentially overdiagnosed with breast cancer and therefore could receive unnecessary treatment.",
    "url": "https://www.cnn.com/2023/08/07/health/breast-cancer-overdiagnosis/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230330103254-mammogram-stock.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-08-07T21:58:00Z",
    "content": "A breast cancer diagnosis is an all-too-common reality for women around the world. In the US, about 240,000 cases of breast cancer are diagnosed in women every year, the US Centers for Disease Contro… [+6892 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "TribLIVE"
    },
    "author": "Stephanie Ritenbaugh",
    "title": "Covid cases rise slightly but remain low compared to previous years in Western Pa. - TribLIVE",
    "description": "Despite a slight increase in the number of covid-19 cases across the country, rates remain low, and they are far below the past few summers, both regionally and nationally. &ldquo;Overall, we&rsquo;ve had a pretty flat trajectory,&rdquo; LuAnn Brink, chief ep…",
    "url": "https://triblive.com/local/regional/covid-cases-rise-slightly-but-remain-low-compared-to-previous-years/",
    "urlToImage": "https://assets-varnish.triblive.com/2023/08/6453596_web1_gtr-covidCVSHemp-071823.jpg",
    "publishedAt": "2023-08-07T21:36:49Z",
    "content": "Despite a slight increase in the number of covid-19 cases across the country, rates remain low, and they are far below the past few summers, both regionally and nationally.\r\n“Overall, we’ve had a pre… [+4242 chars]"
    }
    ]
  constructor(){
    super()
    this.state={
      articles: this.articles
    }
  }

  async componentDidMount(){
    let url = 'https://newsapi.org/v2/everything?q=nepal&apiKey=18a69ba88388491ca6c51f6336249e6b';
    let data = await fetch(url);
    let processedData = await data.json();
    console.log(processedData);
    this.setState({
      articles:processedData.articles
    });
  }
  render() {
    return (
      <div className='container'>
        <h2>Nepal News Updates:</h2>
        <div className='row my-3'>
        {this.state.articles.map((element)=>{
          return <div className='col-md-4' key={element.url}>
          <NewsItem  description={element.description ? element.description.slice(0 , 80) : ''} title={element.title ? element.title.slice(0, 30) : ''} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}
        </div>
      
      </div>
    )
  }
}

export default News
