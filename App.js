import './App.css';
import{Card} from './components/card/Card';
import image1 from './images/image1.jpeg'
import image2 from './images/image1.jpeg'
import image3 from './images/image1.jpeg'
import image4 from './images/image1.jpeg'
import image5 from './images/image1.jpeg'

function App(){
    const cards=[
        {
             url:image1,
        title:"Audi r8",
        description:"sjhsdojfiodsjvfjdk"
    },
    {
        url:image2,
   title:"Audi r8",
   description:"sjhsdojfiodsjvfjdk"
},
{
    url:image3,
title:"Audi r8",
description:"sjhsdojfiodsjvfjdk"
},
{
    url:image4,
title:"Audi r8",
description:"sjhsdojfiodsjvfjdk"
},
{
    url:image5,
title:"Audi r8",
description:"sjhsdojfiodsjvfjdk"
}
    ]
    return(
        <div className="app">
            {
                cards.map((card,index)=><Card key={index} card={card}/>)
            }
        
    
        </div>
    );
}
export default App;