import React, { useState } from 'react'
import { dateCheck } from './utils'

export default function useTimeCheck() {
  const [isStart, setIsStart] = useState('before')
  const timeCheck = async () => {
    const result = await dateCheck()
    setIsStart(result)
  }
  return {
    isStart,
    setIsStart,
    timeCheck,
  }
}
