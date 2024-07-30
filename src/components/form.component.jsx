import { Btn } from "@/components"
import { generateMsg } from "@/helpers"
import { useInput } from "@/hooks"
import { PersianDate, getTimeFa, persianifyNumber } from "@/utils"
import { useEffect } from "react"
import styles from "./form.module.css"

const TEMPLATE = `.
👋🏻 GREETING
🌱 NAME
📅 DATE - TODAY
🕰 FROM_WORD FROM_TIME TO_WORD TO_TIME
STATUS
.`

function Form() {
  const now = new PersianDate()
  const nowTime = getTimeFa(now)

  const fromInput = useInput(nowTime, "FROM_INPUT")
  const toInput = useInput(nowTime, "TO_INPUT")
  const todayInput = useInput(now.toLocaleDateString())

  const copyText = text => navigator.clipboard.writeText(text)
  const preventSubmission = e => e.preventDefault()
  const resetFrom = () => fromInput.setValue(getTimeFa(new PersianDate()))
  const resetTo = () => toInput.setValue(getTimeFa(new PersianDate()))
  const resetToday = () => todayInput.setValue(new PersianDate().toLocaleDateString())

  const mappings = {
    GREETING: "سلام",
    NAME: "محمد مهدی بهرامی",
    DATE: todayInput.value,
    TODAY: now.getDayName(),
    FROM_WORD: "از",
    FROM_TIME: fromInput.value || "؟؟:؟؟",
    TO_WORD: "تا",
    TO_TIME: toInput.value || "؟؟:؟؟",
    STATUS: toInput.value.length <= 0 ? "🙋🏻‍♂️ حاضر" : "🏡 خونه",
  }

  const generatedMsg = generateMsg(TEMPLATE, mappings)

  return (
    <form onSubmit={preventSubmission} className={styles.form}>
      <div>
        <label>
          <span>امروز: </span>
          <input {...todayInput.input} type="text" dir="ltr" />
        </label>
        <Btn onClick={resetToday}>امروز</Btn>
      </div>
      <div>
        <label>
          <span>از: </span>
          <input {...fromInput.input} type="text" dir="ltr" />
        </label>
        <Btn onClick={resetFrom}>الان</Btn>
      </div>
      <div>
        <label>
          <span>تا: </span>
          <input {...toInput.input} type="text" dir="ltr" />
        </label>
        <Btn onClick={resetTo}>الان</Btn>
      </div>
      <div>
        <Btn isPrimary type="submit" onClick={() => copyText(generatedMsg)}>
          بساز و کپی کن
        </Btn>
      </div>
    </form>
  )
}

export default Form
