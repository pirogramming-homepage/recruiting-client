import React, { useState } from 'react'

export default function useExamine() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  
  const onClickRankBtn = (index) => {
    setSelectedIndex(index);
    console.log(selectedIndex);
  }

  return {
    onClickRankBtn,
    selectedIndex
  }
}
