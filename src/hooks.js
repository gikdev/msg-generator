import { useCallback, useEffect, useState } from "react"

function useInput(initialValue, key) {
  const [value, setValue] = useState(() => {
    const currentInLS = localStorage.getItem(key)
    return currentInLS != null ? currentInLS : initialValue
  })

  const onChange = useCallback(e => {
    setValue(e.target.value)
  }, [])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!key) return

    localStorage.setItem(key, value)
  }, [value])

  return { value, setValue, input: { value, onChange } }
}

export { useInput }
