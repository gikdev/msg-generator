import { persianifyNumber } from "./utils"

function generateMsg(TEMPLATE, mappings) {
  const mappingsKeys = Object.keys(mappings)
  let readyMsg = TEMPLATE

  for (const key of mappingsKeys) {
    readyMsg = readyMsg.replaceAll(key, persianifyNumber(mappings[key]))
  }

  return readyMsg
}

export { generateMsg }
