import { exec, execSync } from "child_process";
import cardData from './orig-data.json'
import util from 'node:util'

const execP = util.promisify(exec)

// console.log('Hello World!')

// Your TS CLI project is ready to go!

// Some defaults have been configured to get you rolling.

// Use: `npm start` in a terminal to run the project, see the package.json for
// other helpful scripts.

async function findCardPath(card: string) {
    const {stdout, stderr} = await execP(`./getMtgUrl.sh "${card}"`)
    return stdout; 
}

let updatedList:Array<any> = []



async function processCards() {
    for(let cardDatum of cardData) {
        try {
            cardDatum.card1ImageUrl = await findCardPath(cardDatum.card1Name)
            cardDatum.card2ImageUrl = await findCardPath(cardDatum.card2Name)
            // console.log('adding card to list')
            updatedList.push(cardDatum)
        } catch(e) {
            console.log(e)
        }
    }
    
    console.log(JSON.stringify(cardData))
}

processCards();