const fetch = require('node-fetch')
const local = require('../local')
// const local = {
//   endpoint: 'http://localhost:8000/a',
// }

const variants = [
  // TRAINS
  ['NEX', 2],
  ['EAST', 2],
  ['ONE', 2],
  ['STH', 2],
  ['WEST', 2],
  ['PUK', 2],

  ['DEV', 2],
  ['HMB', 2],
  ['BIRK', 2],
  ['BAYS', 2],
  ['MTIA', 2],
  ['SBAY', 2],
  ['WSTH', 2],
  ['RAK', 2],
  ['PINE', 2],
  ['HOBS', 2],

  // CITY
  ['CTY', 1],
  ['INN', 2],
  ['TMK', 2],

  // ISTHMUS
  ['OUT', 2],
  ['20', 2],
  ['22A', 2],
  ['24W', 2],
  ['25L', 2],
  ['25B', 2],
  ['27T', 2],
  ['30', 2],
  ['32', 2],
  ['33', 2],
  ['66', 2],
  ['68', 2],
  ['70', 2],
  ['72C', 2],
  ['75', 2],
  ['380', 2],
  ['22R', 2],
  ['22N', 2],
  ['24B', 2],
  ['24R', 2],
  ['27H', 2],
  ['27W', 2],
  ['105', 2],
  ['106', 1],
  ['186', 1],
  ['195', 2],
  ['295', 2],
  ['309', 2],
  ['313', 2],
  ['323', 2],
  ['325', 2],
  ['650', 2],
  ['670', 2],
  ['712', 2],
  ['743', 2],
  ['744', 2],
  ['747', 2],
  ['751', 2],
  ['755', 2],
  ['762', 2],
  ['781', 2],
  ['107', 1],
  ['138', 2],
  ['161', 2],
  ['298', 2],
  ['321', 2],
  ['324', 2],
  ['326', 2],
  ['351', 2],
  ['711', 2],
  ['782', 2],
  ['783', 2],

  // NORTH OF MOTORWAY ISTHMUS
  ['70', 2],
  ['711', 2],
  ['712', 2],
  ['714', 2],
  ['72C', 2],
  ['72M', 2],
  ['72X', 2],
  ['733', 2],
  ['734', 2],
  ['735', 2],
  ['739', 2],

  ['31', 2],
  ['309X', 2],
  ['313', 2],
  ['314', 2],
  ['32', 2],
  ['324', 2],
  ['325', 2],
  ['326', 2],
  ['33', 2],
  ['352', 2],
  ['353', 2],
  ['361', 2],
  ['362', 2],
  ['363', 1],
  ['365', 2],
  ['366', 2],
  ['368', 1],
  ['369', 1],
  ['371', 2],
  ['372', 1],
  ['373', 2],
  ['376', 2],
  ['377', 2],
  ['378', 1],
  ['380', 2],
  ['391', 1],
  ['392', 1],
  ['393', 1],
  ['394', 2],
  ['395', 2],
  ['396', 2],
  ['398', 2],
  ['399', 2],

  // WEST
  ['14T', 2],
  ['14W', 2],
  ['18', 2],
  ['107', 1],
  ['110', 2],
  ['111', 1],
  ['112', 2],
  ['114', 2],
  ['120', 2],
  ['122', 2],
  ['125', 2],
  ['125X', 2],
  ['129', 2],
  ['131', 2],
  ['132', 2],
  ['132X', 2],
  ['133', 2],
  ['133X', 2],
  ['134', 2],
  ['138', 2],
  ['141', 1],
  ['142', 1],
  ['143', 2],
  ['146', 2],
  ['151X', 2],
  ['152', 2],
  ['154', 2],
  ['161', 2],
  ['162', 2],
  ['170', 2],
  ['171', 2],
  ['171X', 2],
  ['172', 2],
  ['172X', 2],
  ['186', 1],
  ['195', 2],
  ['209', 2],

  ['555', 2],
  ['560', 2],
  ['76X', 2],
  ['779', 2],
  ['802X', 2],
  ['803', 3],
  ['804', 1],
  ['813', 2],
  ['815', 2],
  ['822', 2],
  ['839', 2],
  ['843', 2],
  ['85X', 2],
  ['858', 2],
  ['86X', 2],
  ['863X', 2],
  ['87X', 2],
  ['873', 2],
  ['873X', 2],
  ['874X', 2],
  ['875', 2],
  ['877X', 2],
  ['879', 2],
  ['880', 2],
  ['881', 2],
  ['882', 2],
  ['886', 2],
  ['887', 2],
  ['891', 2],
  ['891X', 2],
  ['900X', 2],
  ['905', 2],
  ['911', 2],
  ['913', 2],
  ['915', 2],
  ['920', 1],
  ['921', 1],
  ['922', 2],
  ['945', 2],
  ['945X', 2],
  ['952', 2],
  ['953', 2],
  ['955', 2],
  ['957', 2],
  ['958', 2],
  ['960', 2],
  ['962', 2],
  ['966', 2],
  ['971', 2],
  ['972', 2],
  ['973', 2],
  ['974', 2],
  ['975', 2],
  ['976', 2],
  ['981', 2],
  ['982', 2],
  ['983', 2],
  ['984', 2],
  ['985', 2],
  ['986', 2],
  ['987', 1],
  ['988', 2],
  ['991X', 2],
  ['992X', 2],

  ['70H', 1],

  ['1', 2],
  ['1a', 2],
  ['2', 2],
  ['3', 2],
  ['4', 2],
]

async function testLines() {
  console.log('Have a testing framework.')
  console.log('Running Line Tests for NZ-AKL')

  let total = 0
  let passed = 0
  let failed = 0

  for (const route of variants) {
    const res = await fetch(`${local.endpoint}/nz-akl/line/` + route[0])
    const data = await res.json()

    if (route[1] === data.length) {
      // console.log('pass', route[0])
      passed++
    } else {
      console.log(
        'fail',
        route[0],
        `expected ${route[1]}, got ${data.length} variants`
      )
      failed++
    }
    total++
  }

  console.log(`passed ${passed}/${total} tests`)
  console.log(`failed ${failed}/${total} tests`)
}
testLines()
